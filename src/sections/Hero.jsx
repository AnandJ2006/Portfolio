import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }) };

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">J Anand</span>
        </motion.h1>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-xl md:text-2xl font-medium text-zinc-400 mb-3"
        >
          Frontend Developer
        </motion.p>

        <motion.p
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft fast, beautiful, and accessible web experiences with React and modern tooling.
        </motion.p>

        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1mPn9BfslzvLMnheDArvuezZdyg18EB3N"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white rounded-xl font-semibold text-sm transition-all hover:scale-105"
          >
            <FiDownload size={16} /> Download Resume
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/AnandJ2006"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 hover:border-indigo-500/50 text-zinc-400 hover:text-indigo-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/anand-j-8a6698333/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 hover:border-indigo-500/50 text-zinc-400 hover:text-indigo-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-16 flex justify-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-indigo-500/50 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
