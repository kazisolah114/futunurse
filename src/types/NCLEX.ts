import { Document, Schema } from "mongoose"

export interface INCLEXQuestion {
    id: string
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
    subcategory: string
    difficulty: "easy" | "medium" | "hard"
    rationale: string
    tags: string[]
}

export type NCLEXCategory = {
    name: string;
    subcategories: string[]
}

export interface ISessionResult {
    category: string | null;
    totalQuestions: number;
    correctAnswers: number;
    score: number;
    date: Date;
    performanceAnalysis: string;
    studyRecommendations: string[];
}

export interface IRecentSession extends Document {
    user: Schema.Types.ObjectId;
    category: string;
    totalQuestions: number;
    correctAnswers: number;
    score: number;
    date: Date;
    performanceAnalysis?: string;
    studyRecommendations?: string[];
}