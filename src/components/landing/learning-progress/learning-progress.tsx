import React from 'react';
import { AlertTriangle, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

const LearningProgress = () => {
    return (
        <section
            id="confidence"
            className="py-28 bg-gradient-to-b from-white via-teal-50/40 to-white relative overflow-hidden"
        >
            {/* Soft background glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>

            <div className="relative lg:px-32 max-sm:p-5 grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">

                {/* LEFT — Narrative */}
                <div>
                    <p className="mb-5 font-semibold text-lg text-teal-600 uppercase flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-teal-600 animate-pulse-dot"></span>
                        Learning Progress
                    </p>

                    <h2 className="font-bold text-3xl text-gray-800 mb-6 leading-tight">
                        From Weak Areas <br className="max-sm:hidden" /> to Clinical Confidence
                    </h2>

                    <p className="text-base text-gray-700 mb-10 max-w-lg">
                        Futunurse highlights your weakest clinical areas early and guides you
                        through steady improvement—so confidence is built through understanding,
                        not guesswork.
                    </p>

                    <div className="space-y-7">
                        <div className="flex gap-4 group">
                            <AlertTriangle className="text-amber-500 mt-1 group-hover:scale-110 transition" size={22} />
                            <p className="text-sm text-gray-700">
                                Detect unsafe decisions and priority gaps before they become
                                exam-day mistakes.
                            </p>
                        </div>

                        <div className="flex gap-4 group">
                            <ArrowRight className="text-teal-600 mt-1 group-hover:translate-x-1 transition" size={22} />
                            <p className="text-sm text-gray-700">
                                See patterns behind errors instead of repeating the same wrong logic.
                            </p>
                        </div>

                        <div className="flex gap-4 group">
                            <ShieldCheck className="text-emerald-600 mt-1 group-hover:scale-110 transition" size={22} />
                            <p className="text-sm text-gray-700">
                                Strengthen judgment until safe answers become instinctive.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Interactive Progress Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-md border border-gray-100 group">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm font-medium text-gray-700">
                            Your Learning Journey
                        </p>
                        <TrendingUp className="text-teal-600 group-hover:scale-110 transition" size={18} />
                    </div>

                    <div className="space-y-5">

                        {/* Needs Focus */}
                        <div className="relative overflow-hidden rounded-2xl bg-rose-50 px-5 py-4 hover:shadow-sm transition">
                            <div className="absolute left-0 top-0 h-full w-1 bg-rose-400"></div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-700">
                                    Cardiac Prioritization
                                </p>
                                <span className="text-xs font-semibold text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                                    Needs Focus
                                </span>
                            </div>
                        </div>

                        {/* Improving */}
                        <div className="relative overflow-hidden rounded-2xl bg-amber-50 px-5 py-4 hover:shadow-sm transition">
                            <div className="absolute left-0 top-0 h-full w-1 bg-amber-400"></div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-700">
                                    Medication Safety
                                </p>
                                <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                                    Improving
                                </span>
                            </div>
                        </div>

                        {/* Strong */}
                        <div className="relative overflow-hidden rounded-2xl bg-emerald-50 px-5 py-4 hover:shadow-sm transition">
                            <div className="absolute left-0 top-0 h-full w-1 bg-emerald-400"></div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-700">
                                    Infection Control
                                </p>
                                <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                                    Strong
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                        <ShieldCheck className="text-emerald-600" size={20} />
                        <p className="text-sm text-gray-700">
                            Progress is monitored continuously — never judged.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LearningProgress;
