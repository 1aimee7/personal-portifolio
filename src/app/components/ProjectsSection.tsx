"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return (
      <section id="projects" className="py-20 flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">My Projects</h2>
          <p className="text-red-500 mt-4">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 dark:text-white relative"
        >
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-primary mt-2"
        >
          Showcasing My Best Work
        </motion.p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-primary text-white px-2 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e69520] transition duration-300"
                  >
                    Visit Project
                  </a>
                </div>
              </motion.div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}