import { Clock } from 'lucide-react';
import React from 'react';

type RecentPracticeSessions = {
    title: string;
    date: string;
    accuracy_percentage: number;
    questions_completed: number;
}

const RecentPracticeSessions = () => {
    const recentPracticeSessions: RecentPracticeSessions[] = [
        { title: 'Pharmacology', date: '1/15/2025', accuracy_percentage: 75, questions_completed: 25 },
        { title: 'Medical-Surgical', date: '1/17/2025', accuracy_percentage: 96, questions_completed: 30 },
        { title: 'Pediatrics', date: '2/05/2025', accuracy_percentage: 90, questions_completed: 25 }
    ]
    return (
        <div className='bg-white border border-gray-200/30 rounded-lg p-5'>
            <h2 className='text-gray-900 font-medium text-lg flex items-center gap-2'><Clock size={20} className='text-blue-600/90' /> Recent Practice Sessions</h2>
            <ul className='space-y-2 mt-5'>
                {
                    recentPracticeSessions.map((item, index) => (
                        <li key={index} className='flex items-center justify-between bg-gray-400/5 rounded-lg p-3'>
                            <div>
                                <h5 className='font-semibold text-gray-800'>{item.title}</h5>
                                <p className='text-gray-600'>{item.date}</p>
                            </div>
                            <div className='text-right'>
                                <h5 className='font-semibold text-lg text-gray-900'>{item.accuracy_percentage}%</h5>
                                <p className='text-gray-600'>{item.questions_completed} questions</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RecentPracticeSessions;