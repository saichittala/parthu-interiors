import { NextResponse } from 'next/server';
import { getDb } from '@/app/lib/db';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`SELECT key, data, updated_at FROM parthu_content;`;

    const contentMap: Record<string, any> = {};
    for (const row of rows) {
      contentMap[row.key] = typeof row.data === 'string' ? JSON.parse(row.data) : row.data;
    }

    return NextResponse.json({
      success: true,
      projects: contentMap.projects || [],
      blogs: contentMap.blogs || [],
      testimonials: contentMap.testimonials || [],
      siteSettings: contentMap.site_settings || null,
      beforeAfter: contentMap.before_after || null
    });
  } catch (err: any) {
    console.error('API /content GET error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Database fetch failed'
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json({ success: false, error: 'Missing type or data' }, { status: 400 });
    }

    const keyMap: Record<string, string> = {
      projects: 'projects',
      blogs: 'blogs',
      testimonials: 'testimonials',
      settings: 'site_settings',
      site_settings: 'site_settings',
      before_after: 'before_after',
      beforeAfter: 'before_after'
    };

    const dbKey = keyMap[type] || type;
    const sql = getDb();

    // 1. Update Neon Postgres Database (Instant live sync across all servers)
    await sql`
      INSERT INTO parthu_content (key, data, updated_at)
      VALUES (${dbKey}, ${JSON.stringify(data)}, NOW())
      ON CONFLICT (key) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW();
    `;

    // 2. Also write to local content JSON file if in local development
    try {
      if (process.env.NODE_ENV !== 'production') {
        const contentDir = path.join(process.cwd(), 'content');
        if (!fs.existsSync(contentDir)) {
          fs.mkdirSync(contentDir, { recursive: true });
        }
        if (dbKey === 'blogs') {
          fs.writeFileSync(path.join(contentDir, 'blogs.json'), JSON.stringify(data, null, 2), 'utf8');
        } else if (dbKey === 'projects') {
          fs.writeFileSync(path.join(contentDir, 'projects.json'), JSON.stringify(data, null, 2), 'utf8');
        } else if (dbKey === 'testimonials') {
          fs.writeFileSync(path.join(contentDir, 'testimonials.json'), JSON.stringify(data, null, 2), 'utf8');
        } else if (dbKey === 'site_settings') {
          fs.writeFileSync(path.join(contentDir, 'siteSettings.json'), JSON.stringify(data, null, 2), 'utf8');
        }
      }
    } catch (fsErr) {
      console.warn('Could not write to local file (safe to ignore in production):', fsErr);
    }

    return NextResponse.json({ success: true, updated: dbKey });
  } catch (err: any) {
    console.error('API /content POST error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Database update failed' },
      { status: 500 }
    );
  }
}
