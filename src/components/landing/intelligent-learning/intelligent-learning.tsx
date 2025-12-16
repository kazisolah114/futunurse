import React from 'react';
import {
    Brain,
    Sparkles,
    CheckCircle,
    Eye,
    ArrowRight
} from 'lucide-react';

const IntelligentLearning = () => {
    return (
        <section id="ai-learning" className="py-28">
            <div className="lg:px-32 max-sm:p-5">

                {/* Header */}
                <div className="max-w-2xl mb-20">
                    <p className="mb-5 font-semibold text-lg text-teal-600 uppercase flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-teal-600 animate-pulse-dot"></span>
                        Intelligent Assistance
                    </p>

                    <h2 className="font-bold text-3xl text-gray-800 mb-4">
                        How AI Supports Learning
                    </h2>

                    <p className="text-base text-gray-700">
                        Futunurse AI works quietly in the background—analyzing your responses,
                        identifying clinical gaps, and guiding your next steps with purpose and safety.
                    </p>
                </div>

                {/* AI Flow */}
                <div className="relative">

                    {/* Flow Line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200"></div>

                    <div className="grid grid-cols-4 gap-8 max-md:grid-cols-1">

                        {/* Step 1 */}
                        <div className="relative bg-white rounded-3xl p-6 shadow-sm">
                            <div className="mb-5 w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                                <Brain size={22} />
                            </div>

                            <h3 className="font-semibold text-gray-800 mb-2">
                                You Practice
                            </h3>

                            <p className="text-sm text-gray-600">
                                Answer NCLEX-style questions or work through clinical scenarios
                                just like you would during exams or simulations.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative bg-white rounded-3xl p-6 shadow-sm">
                            <div className="mb-5 w-12 h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center">
                                <ArrowRight size={22} />
                            </div>

                            <h3 className="font-semibold text-gray-800 mb-2">
                                AI Analyzes Patterns
                            </h3>

                            <p className="text-sm text-gray-600">
                                The system evaluates your reasoning—not just correctness—
                                looking for safety risks, priority errors, and thinking gaps.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative bg-white rounded-3xl p-6 shadow-sm">
                            <div className="mb-5 w-12 h-12 rounded-xl bg-teal-400 text-white flex items-center justify-center">
                                <ArrowRight size={22} />
                            </div>

                            <h3 className="font-semibold text-gray-800 mb-2">
                                Guided Feedback
                            </h3>

                            <p className="text-sm text-gray-600">
                                Futunurse explains why an answer is safe, unsafe,
                                or incomplete—mirroring how instructors think.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative bg-white rounded-3xl p-6 shadow-sm">
                            <div className="mb-5 w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                                <CheckCircle size={22} />
                            </div>

                            <h3 className="font-semibold text-gray-800 mb-2">
                                Focused Improvement
                            </h3>

                            <p className="text-sm text-gray-600">
                                Your next sessions target weak areas automatically,
                                helping you improve faster without guessing what to study.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Trust Line */}
                <div className="mt-16 max-w-3xl">
                    <p className="text-sm text-gray-600">
                        Futunurse AI is an educational support system. It reinforces clinical reasoning
                        and exam readiness but never replaces instructor guidance or professional judgment.
                    </p>
                </div>

            </div>
        </section>

    );
};

export default IntelligentLearning;