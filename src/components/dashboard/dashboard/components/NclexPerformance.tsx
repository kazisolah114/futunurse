"use client";
import { Activity, ChartArea, ChartAreaIcon } from 'lucide-react';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const NclexPerformance = () => {
    const data = [
        { date: "Jan 1", score: 65, questions: 20 },
        { date: "Jan 8", score: 68, questions: 25 },
        { date: "Jan 15", score: 58, questions: 30 },
        { date: "Jan 22", score: 70, questions: 28 },
        { date: "Jan 29", score: 75, questions: 32 },
        { date: "Feb 5", score: 70, questions: 35 },
        { date: "Feb 12", score: 88, questions: 30 },
    ]
    return (
        <div className='border border-gray-200/30 hover:border-gray-200/50 rounded-lg p-4 bg-white/30 backdrop-blur-2xl duration-200'>
            <h4 className='mb-1 flex items-center gap-2.5 font-bold text-slate-800'><ChartAreaIcon size={18} className='text-blue-700' /> Performance Trend</h4>
            <p className='text-sm text-gray-500 mb-5'>Your NCLEX score progression over time</p>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NclexPerformance;