import { Progress } from '@/components/ui/progress';
import React from 'react';

const SessionProgress = () => {
    return (
        <div>
            <div className='flex justify-between items-center mb-3'>
                <p className='text-gray-800 text-sm'>Progress</p>
                <p className='text-grya-800 text-sm'>50%</p>
            </div>
            <Progress value={50} />
        </div>
    );
};

export default SessionProgress;