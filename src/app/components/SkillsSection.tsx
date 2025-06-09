"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalSkillsSection = () => {
  const technicalSkills = [
    { 
      category: "Frontend Development",
      skills: [
        { name: 'JavaScript', proficiency: 95 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'React.js', proficiency: 90 },
        { name: 'Next.js', proficiency: 80 },
        { name: 'HTML5/CSS3', proficiency: 95 },
        { name: 'Tailwind CSS', proficiency: 90 }
      ]
    },
    { 
      category: "Tools & Technologies",
      skills: [
        { name: 'Git/GitHub', proficiency: 85 },
        { name: 'Figma', proficiency: 75 },
        { name: 'Firebase', proficiency: 70 },
        { name: 'Vercel/Netlify', proficiency: 80 },
        { name: 'Node.js', proficiency: 70 },
        { name: 'MongoDB', proficiency: 65 }
      ]
    }
  ];

  const coreCompetencies = [
    {
      title: "Frontend Architecture",
      description: "Designing scalable, maintainable frontend architectures with modern React patterns and state management solutions."
    },
    {
      title: "Performance Optimization", 
      description: "Implementing code splitting, lazy loading, and performance monitoring to deliver fast, efficient web applications."
    },
    {
      title: "Responsive Design",
      description: "Creating pixel-perfect, mobile-first designs that work seamlessly across all devices and screen sizes."
    },
    {
      title: "User Experience",
      description: "Translating design mockups into intuitive, accessible interfaces with smooth interactions and animations."
    }
  ];

  const professionalSkills = [
    "Technical Leadership",
    "Code Review & Mentoring", 
    "Agile/Scrum Methodology",
    "Cross-functional Collaboration",
    "Problem-Solving & Debugging",
    "Project Management"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive skill set focused on modern web development technologies and best practices
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
              
              <div className="space-y-8">
                {technicalSkills.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Professional Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Skills</h3>
              <div className="space-y-3">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center p-3 bg-primary/5 dark:from-gray-700 dark:to-gray-600 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {competency.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {competency.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification/Education Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
            <p className="opacity-90">
              Committed to staying current with emerging technologies and industry best practices through continuous learning and professional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSkillsSection;