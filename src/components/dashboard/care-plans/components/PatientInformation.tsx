import { IPatient } from '@/types/PatientCarePlan';
import React from 'react';

interface PatientInformationProps {
    patient: IPatient;
}

const PatientInformation = ({ patient }: PatientInformationProps) => {
    return (
        <div className='border-2 border-slate-300 rounded-none bg-white p-5 mt-8 mb-10 space-y-2'>
            <div className='flex gap-8 max-sm:gap-4 flex-wrap'>
                <div>
                    <span className='text-xs text-gray-500 uppercase'>Age</span>
                    <p className=' text-gray-800'>{patient.age} y/o</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500 uppercase'>Gender</span>
                    <p className=' text-gray-800 capitalize'>{patient.gender}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500 uppercase'>Specialty</span>
                    <p className=' text-gray-800 capitalize'>{patient.specialty || "N/A"}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500 uppercase'>MRN</span>
                    <p className=' text-gray-800 capitalize'>{patient.mrn || "N/A"}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500 uppercase'>TEMP (F)</span>
                    <p className=' text-gray-800 capitalize'>{patient.vitals?.temperature || "N/A"}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500'>BP (mmHG)</span>
                    <p className=' text-gray-800 capitalize'>{patient.vitals?.bloodPressure || "N/A"}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500'>HR (bpm)</span>
                    <p className=' text-gray-800 capitalize'>{patient.vitals?.heartRate || "N/A"}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500'>RR (/min)</span>
                    <p className=' text-gray-800 capitalize'>{patient.vitals?.respiratoryRate || "N/A"}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500'>SpO₂ (%)</span>
                    <p className=' text-gray-800 capitalize'>{patient.vitals?.oxygenSaturation + "%" || "N/A"}</p>
                </div>
                <div>
                    <span className='text-xs text-gray-500 uppercase'>Pain Level</span>
                    <p className=' text-gray-800'>{patient.vitals?.painLevel + " " + "out of 10" || "N/A"} </p>
                </div>
            </div>
            <div>
                <span className='text-xs text-gray-500 uppercase'>Primary Diagnoses</span>
                <p className=' text-gray-800 capitalize'>{patient.primaryDiagnoses}</p>
            </div>
            <div>
                <span className='text-xs text-gray-500 uppercase'>Secondary Diagnoses</span>
                <p className=' text-gray-800 capitalize'>{patient.secondaryDiagnoses || "N/A"}</p>
            </div>
            <div>
                <span className='text-xs text-gray-500 uppercase'>Physical Findings</span>
                <p className=' text-gray-800 capitalize'>{patient.physicalFindings || "N/A"}</p>
            </div>
            <div>
                <span className='text-xs text-gray-500 uppercase'>Current Medications</span>
                <p className=' text-gray-800 capitalize'>{patient.currentMedications || "N/A"}</p>
            </div>
            <div>
                <span className='text-xs text-gray-500 uppercase'>Allergies</span>
                <p className=' text-gray-800 capitalize'>{patient.allergies || "N/A"}</p>
            </div>
            <div>
                <span className='text-xs text-gray-500 uppercase'>Lab Results</span>
                <p className=' text-gray-800 capitalize'>{patient.labResults || "N/A"}</p>
            </div>
        </div>
    );
};

export default PatientInformation;