"use client";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Download, File, Plus, Star } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CarePlan from './components/CarePlan';

export const CarePlans = () => {
    const [carePlans, setCarePlans] = useState<[]>([])
    useEffect(() => {
        const handleGetCarePlans = async () => {
            const response = await axios.get("http://localhost:3000/api/care-plan/get-care-plans", {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                setCarePlans(response.data?.carePlans);
            }
        };
        handleGetCarePlans();
    }, []);
    console.log("Care Plans:", carePlans);
    return (
        <div className='space-y-8'>
            <div className='flex md:items-center md:justify-between max-md:flex-col max-md:gap-8'>
                <div>
                    <h2 className='font-bold text-3xl text-gray-800 mb-1'>Care Plans Library</h2>
                    <p className='text-gray-700 mb-3'>Manage your nursing care plans with AI-powered assistance and templates</p>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-1 text-gray-600 text-sm'><File size={16} /> 5 total plans</p>
                        <p className='flex items-center gap-1 text-gray-600 text-sm'><Star size={16} /> 2 stars</p>
                    </div>
                </div>
                <div className='md:space-x-2 max-md:flex items-center gap-2'>
                    <Button variant={'outline'} className='max-md:w-6/12 border-teal-600 text-teal-600 hover:bg-transparent hover:text-teal-600'><Download size={18} /> Export All</Button>
                    <Button className='max-md:w-6/12 md:w-40'><Link href="/dashboard/care-plans/new" className='flex items-center gap-2'><Plus size={18} /> New Care Plan</Link></Button>
                </div>
            </div>
            <div>
                {
                    carePlans.map((plan, index) => (
                        <CarePlan key={index} carePlan={plan} />
                    ))
                }
            </div>
        </div>
    );
};