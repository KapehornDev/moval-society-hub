import React from 'react';
import {
  Home,
  Wallet,
  Banknote,
  Vote,
  Users,
  Gavel,
  Settings,
  LogOut
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-bold">Moval Society</span>
        <button onClick={onClose} className="focus:outline-none">
          <svg
            className="h-6 w-6 text-gray-500 hover:text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col h-full">
        <ul className="flex-1 px-2">
          <li>
            <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              <Home className="inline-block mr-2" size={20} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/wallet" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              <Wallet className="inline-block mr-2" size={20} />
              Wallet
            </Link>
          </li>
          <li>
            <Link to="/loans" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              <Banknote className="inline-block mr-2" size={20} />
              Loans
            </Link>
          </li>
          <li>
            <Link to="/voting" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              <Vote className="inline-block mr-2" size={20} />
              Voting
            </Link>
          </li>
          <li>
            <Link to="/association" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              <Users className="inline-block mr-2" size={20} />
              Association
            </Link>
          </li>
          <li>
            <Link to="/justice" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              <Gavel className="inline-block mr-2" size={20} />
              Justice Department
            </Link>
          </li>
        </ul>
        <div className="p-4">
          <div className="border-t border-gray-200 pt-4">
            <Link to="/settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              <Settings className="inline-block mr-2" size={20} />
              Settings
            </Link>
          </div>
          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="inline-block mr-2" size={20} />
            Logout
          </Button>
        </div>
      </nav>
    </div>
  );
};
