import { Progress } from '@/components/ui/progress';
import { BarChart3 } from 'lucide-react';
import React from 'react';

type PerformanceByCategory = {
    title: string;
    accuracy_percentage: number;
    questions_completed: number;
}

const PerformanceByCategory = () => {
    const performanceByCategory: PerformanceByCategory[] = [
        { title: 'Safe and Effective Care Environment', accuracy_percentage: 90, questions_completed: 325 },
        { title: 'Health Promotion and Maintenance', accuracy_percentage: 96, questions_completed: 230 },
        { title: 'Psychosocial Integrity', accuracy_percentage: 74, questions_completed: 210 }
    ]
    return (
        <div className='bg-white/70 backdrop-blur-xl border border-gray-200/30 rounded-lg p-5'>
            <h2 className='text-gray-900 font-medium text-lg flex items-center gap-2'><BarChart3 size={20} className='text-green-600/90' /> Performance by Category</h2>
            <ul className='space-y-3 mt-5'>
                {
                    performanceByCategory.map((item, index) => (
                        <li key={index} className='space-y-2.5'>
                            <div className='flex items-end justify-between'>
                                <div>
                                    <h5 className='font-medium text-gray-900'>{item.title}</h5>
                                    <p className='text-gray-600'>{item.questions_completed} questions completed</p>
                                </div>
                                <p className={`text-sm w-12 text-center rounded-full ${item.accuracy_percentage > 80 ? 'bg-green-500/20 text-green-700' : 'bg-gray-100 text-gray-900'}`}>{item.accuracy_percentage}%</p>
                            </div>
                            <Progress value={item.accuracy_percentage} className='' />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PerformanceByCategory;