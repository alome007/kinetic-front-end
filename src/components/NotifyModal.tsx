import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../utils/animations';

interface NotifyModalProps {
  onClose: () => void;
  isSuccessful: boolean;
}

export default function NotifyModal({ onClose, isSuccessful = false }: NotifyModalProps) {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(isSuccessful);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 dark:bg-black/60 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden">
      <motion.div
        initial="initial"
        animate="animate"
        variants={scaleIn}
        className="dark:bg-black/80 bg-white/80 border dark:border-white/10 border-black/10 rounded-2xl p-8 max-w-md w-full mx-4 transition-colors duration-300"
      >
        <div className="flex justify-between items-center mb-6">
         {!isSuccess &&  <h2 className="text-xl font-medium dark:text-white text-black transition-colors duration-300">Get Early Access</h2>}
          <button onClick={onClose} className="dark:text-white/60 text-black/60 dark:hover:text-white hover:text-black transition-colors duration-300">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="text-green-400 mb-2">✓</div>
            <h3 className="dark:text-white text-black font-medium mb-2 transition-colors duration-300">You're on the list!</h3>
            <p className="dark:text-white/60 text-black/60 text-sm transition-colors duration-300">We'll notify you when we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-lg px-4 py-3 dark:text-white text-black dark:placeholder:text-white/40 placeholder:text-black/40 mb-4 focus:outline-none dark:focus:border-white/20 focus:border-black/20 transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full dark:bg-white bg-black dark:text-black text-white rounded-lg px-4 py-3 font-medium dark:hover:bg-white/90 hover:bg-black/90 transition-colors duration-300"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}