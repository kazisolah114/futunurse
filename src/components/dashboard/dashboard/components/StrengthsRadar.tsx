"use client";
import { Stethoscope } from 'lucide-react';
import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

// type StrengthItem = { category: string; averageScore: number };

interface StrenthProps {
    strength: {
        category: string;
        averageScore: number;
    }
}

const StrengthsRadar = ({ strength }: StrenthProps) => {
    // const data: StrengthItem[] = [
    //     { category: "Pharmacology", averageScore: 78 },
    //     { category: "Maternal", averageScore: 62 },
    //     { category: "Psychosocial", averageScore: 84 },
    //     { category: "Management of Care", averageScore: 55 },
    //     { category: "Safety & Infection", averageScore: 70 },
    //     { category: "Health Promotion", averageScore: 68 },
    // ];
    const data = Array.isArray(strength) ? strength : [strength];

    const COLORS = {
        primary: "#0ea5a4",
        accent: "#7c3aed",
        danger: "#ef4444",
        success: "#10b981",
        muted: "#94a3b8",
    };
    return (
        <div className="border border-gray-200/30 hover:border-gray-200/50 rounded-lg p-4 bg-white duration-200">
            <div className="">
                <h4 className='mb-1 flex items-center gap-2.5 text-sm font-semibold text-slate-900'><Stethoscope size={18} className='text-blue-700' /> Strengths & Weaknesses</h4>
                <p className='text-sm text-gray-500'>Performance by nursing domain</p>
            </div>

            <div style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius={80} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis
                            dataKey="category"
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) =>
                                value
                                    .split(" ")
                                    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(" ")
                            }
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tickCount={5} />
                        <Radar name="averageScore" dataKey="averageScore" stroke={COLORS.accent} fill={COLORS.accent} fillOpacity={0.15} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StrengthsRadar;