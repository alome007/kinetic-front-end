import { Clock, MapPin, CreditCard, Smartphone, Shield, Zap, Truck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../utils/animations';

const features = [
  {
    icon: Clock,
    title: 'Real-Time Tracking',
    description: 'Track your deliveries in real-time with precise GPS location and live ETAs.'
  },
  {
    icon: MapPin,
    title: 'Smart Routing',
    description: 'AI-powered route optimization for faster deliveries and reduced costs.'
  },
  {
    icon: CreditCard,
    title: 'Instant Pricing',
    description: 'Get transparent, upfront pricing with dynamic surge protection.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Manage everything from our intuitive mobile app designed for busy professionals.'
  },
  {
    icon: Shield,
    title: 'Secure & Insured',
    description: 'Every delivery is fully insured and tracked with end-to-end security.'
  },
  {
    icon: Zap,
    title: 'Instant Dispatch',
    description: 'Get your deliveries picked up within minutes of booking.'
  },
  {
    icon: Truck,
    title: 'Fleet Management',
    description: 'Manage your own fleet or tap into our network of verified drivers.'
  },
  {
    icon: HeartHandshake,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for peace of mind.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white dark:bg-black py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white mb-4 transition-colors duration-300">
            Delivery, Reimagined
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto transition-colors duration-300">
            Experience the next generation of local delivery services with features designed to save time and reduce complexity.
          </p>
        </motion.div>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="group border border-black/10 dark:border-white/10 rounded-lg p-8 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
            >
              <feature.icon className="h-8 w-8 text-black dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-black/60 dark:text-white/60 text-sm transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}