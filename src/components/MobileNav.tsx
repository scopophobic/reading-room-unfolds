
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
      <div className="flex justify-end p-6">
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-6 p-6 text-lg">
        <a 
          href="#features" 
          className="hover:text-primary py-2 w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Features
        </a>
        <a 
          href="#testimonials" 
          className="hover:text-primary py-2 w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Testimonials
        </a>
        <a 
          href="#about" 
          className="hover:text-primary py-2 w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a 
          href="#contact" 
          className="hover:text-primary py-2 w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
        <div className="flex flex-col gap-4 w-full mt-6">
          <Button variant="outline" className="w-full">Log In</Button>
          <Button className="w-full">Sign Up</Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
