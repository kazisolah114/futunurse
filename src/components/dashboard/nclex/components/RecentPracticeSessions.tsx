import { IRecentSession } from '@/types/NCLEX';
import axios from 'axios';
import { Clock } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const RecentPracticeSessions = () => {
    const [recentPracticeSessions, setRecentPracticeSessions] = useState<IRecentSession[]>([]);
    useEffect(() => {
        const handleGetRecentSessions = async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/nclex/recent-sessions`);
            console.log("response:", res);
            if (res.status === 200) {
                setRecentPracticeSessions(res.data?.recentSessions);
            }
        }
        handleGetRecentSessions();
    }, [])
    return (
        <div className='bg-white border border-gray-200/30 rounded-lg p-5'>
            <h2 className='text-gray-900 font-medium text-lg flex items-center gap-2'><Clock size={20} className='text-blue-600/90' /> Recent Practice Sessions</h2>
            <ul className='space-y-2 mt-5'>
                {
                    recentPracticeSessions.map((item, index) => (
                        <li key={index} className='flex items-center justify-between bg-gray-400/5 rounded-lg p-3'>
                            <div>
                                <h5 className='font-semibold text-gray-800 capitalize'>{item.category}</h5>
                                <p className='text-gray-600'>{new Date(item.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                            </div>
                            <div className='text-right'>
                                <h5 className='font-semibold text-[17px] text-gray-900'>{item.score.toFixed(0)}%</h5>
                                <p className='text-gray-600'>{item.correctAnswers} out of {item.totalQuestions} questions</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RecentPracticeSessions;