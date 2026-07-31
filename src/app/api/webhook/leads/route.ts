import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const webhookUrl = process.env.GAS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ ok: false, error: 'GAS_WEBHOOK_URL not set' });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    return NextResponse.json({ ok: true, gasStatus: res.status, gasResponse: text });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) });
  }
}
