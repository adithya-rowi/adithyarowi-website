"use client"

import type React from "react"

import { useState } from "react"

export default function LabsPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState<false | true | "error">(false)
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })
      if (!res.ok) throw new Error("request failed")
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setSubmitted("error")
    }
  }

  const openPayPal = () => {
    const qty = Math.max(1, Math.min(100, quantity))
    const base = "https://www.paypal.com/ncp/payment/9FW5AXQ7YPJNA"
    const url = `${base}?quantity=${qty}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <div className="mx-auto max-w-3xl px-5 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Labs</h1>
          <p className="mt-3 text-base md:text-lg text-neutral-700">
            I'm building tools that make knowledge accessible to everyone.
          </p>
        </header>

        {/* What I'm building */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Current Focus</h2>
          <p className="text-neutral-800 text-sm mb-2">
            Build a chatbot from YouTube links. Paste videos of someone you admire and talk to an AI that learns from
            their words.
          </p>
        </section>

        {/* Email capture */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Be Part of It</h2>
          <p className="text-neutral-800 text-sm mb-4">Want updates and early access? Leave your email.</p>

          {submitted === false ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-500"
              />
              <button
                type="submit"
                className="border border-neutral-900 rounded-md px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white"
              >
                Notify Me
              </button>
            </form>
          ) : submitted === "error" ? (
            <p className="text-sm text-red-700">Something went wrong. Please try again later.</p>
          ) : (
            <p className="text-sm text-green-700">Thanks! I'll email you soon.</p>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Fund this Project</h2>
          <p className="text-neutral-800 text-sm mb-4">
            Each support unit is <strong>USD 15</strong>. You can increase the quantity to contribute more (up to 100).
          </p>

          <div className="flex items-center gap-3">
            <label htmlFor="qty" className="text-sm text-neutral-700">
              Quantity:
            </label>
            <input
              id="qty"
              type="number"
              min={1}
              max={100}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
            <button
              onClick={openPayPal}
              className="border border-neutral-900 rounded-md px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white"
            >
              Donate via PayPal
            </button>
          </div>

          <p className="text-neutral-600 text-xs mt-2">Redirects to PayPal checkout. Payments in USD.</p>
        </section>

        {/* Footer */}
        <footer className="pt-6 mt-6 border-t border-neutral-200 text-sm text-neutral-600">
          <p>Built with simplicity. Thank you for supporting independent work.</p>
        </footer>
      </div>
    </main>
  )
}
