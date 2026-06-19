import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ title, description, image, demo, github, tags }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-colors flex flex-col"
    >
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md border border-indigo-500/20">{tag}</span>
          ))}
        </div>
        <div className="flex gap-3 mt-1">
          <a href={demo} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors font-medium">
            <FiExternalLink size={14} /> Live Demo
          </a>
          <a href={github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm px-4 py-2 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white rounded-lg transition-colors font-medium">
            <FiGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
