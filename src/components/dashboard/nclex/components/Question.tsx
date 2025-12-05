"use client";
import { Button } from '@/components/ui/button';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NCLEXQuestion } from '../nclex-questions';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface QuestionProps {
    currentQuestion: NCLEXQuestion | null;
    onNextQuestion: () => void;
    currentQuestionIndex: number;
    sessionScores: number;
    setSessionScores: Dispatch<SetStateAction<number>>;
    questionsLength: number;
}

const Question = ({ currentQuestion, onNextQuestion, currentQuestionIndex, sessionScores, setSessionScores, questionsLength }: QuestionProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [submittedAnswer, setSubmittedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setSubmittedAnswer(null);
        setShowResult(false);
    }, [currentQuestionIndex])

    const handleSubmitAnswer = () => {
        if (selectedAnswer !== null) {
            setSubmittedAnswer(selectedAnswer);
            setShowResult(true);
        }
        if (selectedAnswer === currentQuestion?.correctAnswer) {
            setSessionScores((prev) => prev + 1);
        }
    }
    if (!currentQuestion) return <div>Thinking...</div>
    return (
        <div className='border border-gray-900/10 bg-white/50 backdrop-blur-lg p-5 rounded-md'>
            <h6 className='font-medium text-lg text-gray-900'>{currentQuestion.question}</h6>
            <ul className='space-y-3 mt-6'>
                {
                    currentQuestion.options.map((option, index) => {
                        const isCorrect = index === currentQuestion.correctAnswer;
                        const isSelected = index === submittedAnswer;

                        let className =
                            "flex items-center gap-3 border px-3 py-2 rounded-md hover:bg-gray-100/50 duration-150 cursor-pointer";

                        if (showResult) {
                            if (submittedAnswer === currentQuestion.correctAnswer) {
                                if (isCorrect)
                                    className += " bg-green-600/20 text-gray-900 hover:bg-green-600/20";
                            } else {
                                if (isSelected)
                                    className += " bg-red-600/20 text-gray-900 cursor-not-allowed";
                                if (isCorrect)
                                    className += " bg-green-600/20 text-gray-900 cursor-not-allowed";
                            }
                        } else {
                            if (selectedAnswer === index)
                                className += " bg-teal-600 text-white hover:bg-teal-600/90";
                        }

                        return (
                            <li
                                key={index}
                                onClick={() => !showResult && setSelectedAnswer(index)} // disable clicks after submit
                                className={className}
                            >
                                {/* Correct and selected */}
                                {showResult &&
                                    isSelected &&
                                    submittedAnswer === currentQuestion.correctAnswer && (
                                        <CheckCircle2 size={18} className="text-green-500" />
                                    )}

                                {/* Selected wrong answer */}
                                {showResult &&
                                    isSelected &&
                                    submittedAnswer !== currentQuestion.correctAnswer && (
                                        <XCircle size={18} className="text-red-500" />
                                    )}

                                {/* Show correct icon when user chose wrong answer */}
                                {showResult &&
                                    submittedAnswer !== currentQuestion.correctAnswer &&
                                    isCorrect && <CheckCircle2 size={18} className="text-green-500" />}

                                <span>
                                    {index === 0
                                        ? "A."
                                        : index === 1
                                            ? "B."
                                            : index === 2
                                                ? "C."
                                                : "D."}
                                </span>{" "}
                                {option}
                            </li>
                        );
                    })
                }
            </ul>
            {showResult &&
                <div className={`${submittedAnswer === currentQuestion.correctAnswer ? 'border-green-500/20 bg-green-500/10' : 'border-red-500/20 bg-red-500/10'} border rounded-md p-4 mt-7 space-y-2`}>
                    {submittedAnswer === currentQuestion.correctAnswer ?
                        <h5 className='font-semibold flex items-center gap-2 text-green-500'>
                            <CheckCircle2 size={18} className='text-green-500' /> Correct
                        </h5>
                        :
                        <h5 className='font-semibold flex items-center gap-2 text-red-500'>
                            <XCircle size={18} className='text-red-500' /> Incorrect
                        </h5>
                    }
                    <span className='text-xs font-medium text-gray-800 uppercase'>Reason</span>
                    <p className='text-gray-900 text-sm'>{currentQuestion.explanation}</p>
                    <span className='text-xs font-medium text-gray-800 uppercase'>Rationale</span>
                    <p className='text-gray-900 text-sm'>{currentQuestion.rationale}</p>
                </div>
            }
            <div className='mt-7 flex justify-between sm:items-center max-sm:flex-col max-sm:gap-3 max-sm:space-y-3'>
                <p className='text-gray-700'>Score: {sessionScores}/{currentQuestionIndex}</p>
                {!showResult ?
                    <Button size={'lg'} className={`rounded-full ${selectedAnswer === null ? 'cursor-not-allowed opacity-50' : ''}`} onClick={handleSubmitAnswer}>Submit Answer</Button>
                    :
                    <Button size={'lg'} onClick={onNextQuestion}>{currentQuestionIndex === questionsLength - 1 ? 'Finish Session' : 'Next Question'} <ArrowRight /></Button>
                }
            </div>
        </div>
    );
};

export default Question;