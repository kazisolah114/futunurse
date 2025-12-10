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

export interface ISessionResult {
    totalQuestions: number;
    correctAnswers: number;
    score: number;
    date: Date;
    performanceAnalysis: string;
    studyRecommendations: string[];
}