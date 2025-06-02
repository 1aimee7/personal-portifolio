import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    feedback: 'Aimee&apos;s work on our app was exceptional. Her attention to detail and creativity made our product stand out!',
  },
  {
    name: 'Jane Smith',
    role: 'Designer, CreativeLabs',
    feedback: 'Working with Aimee was a pleasure. She delivered a seamless UI/UX design that our users love.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative">
          Testimonials
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto text-center">
          What people are saying about my work
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-left"
            >
              <p className="text-gray-600 dark:text-gray-300 italic">
                &quot;{testimonial.feedback}&quot;
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}