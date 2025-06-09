"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center p-6 pt-24 bg-gray-900 text-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
         <p className="text-lg text-yellow-500 uppercase font-semibold mb-2">Hello, I&apos;m</p>

          <h1 className="text-6xl font-extrabold text-white">AIMEE ISHIMWE</h1>
          <p className="text-2xl text-yellow-500 font-semibold mt-2">Web Developer & UI/UX Designer</p>
          <p className="text-gray-300 mt-6 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
            I specialize in creating impactful digital experiences through user-centered design and modern
            development practices. With expertise in both front-end development and UI/UX design, I deliver
            solutions that engage users and drive business results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#about"
              className="bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <Image
            src="/images/profile.jpg"
            alt="Professional Headshot of Aimee Ishimwe, Web Developer & UI/UX Designer"
            width={320}
            height={320}
            className="rounded-full w-90 h-90 object-cover border-2 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
