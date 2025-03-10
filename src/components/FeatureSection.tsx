import React, { useEffect, useRef } from 'react';
import { 
  Wallet, 
  BanknoteIcon, 
  Vote, 
  Users, 
  Gavel, 
  Landmark 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="glass rounded-2xl p-6 shadow-sm opacity-0 card-hover"
    >
      <div className="bg-moval-50 w-12 h-12 rounded-xl flex items-center justify-center text-moval-600 mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Wallet size={24} />,
      title: 'Moval Wallet',
      description: 'Store, send, and receive Movals within the society with a seamless, secure interface.',
      delay: 100
    },
    {
      icon: <BanknoteIcon size={24} />,
      title: 'Moval Loans',
      description: 'Request and repay loans with transparent terms and community-set interest rates.',
      delay: 200
    },
    {
      icon: <Vote size={24} />,
      title: 'Voting System',
      description: 'Participate in democratic elections and have your voice heard in society decisions.',
      delay: 300
    },
    {
      icon: <Users size={24} />,
      title: 'Association Management',
      description: 'Track community decisions and stay updated with association activities.',
      delay: 400
    },
    {
      icon: <Gavel size={24} />,
      title: 'Justice Department',
      description: 'A fair system for dispute resolution and enforcement of community rules.',
      delay: 500
    },
    {
      icon: <Landmark size={24} />,
      title: 'Banker Interface',
      description: 'Manage conversion rates between Movals and traditional currencies.',
      delay: 600
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 opacity-0">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-moval-50 text-moval-800">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Complete Digital Society
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to participate in a thriving community economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
