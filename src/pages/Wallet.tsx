
import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Clock, ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react';
import { WalletIcon } from 'lucide-react'; // Renamed import to WalletIcon
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  from: string;
  to: string;
  date: string;
}

const Wallet = () => {
  const [balance] = useState(2500);
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  
  // Mock transaction data
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'receive',
      amount: 500,
      from: 'Association Fund',
      to: 'Me',
      date: '2023-06-01T15:30:00Z'
    },
    {
      id: '2',
      type: 'send',
      amount: 150,
      from: 'Me',
      to: 'Sara Johnson',
      date: '2023-05-28T12:15:00Z'
    },
    {
      id: '3',
      type: 'receive',
      amount: 1250,
      from: 'Community Treasury',
      to: 'Me',
      date: '2023-05-20T10:00:00Z'
    },
    {
      id: '4',
      type: 'send',
      amount: 350,
      from: 'Me',
      to: 'Michael Chen',
      date: '2023-05-15T14:20:00Z'
    }
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Send Movals:', { amount, recipient });
    setAmount('');
    setRecipient('');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Moval Wallet</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Balance Card */}
          <Card className="lg:col-span-1 shadow-md hover:shadow-lg transition-all duration-300 h-fit">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-700">Your Balance</CardTitle>
              <CardDescription>Available Movals in your wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-moval-700">{balance.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Movals</p>
                </div>
                <div className="p-4 rounded-full bg-moval-50">
                  <WalletIcon className="h-8 w-8 text-moval-600" /> {/* Changed Wallet to WalletIcon here */}
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-moval-600 hover:bg-moval-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Request Movals
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Send Movals Card */}
          <Card className="lg:col-span-2 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-700">Send Movals</CardTitle>
              <CardDescription>Transfer Movals to other members</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSend} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Input 
                    id="recipient" 
                    placeholder="Enter recipient's name or ID" 
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    required 
                    className="focus:border-moval-400 focus:ring focus:ring-moval-100"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="relative">
                    <Input 
                      id="amount" 
                      type="number" 
                      placeholder="Enter amount" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required 
                      className="focus:border-moval-400 focus:ring focus:ring-moval-100"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">Movals</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-moval-600 hover:bg-moval-700"
                >
                  Send Movals
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Transaction History Card */}
          <Card className="lg:col-span-3 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-700">Transaction History</CardTitle>
              <CardDescription>Your recent Moval transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="sent">Sent</TabsTrigger>
                  <TabsTrigger value="received">Received</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className={`p-3 rounded-full mr-4 ${
                          transaction.type === 'receive' ? 'bg-green-50' : 'bg-red-50'
                        }`}>
                          {transaction.type === 'receive' ? (
                            <ArrowDownLeft className={`h-5 w-5 text-green-600`} />
                          ) : (
                            <ArrowUpRight className={`h-5 w-5 text-red-600`} />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-900">
                              {transaction.type === 'receive' ? 'Received from' : 'Sent to'} {transaction.type === 'receive' ? transaction.from : transaction.to}
                            </h4>
                            <p className={`font-medium ${
                              transaction.type === 'receive' ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {transaction.type === 'receive' ? '+' : '-'}{transaction.amount} Movals
                            </p>
                          </div>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{new Date(transaction.date).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="sent" className="mt-0">
                  <div className="space-y-4">
                    {transactions
                      .filter(t => t.type === 'send')
                      .map((transaction) => (
                        <div key={transaction.id} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="p-3 rounded-full bg-red-50 mr-4">
                            <ArrowUpRight className="h-5 w-5 text-red-600" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-gray-900">
                                Sent to {transaction.to}
                              </h4>
                              <p className="font-medium text-red-600">
                                -{transaction.amount} Movals
                              </p>
                            </div>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{new Date(transaction.date).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="received" className="mt-0">
                  <div className="space-y-4">
                    {transactions
                      .filter(t => t.type === 'receive')
                      .map((transaction) => (
                        <div key={transaction.id} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="p-3 rounded-full bg-green-50 mr-4">
                            <ArrowDownLeft className="h-5 w-5 text-green-600" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-gray-900">
                                Received from {transaction.from}
                              </h4>
                              <p className="font-medium text-green-600">
                                +{transaction.amount} Movals
                              </p>
                            </div>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{new Date(transaction.date).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wallet;
