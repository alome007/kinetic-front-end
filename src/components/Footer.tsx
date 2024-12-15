import { PackageSearch, Github, Twitter, Mail, MapPin, Linkedin, InstagramIcon } from 'lucide-react';

const contactInfo = [
  { icon: Mail, text: 'daniel@astrocoder.me' },
  { icon: MapPin, text: '22 Cameron Rd, Ikoyi, NG' }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b dark:from-white/5 from-black/5 dark:to-white/[0.02] to-black/[0.02] backdrop-blur-sm rounded-t-[2.5rem] mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 mb-6">
              <PackageSearch className="h-6 w-6 dark:text-white text-black transition-colors duration-300" strokeWidth={1.5} />
              <span className="dark:text-white text-black text-xl font-medium tracking-tight transition-colors duration-300">Kinetic</span>
            </div>
            <p className="dark:text-white/60 text-black/60 text-sm leading-relaxed max-w-md transition-colors duration-300">
              The future of local delivery is here. Join us in revolutionizing how businesses handle their logistics.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 dark:text-white/60 text-black/60 transition-colors duration-300">
                  <item.icon className="h-4 w-4" strokeWidth={1.5} />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:pl-12">
            <h3 className="dark:text-white text-black font-medium mb-6 transition-colors duration-300">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black text-sm transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black text-sm transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#"className="dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/[0.06]">
          <div className="dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black text-sm transition-colors duration-300">
            © 2024 Kinetic. All rights reserved.
          </div>
          <div className="flex space-x-8">
            {[Linkedin, InstagramIcon, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black text-sm transition-colors duration-300"
              >
                <Icon className="h-5 w-5 dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black text-sm transition-colors duration-300" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}