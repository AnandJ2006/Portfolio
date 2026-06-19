import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '4+', label: 'Projects Built & Deployed' },
  { value: '100+', label: 'LeetCode Problems' },
  { value: '800+', label: 'SkillRack Problems' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl" />
              <img
                src="/photo_2026-06-19_17-15-12.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl border border-white/10"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm text-indigo-400 font-medium uppercase tracking-widest">About Me</span>
            <p className="text-zinc-400 leading-relaxed mb-4 mt-4">
              I'm a passionate Computer Science student focused on becoming a Full Stack Developer.
              I specialize in building responsive and scalable web applications using React, Node.js, Express, and MongoDB.
              I've developed real-world projects including an online market platform, exam result portal, and utility tools.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Alongside development, I actively practice problem-solving, solving 100+ problems on LeetCode and over 800 on SkillRack.
              I'm driven by curiosity and a desire to continuously learn, improve, and build meaningful digital experiences.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-[#1a1a1a] rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-2xl font-bold text-indigo-400">{value}</div>
                  <div className="text-xs text-zinc-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
