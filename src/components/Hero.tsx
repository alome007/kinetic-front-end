import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import NotifyModal from "./NotifyModal";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../utils/animations";
import axios from "axios";

const benefits = [
  "No setup fees or commitments",
  "Pay only for successful deliveries",
  "24/7 Support",
];

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [email, setEmail] = useState("");

  const addToWaitlist = async (_email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(_email)) {
      return;
    }

    try {
      setIsloading(true);
      const url = `${import.meta.env.VITE_API_BASE_URL}/waitlist`;
      await axios.post(url, { email: _email });
      setIsloading(false);
      setShowModal(true);
    } catch (e) {
      setIsloading(false);
      alert(
        "An error occurred while adding to the waitlist. Please try again."
      );
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(inputEmail));
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black flex items-center transition-colors duration-300">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80"
          alt="Logistics Background"
          className="w-full h-full object-cover dark:opacity-10 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b dark:from-black dark:via-black/90 dark:to-black from-white via-white/90 to-white transition-colors duration-300" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="flex flex-col items-center text-center lg:text-left lg:items-start"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 dark:bg-white/5 bg-black/5 rounded-lg mb-8 border dark:border-white/10 border-black/10 transition-colors duration-300"
          >
            <span className="dark:text-white/80 text-black/80 text-sm transition-colors duration-300">
              Coming Soon
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-medium dark:text-white text-black mb-6 tracking-tight transition-colors duration-300"
          >
            The Future of
            <br />
            Local Delivery
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="dark:text-white/60 text-black/60 text-xl max-w-2xl mb-12 transition-colors duration-300"
          >
            Revolutionizing local logistics with real-time tracking, instant
            pricing, and seamless delivery experiences. Join the waitlist to be
            the first to know.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center dark:text-white/80 text-black/80 transition-colors duration-300"
              >
                <CheckCircle2 className="h-5 w-5 mr-2 dark:text-white text-black transition-colors duration-300" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <input
              type="email"
              required
              onChange={handleEmailChange}
              value={email}
              placeholder="Enter your email"
              className={`flex-1 px-6 py-4 rounded-lg dark:bg-white/5 bg-black/5 dark:text-white text-black border transition-colors duration-300 ${
                isEmailValid
                  ? "border-black/10 dark:border-white/10"
                  : "border-red-500"
              } focus:outline-none focus:border-black/20 dark:focus:border-white/20`}
            />
            <button
              onClick={() => addToWaitlist(email)}
              className="inline-flex items-center justify-center px-8 py-4 dark:bg-white bg-black dark:text-black text-white rounded-lg font-medium dark:hover:bg-white/90 hover:bg-black/90 transition-colors duration-300"
            >
              {isLoading ? "Loading..." : "Notify Me"}
              {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
            </button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center text-sm dark:text-white/60 text-black/60 transition-colors duration-300"
          >
            <span>
              Join 2,000+ others waiting to transform their delivery operations
            </span>
          </motion.div>
        </motion.div>
      </div>
      {showModal && (
        <NotifyModal
          isSuccessful
          onClose={() => {
            setShowModal(false);
            setEmail("");
          }}
        />
      )}
    </div>
  );
}
