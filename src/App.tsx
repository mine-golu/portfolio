import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Send, Code, GraduationCap, Cpu, Layout, Sparkles } from 'lucide-react';

const skills = [
  { name: 'C++', icon: Cpu, desc: 'Data structures, algorithms & OOP' },
  { name: 'HTML', icon: Code, desc: 'Semantic markup & accessibility' },
  { name: 'CSS', icon: Layout, desc: 'Responsive layouts & animations' },
  { name: 'Git', icon: Github, desc: 'Version control workflows' },
  { name: 'GitHub', icon: Github, desc: 'Collaboration & repositories' },
];

const projects = [
  {
    title: 'Personal Portfolio Website',
    desc: 'A fully responsive portfolio built with HTML, CSS and JavaScript featuring smooth scrolling, dark theme and interactive cards.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/gouravnagar',
  },
  {
    title: 'Library Management System',
    desc: 'A C++ console application for managing book inventory, student records and issue/return tracking using file handling.',
    tech: ['C++', 'OOP', 'File I/O'],
    link: 'https://github.com/gouravnagar',
  },
  {
    title: 'Weather Web App',
    desc: 'A clean weather application that fetches live data from a public API and displays forecasts with a dynamic UI.',
    tech: ['JavaScript', 'API', 'CSS'],
    link: 'https://github.com/gouravnagar',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#06122b] text-white">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a1a3a]/95 backdrop-blur-md shadow-lg shadow-blue-900/40 py-2'
            : 'bg-[#0a1a3a]/40 backdrop-blur-sm py-3'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
              GN
            </span>
            <span className="hidden sm:inline">Gourav Nagar</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-[#0a1a3a]/98 backdrop-blur-md border-t border-blue-900/40 z-[99]"
            onClick={() => setMenuOpen(false)}
          >
            <ul className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-4 rounded-xl text-blue-100/90 hover:text-white hover:bg-blue-500/10 transition-colors text-lg font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#06122b] via-[#0a1f4a] to-[#06122b]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm mb-6">
            <Sparkles size={14} /> Welcome to my portfolio
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 tracking-tight leading-[1.05]">
            Gourav Nagar
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/80 mb-9 font-light tracking-wide">
            B.Tech CSE Student <span className="text-blue-400">|</span> Aspiring Software Developer
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-blue-400/40 hover:bg-blue-500/10 transition-all font-semibold"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10">
            <a href="https://github.com/gouravnagar" target="_blank" rel="noreferrer" className="text-blue-200/70 hover:text-white hover:-translate-y-0.5 transition-all">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-200/70 hover:text-white hover:-translate-y-0.5 transition-all">
              <Linkedin size={22} />
            </a>
            <a href="mailto:gourav.nagar@example.com" className="text-blue-200/70 hover:text-white hover:-translate-y-0.5 transition-all">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">About Me</h2>
          <p className="text-center text-blue-300 mb-14 font-light">A little background about who I am</p>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <div className="md:col-span-2 bg-[#0a1f4a]/60 rounded-2xl p-8 border border-blue-900/40 hover:border-blue-500/40 transition-all hover:-translate-y-1 duration-300">
              <p className="text-blue-100/90 leading-relaxed text-lg">
                I'm <span className="text-white font-semibold">Gourav Nagar</span>, a passionate
                B.Tech Computer Science and Engineering student at{' '}
                <span className="text-blue-300 font-semibold">JECRC University</span>. I'm deeply
                curious about building reliable software and love turning ideas into working code.
              </p>
              <p className="text-blue-100/80 leading-relaxed mt-4">
                I spend my time sharpening my problem-solving skills with C++, learning web
                development, and collaborating on projects using Git and GitHub. My goal is to
                become a well-rounded software developer who writes clean, efficient and
                maintainable code.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Problem Solving', 'Clean Code', 'Teamwork', 'Continuous Learning'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/10 rounded-2xl p-8 border border-blue-900/40 flex flex-col justify-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-600/30 flex items-center justify-center">
                <GraduationCap size={28} className="text-blue-200" />
              </div>
              <div>
                <p className="text-sm text-blue-300">Education</p>
                <p className="font-semibold text-lg">B.Tech CSE</p>
                <p className="text-blue-100/70 text-sm">JECRC University</p>
              </div>
              <div className="pt-3 border-t border-blue-900/40">
                <p className="text-sm text-blue-300">Focus</p>
                <p className="font-semibold">Software Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-[#081634]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">Skills</h2>
          <p className="text-center text-blue-300 mb-14 font-light">Technologies I work with</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-[#0a1f4a]/60 rounded-2xl p-6 border border-blue-900/40 hover:border-blue-500/60 hover:bg-blue-600/10 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/40 transition-colors">
                  <skill.icon size={24} className="text-blue-200" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-blue-200/60 text-sm leading-snug">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">Projects</h2>
          <p className="text-center text-blue-300 mb-14 font-light">Some things I've built</p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-[#0a1f4a]/60 rounded-2xl border border-blue-900/40 hover:border-blue-500/60 card-hover flex flex-col overflow-hidden"
              >
                <div className="h-36 bg-gradient-to-br from-blue-600/30 to-blue-900/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
                  <Code size={40} className="text-blue-200 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-medium text-sm transition-colors"
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-[#081634]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">Get in Touch</h2>
          <p className="text-center text-blue-300 mb-14 font-light">Have a question or opportunity? Let's talk.</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-[#0a1f4a]/60 rounded-xl p-5 border border-blue-900/40 text-center">
              <Mail size={20} className="mx-auto text-blue-300 mb-2" />
              <p className="text-xs text-blue-300">Email</p>
              <p className="text-sm font-medium break-all">gourav.nagar@example.com</p>
            </div>
            <div className="bg-[#0a1f4a]/60 rounded-xl p-5 border border-blue-900/40 text-center">
              <MapPin size={20} className="mx-auto text-blue-300 mb-2" />
              <p className="text-xs text-blue-300">Location</p>
              <p className="text-sm font-medium">Jaipur, Rajasthan</p>
            </div>
            <div className="bg-[#0a1f4a]/60 rounded-xl p-5 border border-blue-900/40 text-center">
              <GraduationCap size={20} className="mx-auto text-blue-300 mb-2" />
              <p className="text-xs text-blue-300">University</p>
              <p className="text-sm font-medium">JECRC University</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! Your message has been recorded.');
              (e.target as HTMLFormElement).reset();
            }}
            className="bg-[#0a1f4a]/60 rounded-2xl p-6 sm:p-8 border border-blue-900/40 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-blue-200 mb-2">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl bg-[#06122b] border border-blue-900/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none px-4 py-3 text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-2">Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-[#06122b] border border-blue-900/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none px-4 py-3 text-sm transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-blue-200 mb-2">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl bg-[#06122b] border border-blue-900/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none px-4 py-3 text-sm transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-900/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Gourav Nagar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/gouravnagar" target="_blank" rel="noreferrer" className="text-blue-200/70 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-200/70 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gourav.nagar@example.com" className="text-blue-200/70 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
