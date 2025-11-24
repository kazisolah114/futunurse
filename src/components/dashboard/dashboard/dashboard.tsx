import { Activity, Calendar, Zap } from 'lucide-react';
import React from 'react';
import QuickInsights from './components/QuickInsights';
import Features from './components/Features';

interface DashboardProps {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        id?: string | null;
    }
}

export const Dashboard = ({ user }: DashboardProps) => {
    const today = new Date();
    return (
        <div className='space-y-8 max-sm:space-y-4'>
            <div className='rounded-md w-full flex max-md:flex-col max-md:gap-3 md:items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-2xl max-sm:text-xl text-gray-800 mb-2'>Welcome back, {user?.name}!</h1>
                    <p className='flex items-center gap-2 text-gray-600 text-sm'><Calendar size={15} /> {today.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })} • track your progress</p>
                </div>
                <div className='text-white bg-gradient-to-b bg-green-500 to-10% flex items-center gap-3 rounded-md text-xs px-3 py-2 font-medium'><Zap size={16} /> Pro Trial - 14 days remaining</div>
            </div>
            <QuickInsights />
            <div className='grid grid-cols-3 gap-4 max-sm:gap-2'>
                <Features />
                <div className='col-span-1 max-md:col-span-full border border-gray-200/50 rounded-lg p-4 bg-white/90'>
                    <h4 className='flex items-center gap-2.5 text-sm font-semibold text-slate-800'><Activity size={18} className='text-blue-700' /> This Week</h4>
                </div>
            </div>
        </div>
    );
};