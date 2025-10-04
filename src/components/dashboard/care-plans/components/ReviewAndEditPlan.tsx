"use client"
import { Diagnosis, IPatient } from "@/components/types/PatientCarePlan"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { FileText, AlertCircle, TrendingUp, Target, Stethoscope, CheckCircle2, GraduationCap, BookOpen, Clock } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { toast } from "react-toastify"
import Diagnoses from "./Diagnoses"

interface ReviewAndEditPlanProps {
    patientData: IPatient;
    setPatientData: Dispatch<SetStateAction<IPatient>>;
    diagnoses: Diagnosis[];
    setCurrentStage: Dispatch<SetStateAction<number>>
}

const ReviewAndEditPlan = ({ patientData, setPatientData, diagnoses, setCurrentStage }: ReviewAndEditPlanProps) => {

    const [saveLoading, setSaveLoading] = useState<boolean>(false);
    const handleSavePlan = async () => {
        try {
            setSaveLoading(true);
            const response = await axios.post("http://localhost:3000/api/care-plan/save-care-plan", {
                body: { diagnoses, patientData }
            });
            setSaveLoading(false);
            console.log(response);
            if (response.status === 201) {
                toast.success("Care plan saved!");
                setCurrentStage(1);
                setPatientData({
                    // Patient Demographics
                    name: null,
                    age: null,
                    gender: null,
                    specialty: null,
                    mrn: null,
                    primaryDiagnoses: null,
                    secondaryDiagnoses: null,
                    // Patient Vitals & Assesment
                    vitals: {
                        temperature: null,
                        bloodPressure: null,
                        heartRate: null,
                        respiratoryRate: null,
                        oxygenSaturation: null,
                        painLevel: null
                    },
                    labResults: null,
                    physicalFindings: null,
                    currentMedications: null,
                    allergies: null
                })
            }
        } catch (error) {
            console.log(error)
            setSaveLoading(false);
            toast.error("Failed to save care plan!");
        }
    }

    return (
        <div>
            <div className="mb-8 pb-6 border-b-2 border-slate-900">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">NURSING CARE PLAN</h1>
                        <p className="text-sm text-slate-600 font-medium">
                            Evidence-Based Clinical Documentation | NANDA-I Approved Diagnoses
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-slate-600">Date: {new Date().toLocaleDateString()}</div>
                        <div className="text-sm text-slate-600">Total Diagnoses: {diagnoses.length}</div>
                    </div>
                </div>
            </div>

            <Diagnoses diagnoses={diagnoses} />

            <div className="mt-10 pt-6 border-t-2 border-slate-900">
                <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>Prepared by FutuNurse AI</span>
                    </div>
                    <div>Student Review & Modifications Required</div>
                </div>
            </div>

            <div className="mt-5 flex items-center gap-4">
                <Button onClick={() => handleSavePlan()} className="flex-1" size={'lg'}>{saveLoading ? 'Loading...' : 'Save Care Plan'}</Button>
                <Button onClick={() => setCurrentStage(1)} variant={'outline'} size={'lg'}>Create New Plan</Button>
                <Button variant={'outline'} size={'lg'}>Download as PDF</Button>
            </div>
        </div>
    )
}

export default ReviewAndEditPlan;