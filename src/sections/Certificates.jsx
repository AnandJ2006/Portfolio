import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    name: 'Alogo Tutor Internship',
    issuer: 'Alogo Tutor',
    file: '/cerficate/ALOgo tuter INtern.pdf',
    type: 'pdf',
  },
  {
    name: 'Java (Very Easy) – SkillRack',
    issuer: 'SkillRack',
    file: '/cerficate/java very easy.png',
    type: 'image',
  },
  {
    name: 'NPTEL Certification',
    issuer: 'NPTEL',
    file: '/cerficate/NPTL.pdf',
    type: 'pdf',
  },
  {
    name: 'Oracle Java Certification',
    issuer: 'Oracle',
    file: '/cerficate/oracle java.png',
    type: 'image',
  },
  {
    name: 'SQL – SkillRack',
    issuer: 'SkillRack',
    file: '/cerficate/skillrack sql.png',
    type: 'image',
  },
  {
    name: 'SQL Basic Certificate',
    issuer: 'HackerRank',
    file: '/cerficate/sql_basic certificate.pdf',
    type: 'pdf',
  },
  {
    name: 'SRC Participation Certificate',
    issuer: 'SRC 2025',
    file: '/cerficate/SRC-2025-2903_ANAND_J_certificate (1).pdf',
    type: 'pdf',
  },
  {
    name: 'Udemy Course Certificate',
    issuer: 'Udemy',
    file: '/cerficate/UC-41a97951-6264-4d6a-aa7b-a0643c88ec4e.jpg',
    type: 'image',
  },
  {
    name: 'Udemy Course Certificate',
    issuer: 'Udemy',
    file: '/cerficate/UC-7bb4a5f7-6fe8-4d65-8b6d-917bac88c5fb.jpg',
    type: 'image',
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certificates" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium uppercase tracking-widest">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map(({ name, issuer, file }, i) => (
            <motion.a
              key={file}
              href={file}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group"
            >
              <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                <FiAward size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{issuer}</p>
              </div>
              <FiExternalLink size={15} className="text-zinc-600 group-hover:text-indigo-400 transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
