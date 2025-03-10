
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthCardProps {
  type: 'login' | 'register';
}

export const AuthCard: React.FC<AuthCardProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating auth - will be replaced with Supabase integration
    setTimeout(() => {
      console.log('Auth data:', { email, password, name });
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto animate-scale-in shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {type === 'login' ? 'Login to Moval Society' : 'Join Moval Society'}
        </CardTitle>
        <CardDescription className="text-center">
          {type === 'login' 
            ? 'Enter your credentials to access your account'
            : 'Create an account to become a member of the society'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className="transition-all duration-200 focus:border-moval-400 focus:ring focus:ring-moval-100"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="transition-all duration-200 focus:border-moval-400 focus:ring focus:ring-moval-100"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {type === 'login' && (
                <Link to="/forgot-password" className="text-xs text-moval-600 hover:text-moval-800 transition-colors">
                  Forgot password?
                </Link>
              )}
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder={type === 'login' ? 'Enter your password' : 'Create a strong password'} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="transition-all duration-200 focus:border-moval-400 focus:ring focus:ring-moval-100"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-moval-600 hover:bg-moval-700 text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing
              </span>
            ) : type === 'login' ? 'Login' : 'Create Account'}
          </Button>
        </form>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <Button variant="outline" type="button" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                fill="currentColor"
              />
            </svg>
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-600">
          {type === 'login' ? (
            <>
              Don't have an account?{' '}
              <Link to="/register" className="text-moval-600 hover:text-moval-800 font-medium">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link to="/login" className="text-moval-600 hover:text-moval-800 font-medium">
                Login
              </Link>
            </>
          )}
        </p>
      </CardFooter>
    </Card>
  );
};
