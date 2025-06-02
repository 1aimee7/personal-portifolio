"use client"
import { motion } from 'framer-motion';

const skills = [
  'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Figma',
  'JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB'
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black dark:text-white">Skills</h2>
        <p className="text-lg text-primary mt-2">Technical Expertise</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}