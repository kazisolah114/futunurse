import React from 'react';
import { Check, Computer, PencilLine, User } from 'lucide-react';

interface stageProps {
    currentStage: number;
}

const NewPlanStage = ({ currentStage }: stageProps) => {
    const stages = [
        { id: 1, label: "Patient Intake", icon: <User size={18} /> },
        { id: 2, label: "AI Generation", icon: <Computer size={18} /> },
        { id: 3, label: "Review & Edit", icon: <PencilLine size={18} /> }
    ]
    return (
        <div className='flex items-center mb-7'>
            {
                stages.map((stage, index) => {
                    const isCurrent = stage.id === currentStage;
                    const isCompleted = stage.id < currentStage;
                    return (
                        <div key={stage.id} className='flex items-center w-full relative'>
                            <p className={`w-8 h-8 rounded-full ${isCurrent || isCompleted ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'} font-medium flex items-center justify-center mr-2`}>{isCompleted ? <Check size={18} /> : stage.id}</p>
                            <span className={`font-medium ${isCurrent || isCompleted ? 'text-teal-600' : 'text-gray-500'}`}>{stage.label}</span>
                            {
                            index < stages.length - 1 && (
                                <div className={`flex-1 h-1 mx-3 ${isCompleted ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
                            )
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default NewPlanStage;