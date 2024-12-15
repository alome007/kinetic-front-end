import { PackageSearch, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { scrollToElement } from "../utils/scroll";
import NotifyModal from "./NotifyModal";
import { motion } from "framer-motion";
import { slideIn } from "../utils/animations";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (section: string) => {
    scrollToElement(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-black/40 bg-white/40 backdrop-blur-lg border-b dark:border-white/5 border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b dark:from-black/80 from-white/80 dark:via-black/20 via-white/20 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <PackageSearch
              className="h-6 w-6 dark:text-white text-black"
              strokeWidth={1.5}
            />
            <span className="dark:text-white text-black text-xl font-medium tracking-tight">
              Kinetic
            </span>
          </div>
          
          <div className="md:hidden flex items-center justify-between space-x-2 dark:text-white/70 text-black/70">
  <div className="flex items-center space-x-2 hover:dark:text-white hover:text-black">
    <ThemeToggle />
  </div>
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="flex dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black"
  >
    {isMenuOpen ? (
      <X className="h-6 w-6" />
    ) : (
      <Menu className="h-6 w-6" />
    )}
  </button>
</div>

         

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToElement("features")}
              className="dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors text-sm"
            >
              Features
            </button>
            <button
              onClick={() => scrollToElement("about")}
              className="dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors text-sm"
            >
              About
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="dark:bg-white/10 bg-black/10 backdrop-blur-sm dark:text-white text-black border dark:border-white/10 border-black/10 px-4 py-2 rounded-lg text-sm font-medium hover:dark:bg-white/20 hover:bg-black/20 transition-colors"
            >
              Get Notified
            </button>
            <ThemeToggle />
          </nav>
        </div>
        {isMenuOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideIn}
            className="md:hidden py-4 border-t dark:border-white/10 border-black/10 dark:bg-black/40 bg-white/40 backdrop-blur-lg"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleMenuClick("features")}
                className="dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors text-sm text-left"
              >
                Features
              </button>
              <button
                onClick={() => handleMenuClick("about")}
                className="dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors text-sm text-left"
              >
                About
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="dark:bg-white/10 bg-black/10 backdrop-blur-sm dark:text-white text-black border dark:border-white/10 border-black/10 px-4 py-2 rounded-lg text-sm font-medium hover:dark:bg-white/20 hover:bg-black/20 transition-colors text-left"
              >
                Get Notified
              </button>
            </div>
          </motion.div>
        )}
      </div>
      {showModal && (
        <NotifyModal onClose={() => setShowModal(false)} isSuccessful={false} />
      )}
    </header>
  )}