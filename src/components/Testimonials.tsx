import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Kinetic has completely changed how we handle local deliveries. The real-time tracking is a must-have for busy cities like Lagos.",
    author: "Sarah Adekunle",
    role: "Operations Manager",
    company: "Naija Eats Co."
  },
  {
    quote: "The efficiency gains we've experienced with Kinetic's smart routing are outstanding. Our delivery times are now faster than ever.",
    author: "Michael Chukwuma",
    role: "Logistics Director",
    company: "FastMove Logistics"
  },
  {
    quote: "Finally, a delivery platform designed for Nigeria. With Kinetic’s intuitive app, our deliveries are faster, efficient and more reliable.",
    author: "Ngozi Okeke",
    role: "CEO",
    company: "QuickFleet"
  }
];


export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-black py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium dark:text-white text-black mb-4 transition-colors duration-300">
            Trusted by Industry Leaders
          </h2>
          <p className="dark:text-white/60 text-black/60 max-w-2xl mx-auto transition-colors duration-300">
            See what our beta users have to say about SwiftRoute's impact on their delivery operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="dark:bg-white/5 bg-black/5 rounded-lg p-8 backdrop-blur-sm border dark:border-white/10 border-black/10 transition-colors duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 dark:text-white text-black dark:fill-white fill-black transition-colors duration-300" />
                ))}
              </div>
              <blockquote className="dark:text-white/80 text-black/80 mb-6 transition-colors duration-300">"{testimonial.quote}"</blockquote>
              <div>
                <div className="dark:text-white text-black font-medium transition-colors duration-300">{testimonial.author}</div>
                <div className="dark:text-white/60 text-black/60 text-sm transition-colors duration-300">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}