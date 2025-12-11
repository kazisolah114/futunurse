import { Progress } from '@/components/ui/progress';
import axios from 'axios';
import { BarChart3 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type PerformanceByCategory = {
    category: string;
    totalQuestions: number;
    accuracy: number;
}

const PerformanceByCategory = () => {
    const [performance_categorized, set_performance_categorized] = useState<PerformanceByCategory[]>([]);
    useEffect(() => {
        const handleGetCategorizedPerformance = async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/nclex/category-performance`);
            if (res.status === 200) {
                set_performance_categorized(res.data?.performance_categorized);
            }
        }
        handleGetCategorizedPerformance();
    }, [])
    return (
        <div className='bg-white border border-gray-200/30 rounded-lg p-5'>
            <h2 className='text-gray-900 font-medium text-lg flex items-center gap-2'><BarChart3 size={20} className='text-green-600/90' /> Performance by Category</h2>
            <ul className='space-y-3 mt-5'>
                {
                    performance_categorized.map((item, index) => (
                        <li key={index} className='space-y-2.5'>
                            <div className='flex items-end justify-between'>
                                <div>
                                    <h5 className='font-medium text-gray-900 capitalize'>{item.category}</h5>
                                    <p className='text-gray-600'>{item.totalQuestions} questions completed</p>
                                </div>
                                <p className={`text-sm w-12 text-center rounded-full ${item.accuracy > 80 ? 'bg-green-500/20 text-green-700' : 'bg-gray-100 text-gray-900'}`}>{item.accuracy}%</p>
                            </div>
                            <Progress value={item.accuracy} className='' />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PerformanceByCategory;