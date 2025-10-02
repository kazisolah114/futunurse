"use client";
import React, { useState } from 'react';
import NewPlanStage from './components/NewPlanStage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PatientForm from './components/PatientForm';
import GeneratingPlanAnimation from './components/GeneratingPlanAnimation';
import ReviewAndEditPlan from './components/ReviewAndEditPlan';
import { ToastContainer } from "react-toastify";

export const NewCarePlan = () => {
    const [currentStage, setCurrentStage] = useState<number>(1);
    const [carePlan, setCarePlan] = useState<[]>([]);
    return (
        <div>
            <NewPlanStage currentStage={currentStage} />
            {currentStage === 1 ?
                (
                    <Tabs defaultValue="manual" className='rounded-md'>
                        <TabsList>
                            <TabsTrigger value={"manual"} className='w-44 text-sm cursor-pointer'>Manual Entry</TabsTrigger>
                            <TabsTrigger value={"template"} className='w-44 text-sm cursor-pointer'>Use Template</TabsTrigger>
                        </TabsList>
                        <TabsContent value={"manual"}>
                            <PatientForm currentStage={currentStage} setCurrentStage={setCurrentStage} setCarePlan={setCarePlan} />
                        </TabsContent>
                        <TabsContent value={"template"}>Template content</TabsContent>
                    </Tabs>
                )
                :
                currentStage === 2 ?
                    (
                        <GeneratingPlanAnimation currentStage={currentStage} setCurrentStage={setCurrentStage} />
                    )
                    :
                    <ReviewAndEditPlan diagnoses={carePlan} />
            }
            <ToastContainer />
        </div>
    );
};