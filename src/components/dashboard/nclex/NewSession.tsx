"use client";
import React, { useEffect, useState } from 'react';
import NewSessionHeader from './components/NewSessionHeader';
import SessionProgress from './components/SessionProgress';
import Question from './components/Question';
import { NCLEXQuestion, nclexQuestions } from './nclex-questions';

export const NewSession = () => {
    const [sessionQuestions, setSessionQuestions] = useState<NCLEXQuestion[]>([]);
    useEffect(() => {
        const questions = [...nclexQuestions].sort(() => Math.random() - 0.5);
        setSessionQuestions(questions.slice(0, 5));
    }, []);
    console.log(sessionQuestions)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<NCLEXQuestion | null>(null);
    useEffect(() => {
        if (sessionQuestions && sessionQuestions.length > 0) {
            setCurrentQuestion(sessionQuestions[currentQuestionIndex])
        }
    }, [sessionQuestions, currentQuestionIndex])
    console.log(currentQuestion)
    const handleNextQuestion = () => {
        if (currentQuestionIndex < sessionQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            alert("This session has been completed!")
        }
    }
    return (
        <div className='space-y-7 max-w-4xl mx-auto'>
            <NewSessionHeader currentQuestion={currentQuestion} currentQuestionIndex={currentQuestionIndex} length={sessionQuestions.length} />
            <SessionProgress />
            <Question currentQuestion={currentQuestion} onNextQuestion={handleNextQuestion} currentQuestionIndex={currentQuestionIndex} />
        </div>
    );
};