import React from 'react';
import { INCLEXQuestion } from '@/types/NCLEX';

interface NewSessionHeaderProps {
    currentQuestion: INCLEXQuestion | null;
    currentQuestionIndex: number;
    length: number;
}

const NewSessionHeader = ({ currentQuestion, currentQuestionIndex, length }: NewSessionHeaderProps) => {
    return (
        <div className='flex sm:items-center justify-between max-sm:flex-col max-sm:gap-3'>
            <div>
                <h2 className='font-bold text-2xl mb-1'>NCLEX Practice Session</h2>
                <p className='text-sm text-gray-600'>Question {currentQuestionIndex + 1} of {length}</p>
            </div>
            <div className='flex items-center gap-2 max-sm:justify-between'>
                <p className='bg-gray-900 text-white text-sm rounded-full px-2 py-0.5'>{currentQuestion?.category}</p>
                <span className={`text-sm rounded-full px-2 py-0.5 border ${currentQuestion?.difficulty === 'easy' ? 'text-green-600 bg-green-600/10 border-green-500/30' : currentQuestion?.difficulty === 'medium' ? 'text-yellow-600 bg-yellow-600/10 border-yellow-500/30' : 'text-red-600 bg-red-600/10 border-red-500/30'}`}>{currentQuestion?.difficulty}</span>
            </div>
        </div>
    );
};

export default NewSessionHeader;