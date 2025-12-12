import { Calendar, Zap } from 'lucide-react';
import React from 'react';
import QuickInsights from './components/QuickInsights';
import Features from './components/Features';
import NclexPerformance from './components/NclexPerformance';
import WeekInsight from './components/WeekInsight';
import AISuggestions from './components/AISuggestions';
import StrengthsRadar from './components/StrengthsRadar';

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
            <div className='max-md:mb-5 rounded-md w-full flex max-md:flex-col max-md:gap-3 md:items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-2xl max-sm:text-xl text-gray-800 mb-2'>Welcome back, {user?.name}!</h1>
                    <p className='flex items-center gap-2 text-gray-600 text-sm'><Calendar size={15} /> {today.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })} • track your progress</p>
                </div>
                <div className='max-md:hidden text-white bg-gradient-to-b bg-green-500 to-10% flex items-center gap-3 rounded-md text-xs px-3 py-2 font-medium'><Zap size={16} /> Pro Trial - 14 days remaining</div>
            </div>
            <QuickInsights />
            <div className='md:grid grid-cols-3 gap-6 max-sm:gap-3'>
                <div className='col-span-2 space-y-6'>
                    <Features />
                    <NclexPerformance />
                </div>
                <div className='col-span-1 space-y-6'>
                    <StrengthsRadar />
                    <AISuggestions />
                    <WeekInsight />
                </div>
            </div>
        </div>
    );
};