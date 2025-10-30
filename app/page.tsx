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

        {/* Links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Find me</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://weless.substack.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                Weless (Substack)
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adithya-n-rowi-a5a6a76/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/adithyarowi"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/adithyarowi/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@enjoytheweless"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://hawa.bearblog.dev/blog/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                Pseudonym: Hawa (BearBlog)
              </a>
            </li>
          </ul>
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
                - Site up, backend paused
              </p>
              <p className="text-neutral-800 text-sm mt-1">
                Chatbot using Mahfud MD's (Indonesian Politician) YouTube content with{" "}
                <a
                  href="https://www.ragie.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  Ragie.AI
                </a>{" "}
                (RAG) and ChatGPT-4o (LLM) for conversation.
              </p>
            </li>

            <li>
              <p className="font-medium">Cyber Maturity Copilot (winner of Ensign AI Showdown 2025)</p>
              <p className="text-neutral-800 text-sm mt-1">
                Automates assessments using{" "}
                <a
                  href="https://landing.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  Landing.AI
                </a>{" "}
                (OCR),{" "}
                <a
                  href="https://www.ragie.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  Ragie.AI
                </a>{" "}
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
            New project: build a chatbot from YouTube links, so you can talk with whoever you admire.{" "}
            <Link href="/labs" className="underline underline-offset-4 hover:no-underline">
              Learn more
            </Link>
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-6 mt-6 border-t border-neutral-200 text-sm text-neutral-600">
          <p>Built with simplicity. No trackers, no carousels.</p>
        </footer>
      </div>
    </main>
  )
}
