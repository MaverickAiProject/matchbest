// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const body = await request.json()

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'maverick.aiproject@gmail.com',
            subject: 'New Contact Form Submission',
            html: `
        <h3>New Message from ${body.name}</h3>
        <p>Email: ${body.email}</p>
        <p>Message: ${body.message}</p>
      `
        })

        if (error) {
            return NextResponse.json({ error }, { status: 500 })
        }

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}