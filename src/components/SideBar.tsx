
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Home, 
  Wallet, 
  Landmark, 
  Vote, 
  Users, 
  GavelSquare, 
  BanknoteIcon, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Wallet size={20} />, label: 'Wallet', path: '/wallet' },
    { icon: <BanknoteIcon size={20} />, label: 'Loans', path: '/loans' },
    { icon: <Vote size={20} />, label: 'Voting', path: '/voting' },
    { icon: <Users size={20} />, label: 'Association', path: '/association' },
    { icon: <GavelSquare size={20} />, label: 'Justice', path: '/justice' },
    { icon: <Landmark size={20} />, label: 'Banker', path: '/banker' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div 
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative lg:translate-x-0 lg:shadow-none`}
    >
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-moval-700">Moval Society</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="lg:hidden"
          >
            <X size={20} />
          </Button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 group hover:bg-moval-50"
              onClick={onClose}
            >
              <span className="mr-3 text-moval-600 group-hover:text-moval-700">
                {item.icon}
              </span>
              <span className="text-gray-700 group-hover:text-moval-800">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        
        <div className="px-4 py-6 border-t border-gray-100">
          <div className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-moval-50 transition-all duration-200">
            <HelpCircle size={20} className="mr-3 text-moval-600" />
            <span className="text-gray-700">Help & Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};
