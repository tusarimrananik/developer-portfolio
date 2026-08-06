import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] dark:bg-[#111] dark:text-[#eee] font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <main className="max-w-2xl mx-auto px-6 py-24 sm:py-32">
        
        {/* Header / Intro */}
        <header className="mb-20">
          <h1 className="text-3xl font-bold mb-6 tracking-tight">Tusar Imran Anik</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Software Engineer building fast, scalable MVPs and production systems. Focused on Next.js, Node.js, and serverless architecture.
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="https://github.com/tusarimrananik" target="_blank" rel="noopener noreferrer" className="border-b border-gray-300 hover:border-black dark:border-gray-700 dark:hover:border-white pb-0.5 transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/tsr_anik" target="_blank" rel="noopener noreferrer" className="border-b border-gray-300 hover:border-black dark:border-gray-700 dark:hover:border-white pb-0.5 transition-colors">
              Twitter
            </a>
            <a href="mailto:tusarimrananik@gmail.com" className="border-b border-gray-300 hover:border-black dark:border-gray-700 dark:hover:border-white pb-0.5 transition-colors">
              Email
            </a>
          </div>
        </header>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-8 tracking-tight">Selected Work</h2>
          <div className="space-y-12">
            <article className="group">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-medium text-black dark:text-white">EditGen</h3>
                <span className="text-sm text-gray-400 dark:text-gray-500">2026</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                SaaS platform built with Next.js App Router, Prisma, and Neon Postgres. Features a customized manual payment webhook flow via Telegram for seamless admin approvals.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 dark:text-gray-400">
                <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">Neon DB</span>
                <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">Prisma</span>
              </div>
            </article>

            <article className="group">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-medium text-black dark:text-white flex items-center gap-2">
                  <a href="https://ruet-lab-report-generator.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600">
                    RUET Lab Report ↗
                  </a>
                </h3>
                <span className="text-sm text-gray-400 dark:text-gray-500">2026</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                A highly interactive templating and layout generator. Allows users to construct academic lab reports with drag-and-drop reordering, dynamic sections, and robust component editors.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 dark:text-gray-400">
                <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">React</span>
                <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">Tailwind</span>
              </div>
            </article>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-6 tracking-tight">Philosophy</h2>
          <div className="prose prose-gray dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
            <p>
              I believe in shipping fast to validate ideas, then iterating ruthlessly based on real user feedback. My ultimate goal is financial freedom through building valuable, scalable products.
            </p>
            <p>
              When I code, I prefer clean architecture and straightforward solutions over complex abstractions. I try to explain technical concepts in layman's terms and maintain a relentless focus on the end-user experience.
            </p>
          </div>
        </section>
        
      </main>
    </div>
  );
}
