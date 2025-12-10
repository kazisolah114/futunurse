"use client";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Download, Plus, Star, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CarePlan from './components/CarePlan';
import { ICarePlan } from '@/types/PatientCarePlan';
import { Skeleton } from '@/components/ui/skeleton';

export const CarePlans = () => {
    const [carePlans, setCarePlans] = useState<ICarePlan[]>([]);
    const [plansLoading, setPlansLoading] = useState<boolean>(true);
    useEffect(() => {
        const handleGetCarePlans = async () => {
            setPlansLoading(true);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/care-plan/get-care-plans`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setPlansLoading(false);
            if (response.status === 200) {
                setCarePlans(response.data?.carePlans);
            }
        };
        handleGetCarePlans();
    }, []);
    return (
        <div className='space-y-8'>
            <div className='flex md:justify-between max-md:flex-col max-md:gap-8'>
                <div>
                    <h2 className='font-bold text-3xl text-gray-800 mb-1'>Care Plans Library</h2>
                    <p className='text-gray-700 mb-3'>AI-powered nursing care plans with evidence-based practice and NANDA/NIC/NOC integration</p>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-1 text-gray-500 text-sm'><Stethoscope size={16} /> {carePlans.length} total plans</p>
                        <p className='flex items-center gap-1 text-gray-500 text-sm'><Star size={16} /> 0 starred</p>
                    </div>
                </div>
                <div className='md:space-x-2 max-md:flex items-center gap-2'>
                    <Button size={'lg'} variant={'outline'} className='max-md:w-6/12 border-teal-600 text-teal-600 hover:bg-transparent hover:text-teal-600'><Download size={18} /> Export All</Button>
                    <Button size={'lg'} className='max-md:w-6/12 md:w-40'><Link href="/dashboard/care-plans/new" className='flex items-center gap-2'><Plus size={18} /> New Care Plan</Link></Button>
                </div>
            </div>
            {plansLoading ? (
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        Array.from({ length: 2 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="bg-gray-900/10 h-52 w-full rounded-md"
                            />
                        ))
                    }
                </div>
            ) : carePlans.length > 0 ? (
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {carePlans.map((plan, index) => (
                        <CarePlan key={index} carePlan={plan} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center py-8">
                    <Stethoscope size={36} className="text-gray-500" />
                    <h3 className="font-bold text-xl text-gray-700 mt-4">No Care Plan in the Library</h3>
                    <p className="text-gray-600">
                        You have no care plans made. Create a new care plan to get started
                    </p>
                </div>
            )}
        </div>
    );
};