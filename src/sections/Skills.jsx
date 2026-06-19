import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5,
  SiTailwindcss, SiGit, SiTypescript, SiNodedotjs,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import SkillCard from '../components/SkillCard';

const skills = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6 bg-[#111111]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium uppercase tracking-widest">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Skills & Technologies</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills.map((skill, i) => <SkillCard key={skill.name} {...skill} />)}
        </motion.div>
      </div>
    </section>
  );
}
