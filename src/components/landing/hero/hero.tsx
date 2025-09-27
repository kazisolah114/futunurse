import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center h-[calc(100vh-4rem)] px-96'>
            <p className='bg-blue-100 text-teal-700 rounded-full p-1 text-xs font-semibold py-1 px-2'>Trusted by 10,000+ Nursing Students</p>
            <h3 className='text-5xl font-bold text-gray-900 my-4'>Master Nursing with AI-Powered Learning</h3>
            <p className='text-base text-gray-700'>Transform your nursing education with our intelligent Care Plan Assistant and NCLEX Smart Coach. Reduce study time by 70% while improving your clinical skills.</p>
            <div className='flex items-center gap-3 mt-12'>
                <Button size={'lg'}>Start Free Trial</Button>
                <Button variant={'outline'} size={'lg'}>Watch Demo</Button>
            </div>
        </div>
    );
};

export default Hero;