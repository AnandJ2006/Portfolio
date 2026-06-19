import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/AnandJ2006', text: 'github.com/AnandJ2006' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anand-j-8a6698333/', text: 'linkedin.com/in/anand-j-8a6698333' },
  { icon: FiMail, label: 'Email', href: 'mailto:anandjnja@gmail.com', text: 'anandjnja@gmail.com' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#111111]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Contact Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Socials */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-zinc-400 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            {socials.map(({ icon: Icon, label, href, text }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors group">
                <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">{label}</div>
                  <div className="text-sm text-zinc-300 group-hover:text-white transition-colors">{text}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { name: 'name', type: 'text', placeholder: 'Your Name' },
              { name: 'email', type: 'email', placeholder: 'Your Email' },
            ].map(({ name, type, placeholder }) => (
              <input
                key={name}
                type={type}
                placeholder={placeholder}
                required
                value={form[name]}
                onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/5 focus:border-indigo-500/50 rounded-xl text-zinc-300 placeholder-zinc-600 text-sm outline-none transition-colors"
              />
            ))}
            <textarea
              rows={5}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/5 focus:border-indigo-500/50 rounded-xl text-zinc-300 placeholder-zinc-600 text-sm outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <FiSend size={15} />
              {sent ? 'Message Sent! 🎉' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
