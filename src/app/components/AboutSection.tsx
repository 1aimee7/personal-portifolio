"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const milestones = [
  "Started my career as a junior developer in 2022, building small-scale web applications.",
  "Led a team to develop a task management app in 2024, improving productivity for 500+ users.",
  "Currently exploring AI-driven solutions to enhance user experiences in web development.",
];

export default function AboutSection() {
  const [currentMilestone, setCurrentMilestone] = useState(milestones[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestone(milestones[Math.floor(Math.random() * milestones.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">My Journey</h2>
        <p className="text-lg text-primary mt-2">From Novice to Innovator</p>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex flex-col items-center">
            <Image
              src="/images/developer.png"
              alt="Developer at Desk"
              width={400}
              height={400}
              className="w-3/4 sm:w-full max-w-md rounded-lg shadow-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-gray-600 dark:text-gray-300 italic"
            >
              A snapshot of my workspace, where ideas come to life.
            </motion.div>
          </div>
          <div className="md:w-1/2 text-left">
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
              I’m Aimee Ishimwe, a web developer and UI/UX enthusiast based in Kigali, Rwanda. My journey began with a curiosity for technology, leading me to create user-focused digital experiences that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg leading-relaxed">
              Over the years, I’ve worked on diverse projects, from small business websites to collaborative apps, always aiming to blend functionality with creativity. I’m passionate about learning new technologies and pushing the boundaries of what’s possible on the web.
            </p>
            <motion.a
              href="/resume.pdf"
              download="Aimee_Ishimwe_Mukashyaka_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e69520] transition duration-300 shadow-md"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <figure className="my-8">
          <motion.blockquote
            key={currentMilestone}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-700 dark:text-gray-300 italic bg-gray-200 dark:bg-gray-800 px-6 py-4 rounded-lg max-w-2xl mx-auto text-center relative"
          >
            <span className="absolute left-4 top-2 text-2xl text-gray-500 dark:text-gray-400">“</span>
            {currentMilestone}
            <span className="absolute right-4 bottom-2 text-2xl text-gray-500 dark:text-gray-400">”</span>
          </motion.blockquote>
        </figure>
      </motion.div>
    </section>
  );
}