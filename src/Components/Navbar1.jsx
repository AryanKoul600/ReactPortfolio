import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-secondary">Portfolio</a>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-textPrimary" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-textPrimary hover:text-secondary transition-colors">Home</a></li>
          <li><a href="#about" className="text-textPrimary hover:text-secondary transition-colors">About</a></li>
          <li><a href="#projects" className="text-textPrimary hover:text-secondary transition-colors">Projects</a></li>
          <li><a href="#skills" className="text-textPrimary hover:text-secondary transition-colors">Skills</a></li>
          <li><a href="#achievements" className="text-textPrimary hover:text-secondary transition-colors">Achievements</a></li>
          <li><a href="#contact" className="text-textPrimary hover:text-secondary transition-colors">Contact</a></li>
        </ul>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-tertiary">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2"><a href="#home" className="text-textPrimary hover:text-secondary transition-colors" onClick={toggleMenu}>Home</a></li>
            <li className="py-2"><a href="#about" className="text-textPrimary hover:text-secondary transition-colors" onClick={toggleMenu}>About</a></li>
            <li className="py-2"><a href="#projects" className="text-textPrimary hover:text-secondary transition-colors" onClick={toggleMenu}>Projects</a></li>
            <li className="py-2"><a href="#skills" className="text-textPrimary hover:text-secondary transition-colors" onClick={toggleMenu}>Skills</a></li>
            <li className="py-2"><a href="#achievements" className="text-textPrimary hover:text-secondary transition-colors" onClick={toggleMenu}>Achievements</a></li>
            <li className="py-2"><a href="#contact" className="text-textPrimary hover:text-secondary transition-colors" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;