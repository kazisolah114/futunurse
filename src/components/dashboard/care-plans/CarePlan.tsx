"use client";
import { ICarePlan } from '@/components/types/PatientCarePlan';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Diagnoses from './components/Diagnoses';
import PatientInformation from './components/PatientInformation';
import { Download, PencilLine, Stethoscope, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

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
                    <div className='space-y-5'>
                        <Skeleton className='bg-slate-200 h-16 w-full rounded-md' />
                        <Skeleton className='bg-slate-200 h-96 w-full rounded-md' />
                        <Skeleton className='bg-slate-200 h-[30rem] w-full rounded-md' />
                    </div>
                )
                :
                (
                    <div>
                        <div className='flex items-start justify-between max-md:flex-col max-md:gap-3'>
                            <div>
                                <h3 className='mb-1 font-bold text-3xl text-gray-700 flex items-center gap-3'><Stethoscope size={28} /> {carePlan?.patient.name}
                                </h3>
                                <p className='text-gray-600 capitalize'>{carePlan?.patient.primaryDiagnoses} with {carePlan?.patient.physicalFindings?.slice(0, 50)}...</p>
                            </div>
                            <div className='space-x-2 max-sm:w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-2'>
                                <Button size={'lg'} variant={'outline'} className='max-sm:w-full border-teal-600 text-teal-600 hover:bg-transparent hover:text-teal-600'><Download size={18} /> Export Plan</Button>
                                <Button size={'lg'} className='max-sm:w-full sm:!w-40'><PencilLine size={20} /> Edit Plan</Button>
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