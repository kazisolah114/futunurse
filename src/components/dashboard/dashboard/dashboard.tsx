import { Calendar, Zap } from 'lucide-react';
import React from 'react';

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
        <div>
            <div className=' rounded-md w-full flex max-md:flex-col max-md:gap-3 md:items-center justify-between'>
                <div>
                    <h1 className='font-bold text-3xl max-sm:text-2xl text-gray-800 mb-3'>Welcome back, {user?.name}!</h1>
                    <p className='flex items-center gap-2 text-gray-600 text-sm'><Calendar size={15} /> {today.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                </div>
                <div className='text-white bg-gradient-to-b bg-green-500 to-10% flex items-center gap-3 rounded-md text-xs px-3 py-2 font-medium'><Zap size={16} /> Pro Trial - 14 days remaining</div>
            </div>
        </div>
    );
};