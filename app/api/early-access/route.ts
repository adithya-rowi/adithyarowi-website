import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } })

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (typeof email !== "string" || !email.includes("@") || email.length > 320) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 })
    }

    const ua = req.headers.get("user-agent") ?? null
    const referer = req.headers.get("referer") ?? null

    const { error } = await supabase.from("early_access_emails").insert([{ email, user_agent: ua, referer }])

    if (error) {
      if (error.message && error.message.toLowerCase().includes("duplicate")) {
        return NextResponse.json({ ok: true })
      }
      return NextResponse.json({ ok: false, error: "DB error" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 })
  }
}
