"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
      >
        <article className="md:w-3/5 text-center md:text-left">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mt-2">
            AIMEE ISHIMWE
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2">
            Web Developer & UI/UX Designer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
            I craft engaging digital experiences through innovative design and robust development. Specializing in
            TypeScript, React, and Next.js, I deliver solutions that drive results.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="#about"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e69520] transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              About Me
            </Link>
            <Link
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </article>
        <figure className="md:w-2/5 flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full transform -translate-x-4 translate-y-4 -z-10"></div>
            <Image
              src="/images/profile.jpg"
              alt="Aimee Ishimwe - Professional Portrait"
              width={320}
              height={320}
              className="w-70 h-70 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl z-10"
            />
          </div>
          <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Aimee Ishimwe, Web Developer & UI/UX Designer
          </figcaption>
        </figure>
      </motion.div>
    </section>
  );
}