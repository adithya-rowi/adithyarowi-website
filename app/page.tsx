"use client"

import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <div className="mx-auto max-w-3xl px-5 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Adithya Nugraputra Rowi</h1>
          <p className="mt-3 text-base md:text-lg text-neutral-700">Multi-dimensional, like you.</p>
        </header>

        {/* Find me */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Find me</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://weless.substack.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Weless (Substack)</a></li>
            <li><a href="https://www.linkedin.com/in/adithya-n-rowi-a5a6a76/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">LinkedIn</a></li>
            <li><a href="https://x.com/adithyarowi" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Twitter / X</a></li>
            <li><a href="https://www.instagram.com/adithyarowi/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Instagram</a></li>
            <li><a href="https://www.youtube.com/@enjoytheweless" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">YouTube</a></li>
            <li><a href="https://hawa.bearblog.dev/blog/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Pseudonym: Hawa (BearBlog)</a></li>
          </ul>
        </section>

        {/* What I love (gwern-style: one page, clear sections, minimal clicks) */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-1">What I love</h2>
          <p className="text-neutral-700 text-sm mb-4">
            A living list I update over time. One page, easy to skim.
          </p>

          {/* Music set */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">A set I keep looping</h3>
            <p className="text-neutral-700 text-sm mb-3">
              This is the party vibe I’d go to. Turn it up.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-md border border-neutral-200">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/o_N5JQYHJXk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-sm mt-2">
              Direct link:{" "}
              <a
                className="underline underline-offset-4 hover:no-underline"
                href="https://youtu.be/o_N5JQYHJXk?si=4AdVglPRbJm3lLwc"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </p>
          </div>

          {/* Books (simple list you can grow) */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Books I’m into (reading / re-reading)</h3>
            <ul className="space-y-3">
              {/* Replace these with your real picks anytime */}
              <li className="border border-neutral-200 rounded-md p-3">
                <p className="font-medium">High Output Management — Andrew Grove</p>
                <p className="text-neutral-700 text-sm">Timeless system for building teams and output. I use this to ground my management.</p>
              </li>
              <li className="border border-neutral-200 rounded-md p-3">
                <p className="font-medium">The 80/20 Principle — Richard Koch</p>
                <p className="text-neutral-700 text-sm">My filter for focus. Small inputs, outsized gains.</p>
              </li>
              <li className="border border-neutral-200 rounded-md p-3">
                <p className="font-medium">Power — Jeffrey Pfeffer</p>
                <p className="text-neutral-700 text-sm">Understanding how the world really works in organizations.</p>
              </li>
            </ul>
            <p className="text-xs text-neutral-600 mt-2">
              I’ll keep this list fresh. Audiobooks count.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <ul className="space-y-6">
            <li>
              <p className="font-medium">
                <a
                  href="https://www.mahfudmd-ai.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  MahfudMD-AI
                </a>{" "}
                — Site up, backend paused
              </p>
              <p className="text-neutral-800 text-sm mt-1">
                Chatbot using Mahfud MD’s YouTube content with{" "}
                <a href="https://www.ragie.ai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Ragie.AI</a>{" "}
                (RAG) and ChatGPT-4o (LLM) for conversation.
              </p>
            </li>

            <li>
              <p className="font-medium">Cyber Maturity Copilot (winner of Ensign AI Showdown 2025)</p>
              <p className="text-neutral-800 text-sm mt-1">
                Automates assessments using{" "}
                <a href="https://landing.ai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Landing.AI</a>{" "}
                (OCR),{" "}
                <a href="https://www.ragie.ai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Ragie.AI</a>{" "}
                (RAG), and DeepSeek (LLM) for faster, accurate analysis.
              </p>
            </li>
          </ul>
        </section>

        {/* Labs */}
        <section className="mb-12">
          <Link href="/labs" className="group">
            <h2 className="text-xl font-semibold mb-3 underline underline-offset-4 group-hover:no-underline cursor-pointer">
              Labs
            </h2>
          </Link>
          <p className="text-neutral-800 text-sm">
            New project: build a chatbot from YouTube links, so you can talk to whoever you admire.{" "}
            <Link href="/labs" className="underline underline-offset-4 hover:no-underline">Learn more</Link>
          </p>
        </section>

        {/* Footer (clean — removed old line) */}
        <footer className="pt-6 mt-6 border-t border-neutral-200 text-sm text-neutral-600">
          <p>Thanks for visiting.</p>
        </footer>
      </div>
    </main>
  )
}

