import { motion } from 'framer-motion';

export default function SkillCard({ icon: Icon, name, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex flex-col items-center gap-3 p-5 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 cursor-default transition-colors"
    >
      <Icon size={36} style={{ color }} />
      <span className="text-sm font-medium text-zinc-300">{name}</span>
    </motion.div>
  );
}
