import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * On-Demand Revalidation Webhook for Sanity CMS
 * Configure in Sanity Studio: Project Management -> API -> Webhooks
 * URL: https://parthuinteriors.in/api/revalidate
 * Trigger on: Create, Update, Delete
 */
export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      // Empty or query-based trigger
    }

    const { searchParams } = new URL(req.url);
    const secret = searchParams.get('secret') || req.headers.get('x-sanity-secret');
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ error: 'Invalid secret token' }, { status: 401 });
    }

    const _type = body._type || searchParams.get('type') || '';
    const slug = body.slug?.current || body.slug || searchParams.get('slug') || '';

    // Invalidate cache tags
    if (_type) {
      revalidateTag(_type, 'default');
      revalidateTag(`${_type}s`, 'default');
    } else {
      revalidateTag('projects', 'default');
      revalidateTag('services', 'default');
      revalidateTag('locations', 'default');
      revalidateTag('posts', 'default');
      revalidateTag('siteSettings', 'default');
    }

    // Invalidate specific page routes
    if (!_type || _type === 'project' || _type === 'projects') {
      revalidatePath('/projects');
      if (slug) revalidatePath(`/projects/${slug}`);
    }
    
    if (!_type || _type === 'service' || _type === 'services') {
      revalidatePath('/services');
      if (slug) revalidatePath(`/services/${slug}`);
    }

    if (!_type || _type === 'location' || _type === 'locations') {
      revalidatePath('/locations');
      if (slug) revalidatePath(`/locations/${slug}`);
    }

    if (!_type || _type === 'post' || _type === 'blog') {
      revalidatePath('/blog');
      if (slug) revalidatePath(`/blog/${slug}`);
    }

    // Always revalidate homepage and sitemap
    revalidatePath('/');
    revalidatePath('/sitemap.xml');

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type: _type || 'all',
      slug: slug || 'all',
    });
  } catch (err: any) {
    console.error('Revalidation webhook error:', err);
    return NextResponse.json({ error: err.message || 'Revalidation failed' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Allow manual browser test: /api/revalidate
  return POST(req);
}
