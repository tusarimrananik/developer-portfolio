import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#ededed] font-[geist-sans]">
      {/* Navigation */}
      <nav className="w-full max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-white">Tusar.Dev</div>
        <div className="flex gap-6 text-sm">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-32">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#333] bg-[#111] text-sm text-[#888]">
            Available for new opportunities
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white">
            Full-Stack Developer <br className="hidden sm:block" />
            & Software Engineer.
          </h1>
          <p className="text-lg text-[#888] max-w-2xl leading-relaxed mb-10">
            Hi, I'm Tusar Imran Anik. I build fast, scalable, and responsive web applications 
            using modern technologies like Next.js, Node.js, and Cloud Infrastructure. I have a 
            passion for clean code, solid architecture, and great design.
          </p>
          <div className="flex gap-4 items-center">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#ccc] transition-colors"
            >
              Get in touch
            </a>
            <a 
              href="https://github.com/tusarimrananik" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#333] hover:border-[#666] hover:bg-[#111] transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-32 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-[#333] pb-4">Selected Work</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-[#333] bg-[#0a0a0a] hover:border-[#666] transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">EditGen</h3>
                <span className="text-xs px-2 py-1 bg-[#222] rounded text-[#888]">Next.js</span>
              </div>
              <p className="text-[#888] text-sm mb-6 leading-relaxed">
                A platform using Next.js App Router, Prisma, and Neon Postgres, featuring a manual payment webhook flow via Telegram.
              </p>
              <a href="#" className="text-sm font-medium hover:text-white flex items-center gap-1">
                View Project <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">&rarr;</span>
              </a>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-[#333] bg-[#0a0a0a] hover:border-[#666] transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">RUET Lab Report</h3>
                <span className="text-xs px-2 py-1 bg-[#222] rounded text-[#888]">React</span>
              </div>
              <p className="text-[#888] text-sm mb-6 leading-relaxed">
                A generator application with template-driven section arrangements, drag-and-drop reordering, and rich component editing.
              </p>
              <a href="https://ruet-lab-report-generator.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-white flex items-center gap-1">
                Live Site <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* About & Contact */}
        <section id="contact" className="border-t border-[#333] pt-16">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Let's build something.</h2>
              <p className="text-[#888] mb-6 max-w-sm">
                I'm currently focused on building fast MVPs for market validation and iterating on feedback. 
                Feel free to reach out if you're looking for a developer or just want to connect.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-w-[200px]">
              <a href="mailto:tusarimrananik@gmail.com" className="text-white hover:underline underline-offset-4">tusarimrananik@gmail.com</a>
              <a href="https://github.com/tusarimrananik" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition-colors">GitHub</a>
              <a href="https://twitter.com/tsr_anik" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition-colors">Twitter (X)</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-sm text-[#666] border-t border-[#222]">
        &copy; {new Date().getFullYear()} Tusar Imran Anik. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
