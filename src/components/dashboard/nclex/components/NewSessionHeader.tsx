import React from 'react';
import { NCLEXQuestion } from '../nclex-questions';

interface NewSessionHeaderProps {
    currentQuestion: NCLEXQuestion | null;
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
            <div className='flex items-center gap-2'>
                <p className='bg-teal-600 text-white text-sm rounded-full px-2 py-0.5'>{currentQuestion?.category}</p>
                <span className={`text-sm rounded-full px-2 py-0.5 border ${currentQuestion?.difficulty === 'easy' ? 'text-blue-600 bg-blue-600/20 border-blue-500/50' : currentQuestion?.difficulty === 'medium' ? 'text-yellow-600 bg-yellow-600/20 border-yellow-500/50' : 'text-red-600 bg-red-600/20 border-red-500/50'}`}>{currentQuestion?.difficulty}</span>
            </div>
        </div>
    );
};

export default NewSessionHeader;