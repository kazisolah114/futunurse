import { Activity } from 'lucide-react';
import React from 'react';

const WeekInsight = () => {
    return (
        <div className=' border border-gray-200/30 hover:border-gray-200/50 rounded-lg p-4 bg-white duration-200'>
            <h4 className='mb-3 flex items-center gap-2.5 text-sm font-semibold text-slate-900'><Activity size={18} className='text-blue-700' /> This Week</h4>
            <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-600/90 mt-1.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs font-medium text-foreground">3 care plans created</p>
                        <p className="text-xs text-muted-foreground">Mon, Tue, Wed</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600/90 mt-1.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs font-medium text-foreground">34 practice questions</p>
                        <p className="text-xs text-muted-foreground">78% accuracy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeekInsight;