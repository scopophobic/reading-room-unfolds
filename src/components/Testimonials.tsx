
import React from 'react';
import { BookOpen } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Readers Say</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute -top-4 -left-4 text-5xl text-reading-peach opacity-30">"</div>
            <div className="absolute -bottom-4 -right-4 text-5xl text-reading-peach opacity-30">"</div>
            <blockquote className="text-2xl md:text-3xl font-serif text-center italic max-w-3xl mx-auto px-6">
              A book club reimagined for the digital age.
            </blockquote>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-reading-purple rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="font-medium">Literary Review</p>
              <p className="text-sm text-gray-500">Annual Best Apps for Readers</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-serif font-bold text-primary mb-2">25k+</div>
            <p className="text-gray-600 text-center">Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-serif font-bold text-primary mb-2">100k+</div>
            <p className="text-gray-600 text-center">Books Discussed</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-serif font-bold text-primary mb-2">8k+</div>
            <p className="text-gray-600 text-center">Reading Groups</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-serif font-bold text-primary mb-2">4.8</div>
            <p className="text-gray-600 text-center">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
