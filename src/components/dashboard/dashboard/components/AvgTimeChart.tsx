"use client";
import React from 'react';
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Clock } from 'lucide-react';

const AvgTimeChart = ({ avg = { correct: 28, incorrect: 43 } }: { avg?: { correct: number; incorrect: number } }) => {
    const data = [
        { label: "Correct", seconds: Math.round(avg.correct) },
        { label: "Incorrect", seconds: Math.round(avg.incorrect) },
    ];
    const COLORS = {
        primary: "#0ea5a4",
        accent: "#7c3aed",
        danger: "#ef4444",
        success: "#10b981",
        muted: "#94a3b8",
    };
    return (
        <div className="border border-gray-200/30 hover:border-gray-200/50 rounded-lg p-4 bg-white duration-200">
            <div className="mb-5">
                <h4 className='mb-1 flex items-center gap-2.5 text-sm font-semibold text-slate-900'><Clock size={18} className='text-blue-700' /> Avg. Correct vs Incorrect Time</h4>
                <p className='text-sm text-gray-500'>Measure your decision speed</p>
            </div>

            <div style={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="label" tick={{ fontSize: 13 }} />
                        <YAxis tick={{ fontSize: 12 }} unit="s" />
                        <Tooltip formatter={(value: number) => `${value} sec`} />
                        <Bar dataKey="seconds" fill={COLORS.primary} radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-2 text-xs text-slate-500">
                Tip: faster correct answers often indicate mastery — slow and incorrect answers point to concepts to review.
            </div>
        </div>
    );
};

export default AvgTimeChart;