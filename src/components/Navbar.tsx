
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 py-2 md:py-4 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md' 
          : 'bg-white/90 dark:bg-gray-900/90 shadow-sm'
      } backdrop-blur-sm dark:text-white`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="text-lg md:text-xl font-bold text-tickyfy-black dark:text-white">
            Ticke<span className="text-tickyfy-green">Fy</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#home" className="font-medium hover:text-tickyfy-green transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-tickyfy-green transition-colors">About</a>
          <a href="#features" className="font-medium hover:text-tickyfy-green transition-colors">Features</a>
          <a href="#team" className="font-medium hover:text-tickyfy-green transition-colors">Team</a>
          <a href="#contact" className="font-medium hover:text-tickyfy-green transition-colors">Contact</a>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation with Theme Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2 min-h-10 min-w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 md:hidden">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#home" 
                className="font-medium hover:text-tickyfy-green transition-colors py-2 px-3" 
                onClick={closeMenu}
              >Home</a>
              <a 
                href="#about" 
                className="font-medium hover:text-tickyfy-green transition-colors py-2 px-3" 
                onClick={closeMenu}
              >About</a>
              <a 
                href="#features" 
                className="font-medium hover:text-tickyfy-green transition-colors py-2 px-3" 
                onClick={closeMenu}
              >Features</a>
              <a 
                href="#team" 
                className="font-medium hover:text-tickyfy-green transition-colors py-2 px-3" 
                onClick={closeMenu}
              >Team</a>
              <a 
                href="#contact" 
                className="font-medium hover:text-tickyfy-green transition-colors py-2 px-3" 
                onClick={closeMenu}
              >Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
