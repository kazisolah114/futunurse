import { Diagnosis } from "@/components/types/PatientCarePlan";
import mongoose, { Document, Types } from "mongoose";
import IUser from "../User/UserModel";

export interface ICarePlan extends Document {
    user: Types.ObjectId | typeof IUser,
    carePlans: Diagnosis[]
}

const PatientCarePlanSchema = new mongoose.Schema<ICarePlan>({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    carePlans: [
        {
            nandaLabel: {
                type: String,
                required: true,
            },
            statement: {
                type: String,
                required: true
            },
            definingCharacteristics: {
                type: [String],
                default: []
            },
            relatedFactors: {
                type: [String],
                default: []
            },
            priority: {
                type: String,
                required: true,
                enum: ["High", "Medium", "Low"]
            },
            goals: {
                shortTerm: { type: String, required: true },
                longTerm: { type: String, required: true }
            },
            interventions: [
                {
                    action: {
                        type: String,
                        required: true
                    },
                    rationale: {
                        type: String,
                        required: true
                    }
                }
            ],
            evaluationCriteria: {
                type: [String],
                default: []
            },
            patientEducation: {
                type: String,
                required: true
            },
            references: {
                type: [String],
                default: []
            }
        }
    ]
}, { timestamps: true })

export default mongoose.models.CarePlan || mongoose.model<ICarePlan>("CarePlan", PatientCarePlanSchema);