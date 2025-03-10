
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-blur-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden py-24 sm:py-32 opacity-0">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-moval-100 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-moval-200 opacity-30 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-moval-50 text-moval-800 mb-6 animate-slide-down">
            Welcome to a new digital society
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The <span className="text-moval-600">Moval</span> Society
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            A community-governed digital society with its own economy, governance, and justice system.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <Button asChild className="rounded-full bg-moval-600 hover:bg-moval-700 text-white px-8 py-6 shadow-md hover:shadow-lg transition-all">
              <Link to="/wallet">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/about">
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
