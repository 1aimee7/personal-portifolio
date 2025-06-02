
"use client"
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'CEO, Tech Corp',
    text: 'Aimee delivered an outstanding website that exceeded our expectations.',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Product Manager',
    text: 'Her UI/UX skills transformed our application’s user experience.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 flex items-center justify-center p-6 bg-white dark:bg-gray-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black dark:text-white">Testimonials</h2>
        <p className="text-lg text-primary mt-2">What Clients Say</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6"
            >
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
              <p className="mt-4 font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}