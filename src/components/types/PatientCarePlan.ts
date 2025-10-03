export type Interventions = {
    action: string
    rationale: string
}
export type Goals = {
    shortTerm: string
    longTerm: string
}
export type Diagnosis = {
    nandaLabel: string
    statement: string
    definingCharacteristics: string[]
    relatedFactors: string[]
    priority: "High" | "Medium" | "Low"
    goals: Goals
    interventions: Interventions[]
    evaluationCriteria: string[]
    patientEducation: string
    references: string[]
}