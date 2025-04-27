
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-reading-cream via-reading-peach/30 to-reading-purple/30">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Begin Your Reading Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of readers who are already connecting, sharing, and discovering new books on Reading Room.
          </p>
          <Button size="lg" className="font-medium px-8 py-6">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
