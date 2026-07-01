import { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Coding', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      sections.forEach(sec => {
        if (sec) {
          const { top, bottom } = sec.getBoundingClientRect();
          if (top <= 80 && bottom >= 80) setActive(sec.id.charAt(0).toUpperCase() + sec.id.slice(1));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const sectionId = id === 'Coding' ? 'coding' : id.toLowerCase();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f]/90 backdrop-blur border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-indigo-400 tracking-tight">Anand</span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={`text-sm font-medium transition-colors ${active === l ? 'text-indigo-400' : 'text-zinc-400 hover:text-white'}`}
              >{l}</button>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className={`text-sm text-left font-medium ${active === l ? 'text-indigo-400' : 'text-zinc-400'}`}
            >{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
