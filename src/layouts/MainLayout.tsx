
import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 w-full">
        <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main 
          className={`flex-1 transition-all duration-500 ease-in-out ${
            isPageLoaded ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
