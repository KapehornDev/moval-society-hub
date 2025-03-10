
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, FileText, Vote, PieChart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
}

const Association = () => {
  // Mock data
  const members: Member[] = [
    {
      id: '1',
      name: 'Sophia Chen',
      role: 'President',
      avatar: ''
    },
    {
      id: '2',
      name: 'David Kumar',
      role: 'Vice President',
      avatar: ''
    },
    {
      id: '3',
      name: 'Priya Singh',
      role: 'Treasurer',
      avatar: ''
    },
    {
      id: '4',
      name: 'Raj Patel',
      role: 'Secretary',
      avatar: ''
    }
  ];
  
  const events: Event[] = [
    {
      id: '1',
      title: 'Quarterly Budget Meeting',
      date: '2023-07-15T14:00:00Z',
      description: 'Review and approve Q3 budget allocations'
    },
    {
      id: '2',
      title: 'Association Elections',
      date: '2023-08-01T09:00:00Z',
      description: 'Annual election for association positions'
    },
    {
      id: '3',
      title: 'Community Town Hall',
      date: '2023-07-20T18:00:00Z',
      description: 'Open forum for community feedback and concerns'
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Association</h1>
            <p className="text-gray-600 mt-1">Central governance for the Moval Society</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-moval-600 hover:bg-moval-700">
            <Vote className="mr-2 h-4 w-4" />
            Participate in Voting
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Current Members Card */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-700 flex items-center">
                <Users className="mr-2 h-5 w-5 text-moval-600" />
                Current Members
              </CardTitle>
              <CardDescription>
                Elected officials managing the society
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-moval-100 text-moval-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Events Card */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-700 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-moval-600" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Association meetings and activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(event.date).toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Association Overview Card */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-700 flex items-center">
                <PieChart className="mr-2 h-5 w-5 text-moval-600" />
                Association Overview
              </CardTitle>
              <CardDescription>
                Key metrics and statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border border-gray-100 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500">Society Treasury</h4>
                  <p className="text-2xl font-bold text-moval-700 mt-1">125,000 Movals</p>
                </div>
                
                <div className="p-3 border border-gray-100 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500">Total Members</h4>
                  <p className="text-2xl font-bold text-moval-700 mt-1">240</p>
                </div>
                
                <div className="p-3 border border-gray-100 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500">Active Proposals</h4>
                  <p className="text-2xl font-bold text-moval-700 mt-1">5</p>
                </div>
                
                <Button variant="outline" className="w-full mt-2">
                  <FileText className="mr-2 h-4 w-4" />
                  View Association Charter
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Announcements Card */}
          <Card className="md:col-span-3 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-700 flex items-center">
                <Bell className="mr-2 h-5 w-5 text-moval-600" />
                Recent Announcements
              </CardTitle>
              <CardDescription>
                Official communications from the Association
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">New Economic Policy Implementation</h4>
                  <div className="text-sm text-gray-500 mt-1">Posted on June 15, 2023</div>
                  <p className="text-gray-700 mt-3">
                    The Association has finalized the implementation plan for the new economic policy.
                    This includes updated Moval distribution mechanisms and loan interest rate adjustments.
                    All members are encouraged to review the policy details on the official documentation portal.
                  </p>
                  <Button variant="link" className="mt-2 pl-0 text-moval-600 hover:text-moval-800">
                    Read full announcement
                  </Button>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Call for Justice Department Candidates</h4>
                  <div className="text-sm text-gray-500 mt-1">Posted on June 10, 2023</div>
                  <p className="text-gray-700 mt-3">
                    The Association is accepting applications for the Justice Department election.
                    Qualified members interested in serving on the Justice committee should submit
                    their applications by June 25, 2023. Election will be held on July 5, 2023.
                  </p>
                  <Button variant="link" className="mt-2 pl-0 text-moval-600 hover:text-moval-800">
                    Read full announcement
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Association;
