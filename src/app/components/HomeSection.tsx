"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-6 pt-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Hi, I'{'m'} Aimee Ishimwe
          </h1>
          <p className="text-2xl text-primary mt-2">Web Developer & UI/UX Enthusiast</p>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto md:mx-0">
            I craft user-friendly digital experiences with a passion for clean code and creative design.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e69520] transition duration-300 shadow-md"
          >
            Get In Touch
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <Image
            src="/images/profile.jpg"
            alt="Aimee Ishimwe - Professional Portrait"
            width={320}
            height={320}
            className="rounded-full  w-90 h-90 object-cover border-4 border-white dark:border-gray-800 shadow-xl z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}