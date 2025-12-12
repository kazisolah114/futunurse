"use client";
import { FileQuestion } from 'lucide-react';
import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type difficultyType = {
    name: string;
    value: number;
}

const QuestionsDifficultyPie = () => {
    const data: difficultyType[] = [
        { name: "Easy", value: 32 },
        { name: "Moderate", value: 44 },
        { name: "Hard", value: 24 },
    ];
    const COLORS_PIE = ["#34d399", "#60a5fa", "#fb7185"];
    return (
        <div className="border border-gray-200/30 hover:border-gray-200/50 rounded-lg p-4 bg-white duration-200">
            <div className="mb-5">
                <h4 className='mb-1 flex items-center gap-2.5 text-sm font-semibold text-slate-900'><FileQuestion size={18} className='text-blue-700' />Question Difficulty</h4>
                <p className='text-sm text-gray-500'>Distribution of difficulties answered</p>
            </div>

            <div style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={4} label={({ name, value }) => `${name} ${(value * 100).toFixed(0)}%`}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS_PIE[index % COLORS_PIE.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default QuestionsDifficultyPie;