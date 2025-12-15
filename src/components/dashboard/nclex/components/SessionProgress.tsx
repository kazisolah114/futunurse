import { Progress } from '@/components/ui/progress';
import React from 'react';

interface SessionProgressProps {
    progress: number;
}

const SessionProgress = ({ progress }: SessionProgressProps) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700 text-sm font-medium">Progress</p>
                <p className="text-gray-700 text-sm font-semibold">
                    {progress || 0}%
                </p>
            </div>
            <Progress value={progress || 0} className="h-2" />
        </div>
    );
};

export default SessionProgress;