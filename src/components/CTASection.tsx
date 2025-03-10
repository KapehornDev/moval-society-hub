
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CTASection: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-blur-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div ref={ctaRef} className="relative py-20 opacity-0">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-moval-50 to-transparent opacity-60 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg">
          <div className="px-6 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Join the Moval Society Today
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of a revolutionary digital society with its own economy, governance system, and community-driven values.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-moval-600 hover:bg-moval-700 text-white px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all">
                <Link to="/register">
                  Create an Account
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/login">
                  Already a Member? Log In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
