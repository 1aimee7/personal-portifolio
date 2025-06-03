"use client";

import { motion } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma, FaDatabase, FaGit, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiVercel } from 'react-icons/si';

const techSkills = [
  { name: 'JavaScript', proficiency: 95, icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML', proficiency: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', proficiency: 85, icon: <FaCss3 className="text-blue-500" /> },
  { name: 'TypeScript', proficiency: 80, icon: <SiTypescript className="text-blue-600" /> },
  { name: 'React', proficiency: 85, icon: <FaReact className="text-cyan-500" /> },
  { name: 'Next.js', proficiency: 80, icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
  { name: 'Tailwind CSS', proficiency: 90, icon: <SiTailwindcss className="text-teal-500" /> },
  { name: 'Figma', proficiency: 75, icon: <FaFigma className="text-pink-500" /> },
  { name: 'Node.js', proficiency: 70, icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', proficiency: 65, icon: <FaDatabase className="text-green-600" /> },
  { name: 'Git', proficiency: 85, icon: <FaGit className="text-orange-600" /> },
  { name: 'GitHub', proficiency: 80, icon: <FaGithub className="text-gray-700 dark:text-gray-300" /> },
  { name: 'Firebase', proficiency: 70, icon: <SiFirebase className="text-orange-500" /> },
  { name: 'Vercel', proficiency: 75, icon: <SiVercel className="text-gray-800 dark:text-white" /> },
];

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem-Solving',
  'Time Management',
  'Adaptability',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 flex items-center justify-center p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center">
          My Skills
          <span className="block w-16 h-1 bg-primary mx-auto mt-2"></span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tech Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {techSkills.map((skill) => (
                <div key={skill.name} className="text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1 }}
                      className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-center text-sm shadow-sm hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}