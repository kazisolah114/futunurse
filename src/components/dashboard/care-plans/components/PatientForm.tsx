import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface PatientFormProps {
    currentStage: number;
    setCurrentStage: Dispatch<SetStateAction<number>>;
}

interface IPatient {
    // Patient Demographics
    name: string;
    age: string;
    gender: "male" | "female" | null;
    specialty: "medical surgical" | "pediatrics" | "OB/GYN" | "phsychiatric" | "critical care" | "community health" | null;
    mrn: string,
    primaryDiagnoses: string,
    secondaryDiagnoses: string,
    // Patient Vitals & Assesment
    vitals: {
        temperature: string,
        bloodPressure: string,
        heartRate: string,
        respiratoryRate: string,
        oxygenSaturation: string,
        painLevel: string
    },
    labResults: string,
    physicalFindings: string,
    currentMedications: string,
    allergies: string
}

const PatientForm = ({ currentStage, setCurrentStage }: PatientFormProps) => {
    const [patientData, setPatientData] = useState<IPatient>({
        // Patient Demographics
        name: '',
        age: '',
        gender: null,
        specialty: null,
        mrn: '',
        primaryDiagnoses: '',
        secondaryDiagnoses: '',
        // Patient Vitals & Assesment
        vitals: {
            temperature: "",
            bloodPressure: "",
            heartRate: "",
            respiratoryRate: "",
            oxygenSaturation: "",
            painLevel: ""
        },
        labResults: "",
        physicalFindings: "",
        currentMedications: "",
        allergies: ""
    })
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(e);
        console.log("Patient Data:", patientData);
    }
    return (
        <form onSubmit={handleSubmit} className='mt-2 border rounded-md p-6 w-full'>
            <div className='space-y-3'>
                <div className='mb-5'>
                    <h3 className='font-semibold text-xl text-gray-800'>Patient Demographics</h3>
                    <p className='text-sm text-gray-600'>Enter complete patient information</p>
                </div>
                <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-3'>
                    <div className='space-y-1.5'>
                        <Label htmlFor='name' className='text-sm text-gray-700'>Patient name</Label>
                        <Input type="text" placeholder='Mike Anderson' id="name" required
                            value={patientData.name}
                            onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='age' className='text-sm text-gray-700'>Patient age</Label>
                        <Input type="string" placeholder='55' id="age" required
                            value={patientData.age}
                            onChange={(e) => setPatientData({ ...patientData, age: e.target.value })}
                        />
                    </div>
                    <div className='space-y-1.5 w-full'>
                        <Label htmlFor='gender' className='text-sm text-gray-700'>Gender</Label>
                        <Select
                            value={patientData.gender ?? ""}
                            onValueChange={(value) => setPatientData({ ...patientData, gender: value as "male" | "female" })}>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-1.5 w-full'>
                        <Label htmlFor='specialty' className='text-sm text-gray-700'>Specialty</Label>
                        <Select
                            value={patientData.specialty ?? ""}
                            onValueChange={(value) => setPatientData({ ...patientData, specialty: value as "medical surgical" | "pediatrics" | "OB/GYN" | "phsychiatric" | "critical care" | "community health" })}
                        >
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder="Specialty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="medical-surgical">Medical-Surgical</SelectItem>
                                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                                <SelectItem value="obgyn">OB/GYN</SelectItem>
                                <SelectItem value="phsychiatric">Phsychiatric</SelectItem>
                                <SelectItem value="critical-care">Critical Care</SelectItem>
                                <SelectItem value="community-health">Community Health</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='mrn' className='text-sm text-gray-700'>MRN</Label>
                        <Input type="text" placeholder='e.g., 2858146' id="mrn" required
                            value={patientData.mrn}
                            onChange={(e) => setPatientData({ ...patientData, mrn: e.target.value })}
                        />
                    </div>
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='primary-diagnoses' className='text-sm text-gray-700'>Primary Diagnoses</Label>
                    <Input type="text" placeholder='e.g., Congestive Heart Failure, COPD Exacerbation' id="primary-diagnoses" required
                        value={patientData.primaryDiagnoses}
                        onChange={(e) => setPatientData({ ...patientData, primaryDiagnoses: e.target.value })}
                    />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='secondary-diagnoses' className='text-sm text-gray-700'>Secondary Diagnoses</Label>
                    <Input type="text" placeholder='List secondary diagnoses separated by commas' id="secondary-diagnoses" required
                        value={patientData.secondaryDiagnoses}
                        onChange={(e) => setPatientData({ ...patientData, secondaryDiagnoses: e.target.value })}
                    />
                </div>
            </div>
            <hr className='mt-8' />
            <div className='space-y-3 mt-5'>
                <div className='mb-5'>
                    <h3 className='font-semibold text-xl text-gray-800'>Vital Signs & Assesment</h3>
                    <p className='text-sm text-gray-600'>Enter patient&apos;s vital signs & available assesment</p>
                </div>
                <div className='space-y-2'>
                    <Label className='text-sm text-gray-700'>Current Vital Signs</Label>
                    <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-3'>
                        <Input type="text" placeholder='Temp (F)'
                            value={patientData.vitals.temperature}
                            onChange={(e) => setPatientData({ ...patientData, vitals: { ...patientData.vitals, temperature: e.target.value } })}
                        />
                        <Input type="text" placeholder='BP (mmHg)'
                            value={patientData.vitals.bloodPressure}
                            onChange={(e) => setPatientData({ ...patientData, vitals: { ...patientData.vitals, bloodPressure: e.target.value } })}
                        />
                        <Input type="text" placeholder='HR (bpm)'
                            value={patientData.vitals.heartRate}
                            onChange={(e) => setPatientData({ ...patientData, vitals: { ...patientData.vitals, heartRate: e.target.value } })} />
                        <Input type="text" placeholder='RR (/min)'
                            value={patientData.vitals.respiratoryRate}
                            onChange={(e) => setPatientData({ ...patientData, vitals: { ...patientData.vitals, respiratoryRate: e.target.value } })}
                        />
                        <Input type="text" placeholder='SpO₂ (%)'
                            value={patientData.vitals.oxygenSaturation}
                            onChange={(e) => setPatientData({ ...patientData, vitals: { ...patientData.vitals, oxygenSaturation: e.target.value } })}
                        />
                        <Input type="text" placeholder='Pain (0-10)'
                            value={patientData.vitals.painLevel}
                            onChange={(e) => setPatientData({ ...patientData, vitals: { ...patientData.vitals, painLevel: e.target.value } })}
                        />
                    </div>
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='labresult' className='text-sm text-gray-700'>Laboratory Results</Label>
                    <Textarea id="labresult" placeholder='Enter relevant lab values (CBC, BMP, ABG, etc.)'
                        value={patientData.labResults}
                        onChange={(e) => setPatientData({ ...patientData, labResults: e.target.value })}
                    />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='physical-findings' className='text-sm text-gray-700'>Physical Assesment Findings</Label>
                    <Textarea id="physical-findings" placeholder='Enter head-to-toe assesment findings, symptom, patient complaints...'
                        value={patientData.physicalFindings}
                        onChange={(e) => setPatientData({ ...patientData, physicalFindings: e.target.value })}
                    />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='current-medications' className='text-sm text-gray-700'>Current Medications</Label>
                    <Input type="text" placeholder='List current medications with doses separated by commas' id="current-medications" required
                        value={patientData.currentMedications}
                        onChange={(e) => setPatientData({ ...patientData, currentMedications: e.target.value })}
                    />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='allergies' className='text-sm text-gray-700'>Allergies</Label>
                    <Input type="text" placeholder='List known allergies separated by commas' id="allergies" required
                        value={patientData.allergies}
                        onChange={(e) => setPatientData({ ...patientData, allergies: e.target.value })}
                    />
                </div>
            </div>
            <Button onClick={() => setCurrentStage(2)} className='w-full h-12 text-base mt-7'>Generate Care Plan</Button>
        </form>
    );
};

export default PatientForm;