import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiCode, FiAward, FiZap } from 'react-icons/fi';

const profiles = [
  {
    name: 'LeetCode',
    handle: 'J_Anand046',
    url: 'https://leetcode.com/u/J_Anand046/',
    icon: FiCode,
    color: '#FFA116',
    bg: 'rgba(255,161,22,0.08)',
    border: 'rgba(255,161,22,0.2)',
    stats: [
      { label: 'Problems Solved', value: '100+' },
      { label: 'Focus', value: 'DSA' },
      { label: 'Difficulty', value: 'Easy–Med' },
    ],
    description: 'Practicing Data Structures & Algorithms with consistent problem solving across arrays, strings, recursion, and more.',
  },
  {
    name: 'HackerRank',
    handle: 'anandjnja',
    url: 'https://www.hackerrank.com/profile/anandjnja',
    icon: FiAward,
    color: '#00EA64',
    bg: 'rgba(0,234,100,0.08)',
    border: 'rgba(0,234,100,0.2)',
    stats: [
      { label: 'Domain', value: 'Problem Solving' },
      { label: 'Language', value: 'Python / JS' },
      { label: 'Badges', value: 'Earned' },
    ],
    description: 'Solving challenges in problem solving, algorithms, and data structures while earning skill badges on HackerRank.',
  },
  {
    name: 'SkillRack',
    handle: 'J Anand',
    url: 'https://www.skillrack.com/faces/resume.xhtml?id=514869&key=f7661ddffb47404a81a0498d8974fb8e8d611c4c',
    icon: FiZap,
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    stats: [
      { label: 'Problems Solved', value: '800+' },
      { label: 'Programs', value: 'C / Java / Python' },
      { label: 'Rank', value: 'Active' },
    ],
    description: 'Solved 800+ programs on SkillRack covering C, Java, and Python — consistently ranked among active coders in the platform.',
  },
];

export default function CodingProfiles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="coding" className="py-24 px-6 bg-[#111111]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium uppercase tracking-widest">Problem Solving</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Coding Profiles</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map(({ name, handle, url, icon: Icon, color, bg, border, stats, description }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-xl transition-all flex flex-col gap-5"
              style={{ '--accent': color }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl" style={{ background: bg, border: `1px solid ${border}` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">{name}</h3>
                    <p className="text-xs text-zinc-500">@{handle}</p>
                  </div>
                </div>
                <a href={url} target="_blank" rel="noreferrer"
                  className="p-2 rounded-lg border border-white/5 hover:border-white/20 text-zinc-500 hover:text-white transition-colors">
                  <FiExternalLink size={15} />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-auto">
                {stats.map(({ label, value }) => (
                  <div key={label} className="rounded-xl p-3 text-center" style={{ background: bg, border: `1px solid ${border}` }}>
                    <div className="text-sm font-bold" style={{ color }}>{value}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href={url} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                style={{ background: bg, border: `1px solid ${border}`, color }}
              >
                View Profile <FiExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
