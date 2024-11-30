import { Shield, Users, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../utils/animations';

const highlights = [
  { icon: Briefcase, text: 'Built by logistics experts with 20+ years of experience' },
  { icon: Shield, text: 'Backed by leading technology investors' },
  { icon: Users, text: 'Trusted by over 500 businesses in beta' },
  { icon: Award, text: 'Award-winning customer support team' }
];

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-black py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-black/5 dark:bg-white/5 rounded-lg mb-8 border border-black/10 dark:border-white/10 transition-colors duration-300"
            >
              <span className="text-black/80 dark:text-white/80 text-sm transition-colors duration-300">About Us</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-medium text-black dark:text-white mb-6 tracking-tight transition-colors duration-300"
            >
              Revolutionizing Local Delivery
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-12 transition-colors duration-300"
            >
              Kinetic is building the future of local delivery infrastructure. Our platform 
              combines cutting-edge technology with seamless user experience to transform 
              how businesses handle their logistics needs.
            </motion.p>
            <motion.div
              variants={stagger}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  variants={fadeInUp}
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5 text-black/40 dark:text-white/40 transition-colors duration-300" strokeWidth={1.5} />
                  <span className="text-black/80 dark:text-white/80 text-sm transition-colors duration-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent dark:from-white/10 rounded-2xl" />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/astrocoder-b4e1a.appspot.com/o/kinetic%2Fassets%2Fcomingsoon%2Fkinetic-pics.png?alt=media&token=e09efe5e-c8ac-4873-a065-30feeefbc386"
              alt="Night time highway with light trails"
              className="rounded-2xl w-full object-cover h-[500px] shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset dark:ring-white/10 ring-black/10 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}