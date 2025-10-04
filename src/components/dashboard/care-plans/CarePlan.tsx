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
    const [planLoading, setPlanLoading] = useState<boolean>(true);
    useEffect(() => {
        setPlanLoading(true);
        const handleGetCarePlan = async () => {
            const response = await axios.get(`http://localhost:3000/api/care-plan/get-care-plans/${slug}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setPlanLoading(false);
            if (response.status === 200) {
                setCarePlan(response.data?.carePlan || null)
            }
        };
        handleGetCarePlan();
    }, [slug]);
    return (
        <>
            {planLoading ?
                (
                    <div>Loading...</div>
                )
                :
                (
                    <div>
                        <div className='flex items-start justify-between max-md:flex-col max-md:gap-3'>
                            <div>
                                <h3 className='mb-0.5 font-semibold text-2xl text-gray-700 flex items-center gap-2'><User size={28} /> {carePlan?.patient.name}
                                </h3>
                                <p className='text-gray-600 capitalize'>{carePlan?.patient.primaryDiagnoses} with {carePlan?.patient.physicalFindings}</p>
                            </div>
                            <div className='space-x-2 max-sm:w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-2'>
                                <Button size={'lg'} variant={'outline'} className='max-sm:w-full border-teal-600 text-teal-600 hover:bg-transparent hover:text-teal-600'><Download size={18} /> Export Plan</Button>
                                <Button size={'lg'} className='max-sm:w-full sm:!w-40'><PencilLine size={18} /> Edit Plan</Button>
                            </div>
                        </div>
                        {carePlan?.patient && <PatientInformation patient={carePlan.patient} />}
                        <Diagnoses diagnoses={carePlan?.diagnoses ?? []} />
                    </div>
                )
            }
        </>
    );
};