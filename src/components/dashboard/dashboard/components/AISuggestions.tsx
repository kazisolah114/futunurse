"use client";
import React, { useState } from "react";
import { Brain, ChevronDown, ChevronRight } from "lucide-react";

type suggestionType = {
    title: string;
    score?: number;
    description: string;
}

const AISuggestions = () => {
    const suggestions: suggestionType[] = [
        {
            title: "Focus Area: Psychosocial Integrity",
            score: 65,
            description: "Your score is 65%. Spend more time practicing mental health and communication questions."
        },
        {
            title: "Strength: Health Promotion",
            score: 82,
            description: "Excellent work! Use this as a confidence booster."
        },
        {
            title: "Study Pattern",
            description: "Increase daily practice time to 45–60 minutes for better retention."
        },
        {
            title: "Question Difficulty",
            description: "Try more hard-level questions to boost critical-thinking skills."
        }
    ];
    const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({ 0: true });

    const toggleSection = (key: number) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const getHighlightClass = (score: number) => {
        if (score >= 80) return "bg-green-100/50 border-green-400/20";
        if (score >= 70) return "bg-yellow-100/50 border-yellow-400/20";
        return "bg-red-100/50 border-red-400/20";
    };

    return (
        <div className="border border-gray-200/30 hover:border-gray-200/50 rounded-lg p-4 bg-white duration-200">
            <h4 className='mb-1 flex items-center gap-2.5 text-sm font-semibold text-slate-900'><Brain size={18} className='text-blue-700' /> Personalized Suggestions</h4>
            <p className='text-sm text-gray-500 mb-5'>AI-powered suggestions to improve your performance</p>
            <div className="space-y-2">
                {suggestions.map((item, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg  transition ${item.score ? getHighlightClass(item.score) : "bg-gray-50/30"}`}
                    >

                        <div
                            className="px-3 py-2.5 flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(index)}
                        >
                            <h2 className="font-medium text-sm text-gray-800">{item.title}</h2>
                            {openSections[index] ? (
                                <ChevronDown size={16} />
                            ) : (
                                <ChevronRight size={16} />
                            )}
                        </div>

                        {openSections[index] && (
                            <p className="px-3 pb-2.5 pt-0 text-gray-700 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AISuggestions;
