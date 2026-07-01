import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A responsive frontend for a Hospital Management System with modules for patient registration, doctor listings, appointment booking, and department management.',
    image: '/hospital =managementsystem.png',
    demo: 'https://frontend-hospital-management-system-nu.vercel.app/',
    github: 'https://github.com/AnandJ2006/Frontend-Hospital-Management-System-',
    tags: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'Fruit & Vegetable Market',
    description: 'An online market platform for browsing and shopping fresh fruits and vegetables with product listings, cart functionality, and a clean responsive storefront.',
    image: '/Furitandvegetablemarket.png',
    demo: 'https://fruits-and-vegetable-market-shop.vercel.app/home',
    github: 'https://github.com/AnandJ2006/Fruits-and-Vegetable-Market-shop-FRONTEND',
    tags: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description: 'Drag-and-drop task board with team collaboration features, deadlines, and priority labels.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    demo: 'https://demo.example.com',
    github: 'https://github.com',
    tags: ['React', 'Redux', 'Firebase'],
  },
  {
    title: 'Portfolio Website',
    description: 'Modern developer portfolio with dark theme, smooth animations, and responsive design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    demo: 'https://demo.example.com',
    github: 'https://github.com',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium uppercase tracking-widest">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Featured Projects</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </motion.div>
      </div>
    </section>
  );
}
