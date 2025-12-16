import { Button } from '@/components/ui/button';
import React from 'react';
import {
    Activity,
    ShieldCheck,
    ListChecks,
    TrendingUp
} from 'lucide-react'

const ProgressTracking = () => {
    return (
        <section id="clinical-growth" className="py-28 bg-gray-50">
            <div className="lg:px-32 max-sm:p-5">

                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <p className="mb-5 font-semibold text-lg text-teal-600 uppercase flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-teal-600 animate-pulse-dot"></span>
                        Progress Dashboard
                    </p>

                    <h2 className="font-bold text-3xl text-gray-800 mb-4">
                        Track Your Clinical Growth
                    </h2>

                    <p className="text-base text-gray-700">
                        Visualize how your nursing judgment evolves over time.
                        Futunurse turns practice into clear, actionable insight.
                    </p>
                </div>

                {/* Interactive Cards */}
                <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">

                    {/* Card */}
                    <div className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-teal-100 text-teal-600 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition">
                                <Activity size={20} />
                            </div>
                            <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                                Improving
                            </span>
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-2">
                            Clinical Judgment
                        </h3>
                        <p className="text-sm text-gray-600">
                            Track how accurately you assess patient situations
                            and select appropriate nursing actions.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                Monitored
                            </span>
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-2">
                            Patient Safety
                        </h3>
                        <p className="text-sm text-gray-600">
                            Identify unsafe patterns and strengthen safety-first
                            decision-making across scenarios.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition">
                                <ListChecks size={20} />
                            </div>
                            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                                Strengthening
                            </span>
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-2">
                            Priority & Delegation
                        </h3>
                        <p className="text-sm text-gray-600">
                            See how well you identify urgent needs and delegate
                            tasks appropriately.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-orange-100 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition">
                                <TrendingUp size={20} />
                            </div>
                            <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                                Trending Up
                            </span>
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-2">
                            Overall Consistency
                        </h3>
                        <p className="text-sm text-gray-600">
                            Monitor how consistently you apply sound clinical
                            reasoning across topics and systems.
                        </p>
                    </div>

                </div>

                {/* Interactive CTA Panel */}
                <div className="mt-20 bg-gradient-to-r from-blue-500 to-teal-600 max-md:from-teal-600 max-md:to-blue-500 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <p className="text-2xl font-bold max-md:text-xl max-md:font-semibold max-w-xl max-md:text-center">
                        Every session updates your clinical profile.
                        Futunurse helps you clearly see what’s improving—and what to focus on next.
                    </p>

                    <Button
                        size="lg"
                        className="rounded-full bg-white text-teal-600 hover:bg-white/90 max-md:w-full"
                    >
                        Open My Dashboard
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default ProgressTracking;