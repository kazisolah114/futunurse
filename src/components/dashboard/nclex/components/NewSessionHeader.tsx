import React from 'react';
import { INCLEXQuestion } from '@/types/NCLEX';

interface NewSessionHeaderProps {
    currentQuestion: INCLEXQuestion | null;
    currentQuestionIndex: number;
    length: number;
}

const NewSessionHeader = ({ currentQuestion, currentQuestionIndex, length }: NewSessionHeaderProps) => {
    return (
        <div className="flex sm:items-center justify-between max-sm:flex-col max-sm:gap-4">
            <div>
                <h2 className="font-bold text-2xl tracking-tight text-gray-900">
                    NCLEX Practice Session
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Question {currentQuestionIndex + 1} of {length}
                </p>
            </div>

            <div className="flex items-center gap-2 max-sm:justify-between">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-900 text-white">
                    {currentQuestion?.category}
                </span>

                <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${currentQuestion?.difficulty === 'easy'
                            ? 'text-green-700 bg-green-500/10 border-green-500/30'
                            : currentQuestion?.difficulty === 'medium'
                                ? 'text-yellow-700 bg-yellow-500/10 border-yellow-500/30'
                                : 'text-red-700 bg-red-500/10 border-red-500/30'
                        }`}
                >
                    {currentQuestion?.difficulty?.toUpperCase()}
                </span>
            </div>
        </div>
    );
};

export default NewSessionHeader;