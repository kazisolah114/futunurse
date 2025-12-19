type categoryStats = {
    category: string;
    averageScore: number;
}

export function generateAISuggestions(categoryStats: categoryStats[]) {
  const suggestions = [];

  // 🔴 Weaknesses
  categoryStats
    .filter(c => c.averageScore < 70)
    .forEach(c => {
      suggestions.push({
        title: `Focus Area: ${c.category}`,
        score: Math.round(c.averageScore),
        description: `Your average score in ${c.category} is below 70%. Prioritize reviewing core concepts and practice more scenario-based questions.`,
        type: "weakness"
      });
    });

  // 🟢 Strengths
  categoryStats
    .filter(c => c.averageScore >= 80)
    .forEach(c => {
      suggestions.push({
        title: `Strength: ${c.category}`,
        score: Math.round(c.averageScore),
        description: `You consistently perform well in ${c.category}. Use this as a confidence booster and maintain it with light revision.`,
        type: "strength"
      });
    });

  // 🧠 Pattern insight (example)
  if (categoryStats.every(c => c.averageScore < 75)) {
    suggestions.push({
      title: "Study Pattern",
      description: "Overall performance suggests inconsistent study habits. Try shorter but more frequent practice sessions.",
      type: "pattern"
    });
  }

  return suggestions;
}