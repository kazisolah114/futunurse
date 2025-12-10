import React from "react";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, LucideIcon, Brain, CalendarClock } from "lucide-react";

type Insight = {
    title: string;
    value: string | number;
    pass_probability?: string;
    this_week?: number;
    timeline?: string;
    color: "blue" | "purple" | "green";
    icon: LucideIcon;
};

const QuickInsights = () => {
    const insights: Insight[] = [
        {
            title: "Overall Score",
            value: "78",
            pass_probability: "High",
            color: "blue",
            icon: Brain,
        },
        {
            title: "Questions Completed",
            value: 1293,
            this_week: 102,
            color: "purple",
            icon: CheckCircle,
        },
        {
            title: "Avg. Response Time",
            value: "3.5s",
            timeline: "Last 30 days",
            color: "green",
            icon: CalendarClock,
        },
    ];

    const colorMap: Record<
        Insight["color"],
        { bg: string; accent: string }
    > = {
        blue: {
            bg: "bg-blue-600",
            accent: "bg-blue-500",
        },
        purple: {
            bg: "bg-purple-600",
            accent: "bg-purple-500",
        },
        green: {
            bg: "bg-green-600",
            accent: "bg-green-500",
        },
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => {
                const Icon = insight.icon;
                const colors = colorMap[insight.color];

                return (
                    <div
                        key={index}
                        className={`${colors.bg} text-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200`}
                    >

                        <div className="flex items-center gap-4">
                            <div
                                className={`${colors.accent} rounded-full p-3 flex items-center justify-center`}
                            >
                                <Icon className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-base opacity-90">
                                    {insight.title}
                                </h2>
                                <h1 className="font-bold text-3xl">{insight.value}{index === 0 && '%'}</h1>
                            </div>
                        </div>

                        <div className="mt-6 space-y-2 text-sm opacity-90">
                            {insight.pass_probability && (
                                <div>
                                    <Progress
                                        value={Number(insight.value)}
                                        className="bg-white/30"
                                    />
                                    <div className="flex justify-between items-center mt-3">
                                        <p>NCLEX pass probability</p>
                                        <p className="font-medium">{insight.pass_probability}</p>
                                    </div>
                                </div>
                            )}

                            {insight.this_week && (
                                <div className="flex justify-between items-center">
                                    <p>This week</p>
                                    <p className="font-medium">{insight.this_week} questions</p>
                                </div>
                            )}

                            {insight.timeline && (
                                <div className="flex justify-between items-center">
                                    <p>{insight.timeline}</p>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default QuickInsights;
