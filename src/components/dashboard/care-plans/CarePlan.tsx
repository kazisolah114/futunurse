"use client";
import { ICarePlan } from '@/components/types/PatientCarePlan';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            if(response.status === 200) {
                setCarePlan(response.data?.carePlan || null)
            }
        };
        handleGetCarePlan();
    }, [slug]);
    console.log("care plan:", carePlan);
    return (
        <div>
            
        </div>
    );
};