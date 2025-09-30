"use client";
import React, { useState } from 'react';
import NewPlanStage from './components/NewPlanStage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PatientForm from './components/PatientForm';
import GeneratingPlanAnimation from './components/GeneratingPlanAnimation';
import ReviewAndEditPlan from './components/ReviewAndEditPlan';

export const NewCarePlan = () => {
    const [currentStage, setCurrentStage] = useState<number>(1);
    return (
        <div>
            <NewPlanStage currentStage={currentStage} />
            {currentStage === 1 ?
                (
                    <Tabs defaultValue="manual" className='rounded-md'>
                        <TabsList>
                            <TabsTrigger value={"manual"} className='w-44 text-sm'>Manual Entry</TabsTrigger>
                            <TabsTrigger value={"template"} className='w-44 text-sm'>Use Template</TabsTrigger>
                        </TabsList>
                        <TabsContent value={"manual"}>
                            <PatientForm currentStage={currentStage} setCurrentStage={setCurrentStage} />
                        </TabsContent>
                        <TabsContent value={"template"}>Template content</TabsContent>
                    </Tabs>
                )
                :
                currentStage === 2 ?
                    (
                        <GeneratingPlanAnimation setCurrentStage={setCurrentStage} />
                    )
                    :
                    <ReviewAndEditPlan />
            }
        </div>
    );
};