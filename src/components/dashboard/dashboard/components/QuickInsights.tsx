import { Book, Clock, LucideIcon, Target } from 'lucide-react';
import React from 'react';

type Insight = {
    title: string;
    value: string | number;
    icon: LucideIcon;
    nclex_score?: number;
    care_plans?: number;
    avg_res_time?: string;
}

const QuickInsights = () => {
    const insights: Insight[] = [
        {
            title: 'NCLEX Score',
            value: '78%',
            nclex_score: 12,
            icon: Target,
        },
        {
            title: 'Care Plans',
            value: 12,
            care_plans: 14,
            icon: Book,
        },
        {
            title: 'Avg Response Time',
            value: '2.3s',
            avg_res_time: 'based on observation',
            icon: Clock,
        }
    ]
    return (
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-2'>
            {
                insights.map((insight, index) => {
                    const Icon = insight.icon;
                    return (
                        <div key={index} className="flex items-start justify-between rounded-lg p-4 border border-gray-200/30 hover:border-gray-200/50 bg-white/70 backdrop-blur-xl duration-200">
                            <div>
                                <p className='text-slate-500 uppercase text-sm'>{insight.title}</p>
                                <h2 className='font-bold text-3xl max-sm:text-2xl text-gray-900 mt-2 mb-2'>{insight.value}</h2>
                                {
                                    insight.nclex_score && (
                                        <span className='text-[13px] text-teal-400'>+{insight.nclex_score}% this week</span>
                                    )
                                }
                                {
                                    insight.care_plans && (
                                        <span className='text-[13px] text-teal-400'>{insight.care_plans} plans this week</span>
                                    )
                                }
                                {
                                    insight.avg_res_time && (
                                        <span className='text-[13px] text-teal-400'>{insight.avg_res_time}</span>
                                    )
                                }
                            </div>
                            <div className='bg-teal-600/10 rounded-lg p-3'>
                                <Icon className='text-teal-600 w-5 h-5' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default QuickInsights;