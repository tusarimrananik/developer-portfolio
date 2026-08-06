import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000] text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-white tracking-tighter text-xl">Tusar.Dev</div>
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Work</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        {/* Hero */}
        <section id="about" className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-8">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">
            Building fast, scalable <br className="hidden md:block" /> web applications.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
            I'm <span className="text-white font-medium">Tusar Imran Anik</span>. I specialize in Next.js, Node.js, and serverless infrastructure to create high-performance MVPs and production-ready systems.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-slate-200 transition-colors">
              View My Work
            </a>
            <a href="https://github.com/tusarimrananik" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition-colors">
              GitHub Profile
            </a>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Core Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Neon DB', 'Prisma', 'Tailwind CSS', 'Vercel'].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-slate-300 cursor-default hover:bg-white/10 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Bento Grid Projects */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white">Selected Projects</h2>
            <p className="text-slate-400">A look at some of my recent full-stack builds.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* EditGen */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.07]">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">EditGen</h3>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                    ↗
                  </a>
                </div>
                <p className="text-slate-400 leading-relaxed min-h-[80px]">
                  A high-performance SaaS platform built with the Next.js App Router. Features a custom manual payment webhook integration via Telegram, allowing admins to approve transactions seamlessly.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {['Next.js', 'Neon Postgres', 'Prisma', 'Auth.js'].map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded bg-black/50 border border-white/5 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* RUET Lab Report */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.07]">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">RUET Lab Report</h3>
                  <a href="https://ruet-lab-report-generator.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                    ↗
                  </a>
                </div>
                <p className="text-slate-400 leading-relaxed min-h-[80px]">
                  A complex templating and layout generator. Allows users to construct lab reports with drag-and-drop reordering, dynamic section generation, and highly specialized content editors.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {['React', 'Drag & Drop', 'Dynamic UI'].map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded bg-black/50 border border-white/5 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-white">Let's work together</h2>
          <p className="max-w-xl mx-auto text-slate-400">
            Whether you need a fast MVP to validate your market or a scalable full-stack application, I'm ready to help you build it.
          </p>
          <div className="pt-4">
            <a href="mailto:tusarimrananik@gmail.com" className="inline-block rounded-full bg-white text-black px-8 py-4 font-bold hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              tusarimrananik@gmail.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Tusar Imran Anik. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/tusarimrananik" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://twitter.com/tsr_anik" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
