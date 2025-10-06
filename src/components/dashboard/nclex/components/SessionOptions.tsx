import { Button } from '@/components/ui/button';
import { BookOpen, Brain, LucideIcon, Play } from 'lucide-react';
import React from 'react';

type Options = {
    icon: LucideIcon,
    title: string;
    label: string;
    description: string;
}

const SessionOptions = () => {
    const options: Options[] = [
        {
            icon: Brain,
            title: "Adaptive Practice",
            label: "AI-powered questions based on your weak areas",
            description: "Get personalized questions that adapt to your performance and focus on areas needing improvement"
        },
        {
            icon: BookOpen,
            title: "Category Focus",
            label: "Practice specific NCLEX content areas",
            description: "Choose a specific category to focus your practice session on particular content areas and improve pass chance numeriously"
        }
    ]
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {
                options.map((option, index) => {
                    const Icon = option.icon;
                    return (
                        <div key={index} className='bg-white border p-6 rounded-md shadow-md hover:shadow-lg'>
                            <h4 className='flex items-center gap-3 font-bold text-gray-800'><Icon className={`w-5 h-5 ${index === 0 ? 'text-teal-600' : index === 1 ? 'text-blue-600' : null}`} /> {option.title}</h4>
                            <p className='text-gray-500 mb-5 mt-1 text-sm'>{option.label}</p>
                            <p className='text-gray-600 mb-5 text-sm'>{option.description}</p>
                            {index === 0 ?
                            <Button size={'lg'} className='w-full'><Play /> Start Adaptive Session</Button>
                            :
                            index === 1 ?
                            <Button size={'lg'} variant={'outline'} className='w-full'><BookOpen /> Choose Category</Button>
                            :
                            null
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SessionOptions;