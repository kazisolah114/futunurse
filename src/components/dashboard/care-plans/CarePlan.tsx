"use client";
import { ICarePlan } from '@/components/types/PatientCarePlan';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Diagnoses from './components/Diagnoses';
import PatientInformation from './components/PatientInformation';
import { Download, PencilLine, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarePlanProps {
    slug: string;
}

export const CarePlan = ({ slug }: CarePlanProps) => {
    const [carePlan, setCarePlan] = useState<ICarePlan | null>(null);
    useEffect(() => {
        const handleGetCarePlan = async () => {
            const response = await axios.get(`http://localhost:3000/api/care-plan/get-care-plans/${slug}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                setCarePlan(response.data?.carePlan || null)
            }
        };
        handleGetCarePlan();
    }, [slug]);
    console.log("care plan:", carePlan);
    return (
        <div>
            <div className='flex items-start justify-between'>
                <div>
                    <h3 className='mb-0.5 font-semibold text-2xl text-gray-700 flex items-center gap-2'><User size={28} /> {carePlan?.patient.name}
                    </h3>
                    <p className='text-gray-600 capitalize'>{carePlan?.patient.primaryDiagnoses} with {carePlan?.patient.physicalFindings}</p>
                </div>
                <div className='space-x-3'>
                    <Button size={'lg'} variant={'outline'}><Download size={18} /> Export Plan</Button>
                    <Button size={'lg'}><PencilLine size={18} /> Edit Plan</Button>
                </div>
            </div>
            {carePlan?.patient && <PatientInformation patient={carePlan.patient} />}
            <Diagnoses diagnoses={carePlan?.diagnoses ?? []} />
        </div>
    );
};