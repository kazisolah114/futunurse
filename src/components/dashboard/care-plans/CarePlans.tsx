import { Button } from '@/components/ui/button';
import { Download, File, Plus, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const CarePlans = () => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='font-bold text-3xl text-gray-800 mb-1'>Care Plans Library</h2>
                <p className='text-gray-700 mb-3'>Manage your nursing care plans with AI-powered assistance and templates</p>
                <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-1 text-gray-600 text-sm'><File size={16} /> 5 total plans</p>
                    <p className='flex items-center gap-1 text-gray-600 text-sm'><Star size={16} /> 2 stars</p>
                </div>
            </div>
            <div className='space-x-2'>
                <Button variant={'outline'} className='border-teal-600 text-teal-600 hover:bg-transparent hover:text-teal-600'><Download size={18} /> Export All</Button>
                <Link href="care-plans/new"><Button className='w-40'><Plus size={18} /> New Care Plan</Button></Link>
            </div>
        </div>
    );
};