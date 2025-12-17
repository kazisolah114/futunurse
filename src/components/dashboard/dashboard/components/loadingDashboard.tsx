import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const LoadingDashboard = () => {
    return (
        <div className='space-y-5'>
            <div className='space-y-3'>
                <Skeleton className='w-80 h-10' />
                <Skeleton className='w-60 !md:w-28 h-5' />
            </div>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    Array.from({ length: 4 }).map((_, idx) => {
                        return (
                            <Skeleton key={idx} className='h-36' />
                        )
                    })
                }
            </div>
            <div className='md:grid grid-cols-3 gap-5 max-sm:space-y-5'>
                <div className='col-span-2 space-y-5'>
                    <div className='md:flex gap-6 max-md:space-y-5'>
                        <Skeleton className='h-40' />
                        <Skeleton className='h-40' />
                    </div>
                    <div>
                        <Skeleton className='h-64' />
                    </div>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <Skeleton className='h-72' />
                        <Skeleton className='h-72' />
                    </div>
                </div>
                <div className='col-span-1 space-y-5'>
                    <Skeleton className='h-80' />
                    <Skeleton className='h-44' />
                    <Skeleton className='h-72' />
                </div>
            </div>
        </div>
    );
};

export default LoadingDashboard;