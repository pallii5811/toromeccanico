import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type QuotePayload = {
  name: string
  phone: string
  city: string
  date: string
  eventType: string
  notes?: string
  packageName?: string
}

export async function POST(req: Request) {
  let payload: QuotePayload

  try {
    payload = (await req.json()) as QuotePayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const name = (payload.name || '').trim()
  const phone = (payload.phone || '').trim()
  const city = (payload.city || '').trim()
  const date = (payload.date || '').trim()
  const eventType = (payload.eventType || '').trim()
  const notes = (payload.notes || '').trim()
  const packageName = (payload.packageName || '').trim()

  if (!name || !phone || !city || !date || !eventType) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  const to = 'info@futuroeventi.it'

  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM || 'info@futuroeventi.it'

  if (!host || !port || !user || !pass) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Email is not configured (missing SMTP env vars).',
      },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  })

  const subjectParts = ['Richiesta preventivo']
  if (city) subjectParts.push(city)
  if (date) subjectParts.push(date)
  const subject = subjectParts.join(' - ')

  const text = [
    'Nuova richiesta preventivo (FuturoEventi)',
    '',
    `Nome: ${name}`,
    `Telefono: ${phone}`,
    `Città: ${city}`,
    `Data: ${date}`,
    `Tipo evento: ${eventType}`,
    packageName ? `Pacchetto: ${packageName}` : undefined,
    notes ? `Note: ${notes}` : undefined,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await transporter.sendMail({
      to,
      from,
      subject,
      text,
      replyTo: from,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
