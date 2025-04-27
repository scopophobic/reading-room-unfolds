
import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold">Reading Room</span>
            </div>
            <p className="text-gray-600 mb-6">
              A social platform for book lovers to connect, share, and discover.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Book Clubs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Authors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Guidelines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:hello@readingroom.com" className="text-gray-600 hover:text-primary">hello@readingroom.com</a>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Support Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Partnerships</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Reading Room. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary">Privacy Policy</a> · 
            <a href="#" className="hover:text-primary ml-3">Terms of Service</a> · 
            <a href="#" className="hover:text-primary ml-3">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
