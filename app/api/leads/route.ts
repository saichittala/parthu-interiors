import { NextResponse } from 'next/server';
import { getDb } from '@/app/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT id, name, phone, email, property_type, location, budget, time_to_start, scope, message, source, status, notes, created_at
      FROM parthu_leads
      ORDER BY created_at DESC;
    `;

    const mapped = rows.map((r) => ({
      id: r.id,
      name: r.name,
      phone: r.phone,
      email: r.email,
      propertyType: r.property_type,
      location: r.location,
      budget: r.budget,
      timeToStart: r.time_to_start,
      scope: r.scope,
      message: r.message,
      source: r.source,
      status: r.status,
      notes: r.notes,
      timestamp: r.created_at
    }));

    return NextResponse.json({ success: true, leads: mapped });
  } catch (err: any) {
    console.error('API /leads GET error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sql = getDb();

    const id = body.id || `lead-${Date.now()}`;
    const name = body.name || 'Valued Client';
    const phone = body.phone || '';
    const email = body.email || '';
    const propertyType = body.propertyType || '3 BHK Apartment';
    const location = body.location || 'Hyderabad';
    const budget = body.budget || 'Custom';
    const timeToStart = body.timeToStart || 'Immediate';
    const scope = body.scope || '';
    const message = body.message || '';
    const source = body.source || 'Website Form';
    const status = body.status || 'New';
    const notes = body.notes || '';

    await sql`
      INSERT INTO parthu_leads (id, name, phone, email, property_type, location, budget, time_to_start, scope, message, source, status, notes, created_at)
      VALUES (${id}, ${name}, ${phone}, ${email}, ${propertyType}, ${location}, ${budget}, ${timeToStart}, ${scope}, ${message}, ${source}, ${status}, ${notes}, NOW())
      ON CONFLICT (id) DO UPDATE SET
        status = EXCLUDED.status,
        notes = EXCLUDED.notes;
    `;

    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    console.error('API /leads POST error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required' }, { status: 400 });
    }

    const sql = getDb();

    if (status !== undefined && notes !== undefined) {
      await sql`UPDATE parthu_leads SET status = ${status}, notes = ${notes} WHERE id = ${id};`;
    } else if (status !== undefined) {
      await sql`UPDATE parthu_leads SET status = ${status} WHERE id = ${id};`;
    } else if (notes !== undefined) {
      await sql`UPDATE parthu_leads SET notes = ${notes} WHERE id = ${id};`;
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('API /leads PATCH error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required' }, { status: 400 });
    }

    const sql = getDb();
    await sql`DELETE FROM parthu_leads WHERE id = ${id};`;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('API /leads DELETE error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
