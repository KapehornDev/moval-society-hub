
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="bg-moval-500 text-white p-1.5 rounded-md text-sm">M</span>
              <span className="text-base font-medium">Moval Society</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              A digital society with its own economy and governance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/wallet" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link to="/loans" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Loans
                  </Link>
                </li>
                <li>
                  <Link to="/voting" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Voting
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Governance</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/association" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Association
                  </Link>
                </li>
                <li>
                  <Link to="/justice" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Justice Dept
                  </Link>
                </li>
                <li>
                  <Link to="/banker" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Banker
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Moval Society. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
