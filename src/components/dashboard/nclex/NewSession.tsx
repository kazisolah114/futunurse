"use client";
import React, { useEffect, useState } from 'react';
import NewSessionHeader from './components/NewSessionHeader';
import SessionProgress from './components/SessionProgress';
import Question from './components/Question';
import { NCLEXQuestion, nclexQuestions } from './nclex-questions';
import { Skeleton } from '@/components/ui/skeleton';
import { ISessionResult } from '@/components/types/NCLEX';
import SessionResultModal from './components/SessionResultModal';

export const NewSession = () => {

    const [sessionResult, setSessionResult] = useState<ISessionResult | null>(null);
    const [sessionScores, setSessionScores] = useState<number>(0);
    const [sessionQuestions, setSessionQuestions] = useState<NCLEXQuestion[]>([]);

    useEffect(() => {
        const questions = [...nclexQuestions].sort(() => Math.random() - 0.5);
        setSessionQuestions(questions.slice(0, 10));
    }, []);

    console.log("Session Questions:", sessionQuestions)

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<NCLEXQuestion | null>(null);

    useEffect(() => {
        if (sessionQuestions && sessionQuestions.length > 0) {
            setCurrentQuestion(sessionQuestions[currentQuestionIndex])
        }
    }, [sessionQuestions, currentQuestionIndex])

    console.log("Current Questions:", currentQuestion)

    const handleNextQuestion = () => {
        if (currentQuestionIndex < sessionQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setSessionResult({
                totalQuestions: sessionQuestions.length,
                correctAnswers: sessionScores,
                score: Math.round((sessionScores / sessionQuestions.length) * 100),
                date: new Date(),
                performanceAnalysis: 'N/A',
                studyRecommendations: []
            })
        }
    }

    const progress = Math.round((currentQuestionIndex / sessionQuestions.length) * 100);

    const resetSession = () => {
        setSessionResult(null);
        setSessionScores(0);
        setSessionQuestions(
            [...nclexQuestions].sort(() => Math.random() - 0.5).slice(0, 5)
        );
        setCurrentQuestion(null);
        setCurrentQuestionIndex(0);
    }

    if (!currentQuestion) return <div className='space-y-7 max-w-4xl mx-auto'>
        <Skeleton className='h-10 w-full bg-slate-200' />
        <Skeleton className='h-5 w-full bg-slate-200' />
        <Skeleton className='h-96 w-full rounded-md bg-slate-200' />
    </div>
    return (
        <div className='space-y-7 max-w-4xl mx-auto'>
            <NewSessionHeader currentQuestion={currentQuestion} currentQuestionIndex={currentQuestionIndex} length={sessionQuestions.length} />
            <SessionProgress progress={progress} />
            <Question currentQuestion={currentQuestion} onNextQuestion={handleNextQuestion} currentQuestionIndex={currentQuestionIndex} sessionScores={sessionScores} setSessionScores={setSessionScores} questionsLength={sessionQuestions.length} />

            {sessionResult && <SessionResultModal result={sessionResult} onSetSessionResult={setSessionResult} onResetSession={resetSession} />}
        </div>
    );
};