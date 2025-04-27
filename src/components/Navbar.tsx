
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 w-full bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold">Reading Room</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:text-primary font-medium">Features</a>
          <a href="#testimonials" className="hover:text-primary font-medium">Testimonials</a>
          <a href="#about" className="hover:text-primary font-medium">About</a>
          <a href="#contact" className="hover:text-primary font-medium">Contact</a>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button variant="outline" className="font-medium">Log In</Button>
          <Button className="font-medium">Sign Up</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>
      
      <MobileNav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
};

export default Navbar;
