import { Progress } from '@/components/ui/progress';
import React from 'react';

interface SessionProgressProps {
    progress: number;
}

const SessionProgress = ({ progress }: SessionProgressProps) => {
    return (
        <div>
            <div className='flex justify-between items-center mb-3'>
                <p className='text-gray-800 text-sm'>Progress</p>
                <p className='text-grya-800 text-sm'>{progress || 0}%</p>
            </div>
            <Progress value={progress || 0} />
        </div>
    );
};

export default SessionProgress;