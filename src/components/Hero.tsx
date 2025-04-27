
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 md:mb-6">
              Turning Every Book Into a <span className="text-primary">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Reading Room brings readers together. Share reviews, start discussions, and find new books through an AI-curated personalized feed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-medium gap-2">
                <Users size={18} />
                Join the Community
              </Button>
              <Button size="lg" variant="outline" className="font-medium gap-2">
                <BookOpen size={18} />
                Explore Books
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-reading-cream rounded-full -z-10" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-reading-blue rounded-full -z-10" />
              <div className="relative bg-white shadow-soft rounded-2xl overflow-hidden">
                <div className="aspect-[3/4] bg-reading-purple/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-6 w-4/5 transform rotate-6">
                      <div className="h-6 bg-reading-cream rounded w-full" />
                      <div className="h-4 bg-reading-peach rounded w-3/4" />
                      <div className="h-4 bg-reading-peach rounded w-full" />
                      <div className="h-4 bg-reading-peach rounded w-5/6" />
                      <div className="h-6 bg-reading-cream rounded w-full" />
                      <div className="h-4 bg-reading-peach rounded w-3/4" />
                      <div className="h-4 bg-reading-peach rounded w-full" />
                      <div className="h-4 bg-reading-peach rounded w-5/6" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full bg-white bg-opacity-80 backdrop-blur-sm py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-reading-green rounded-full flex items-center justify-center">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Book Club Discussion</p>
                      <p className="text-sm text-gray-500">28 readers active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-reading-blue/10 to-transparent -z-10" />
    </section>
  );
};

export default Hero;
