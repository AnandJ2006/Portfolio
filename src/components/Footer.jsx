import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} J Anand. All rights reserved.</p>
        <div className="flex gap-5">
          {[
            { href: 'https://github.com/AnandJ2006', icon: FiGithub },
            { href: 'https://www.linkedin.com/in/anand-j-8a6698333/', icon: FiLinkedin },
            { href: 'mailto:anandjnja@gmail.com', icon: FiMail },
          ].map(({ href, icon: Icon }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer"
              className="text-zinc-500 hover:text-indigo-400 transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
