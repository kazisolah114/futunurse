import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import React from 'react';
import QuickInsights from './components/QuickInsights';
import SessionOptions from './components/SessionOptions';

export const NCLEX = () => {
    return (
        <div className='space-y-8'>
            <div className='flex md:justify-between max-md:flex-col max-md:gap-2 mb-10'>
                <div>
                    <h2 className='font-bold text-3xl text-gray-800 mb-1'>NCLEX Smart Coach</h2>
                    <p className='text-gray-700 mb-3'>Adaptive practice questions tailored to your learning needs</p>
                </div>
                <div className=''>
                    <Button size={'lg'} className='w-44 h-11 max-md:w-full'><Play size={18} /> Start Session</Button>
                </div>
            </div>
            <QuickInsights />
            <SessionOptions />
        </div>
    );
};