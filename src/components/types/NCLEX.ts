export interface ISessionResult {
    totalQuestions: number;
    correctAnswers: number;
    score: number;
    date: Date;
    performanceAnalysis: string;
    studyRecommendations: string[];
}