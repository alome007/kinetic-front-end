import { Package, Timer, Users } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: '10M+',
    label: 'Deliveries Completed'
  },
  {
    icon: Timer,
    value: '30min',
    label: 'Average Delivery Time'
  },
  {
    icon: Users,
    value: '50k+',
    label: 'Active Users'
  }
];

export default function Stats() {
  return (
    <section className="bg-white dark:bg-black py-24 border-y dark:border-white/10 border-black/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <stat.icon className="h-8 w-8 dark:text-white text-black mb-4 transition-colors duration-300" />
              <div className="text-4xl font-medium dark:text-white text-black mb-2 transition-colors duration-300">{stat.value}</div>
              <div className="dark:text-white/60 text-black/60 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}