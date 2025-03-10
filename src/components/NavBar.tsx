
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavBarProps {
  onMenuClick: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick();
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="mr-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            <Link to="/" className="flex items-center space-x-2">
              <span className="bg-moval-500 text-white p-2 rounded-md">M</span>
              <span className="text-xl font-semibold tracking-tight">Moval Society</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-line">
              Home
            </Link>
            <Link to="/wallet" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-line">
              Wallet
            </Link>
            <Link to="/loans" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-line">
              Loans
            </Link>
            <Link to="/voting" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-line">
              Voting
            </Link>
            <Link to="/association" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-line">
              Association
            </Link>
            <Link to="/justice" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-line">
              Justice
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-moval-500"></span>
            </Button>
            
            <Link to="/profile">
              <Button variant="outline" size="icon" className="rounded-full border-moval-200" aria-label="Profile">
                <User className="h-5 w-5 text-moval-700" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
