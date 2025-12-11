"use client";
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import React from 'react';
import SessionOptions from './components/SessionOptions';
import RecentPracticeSessions from './components/RecentPracticeSessions';
import PerformanceByCategory from './components/PerformanceByCategory';
import { redirect, usePathname } from 'next/navigation';

export const NCLEX = () => {
    const pathname = usePathname();
    return (
        <div className='space-y-6'>
            <div className='flex md:justify-between max-md:flex-col max-md:gap-2'>
                <div>
                    <h2 className='font-bold text-3xl text-gray-800 mb-1'>NCLEX Smart Coach</h2>
                    <p className='text-gray-700 mb-3'>Adaptive practice questions tailored to your learning needs</p>
                </div>
                <div className=''>
                    <Button size={'lg'} onClick={() => redirect(`${pathname}/new-session`)} className='w-56 h-12 max-md:w-full'><Play size={18} /> Start Session</Button>
                </div>
            </div>
            <SessionOptions />
            <PerformanceByCategory />
            <RecentPracticeSessions />
        </div>
    );
};