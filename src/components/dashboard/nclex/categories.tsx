import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { NCLEXCategory } from '@/types/NCLEX';
import { BookA, PlayIcon, Stethoscope } from 'lucide-react';
import React from 'react';

export const Categories = () => {
    const nclexCategories: NCLEXCategory[] = [
        {
            name: "Safe and Effective Care Environment",
            subcategories: ["Management of Care", "Safety and Infection Control"],
        },
        {
            name: "Health Promotion and Maintenance",
            subcategories: ["Growth and Development", "Health Screening", "Ante/Intra/Postpartum Care"],
        },
        {
            name: "Psychosocial Integrity",
            subcategories: ["Mental Health Concepts", "Therapeutic Communication", "Coping and Adaptation", "End-of-Life Care"],
        },
        {
            name: "Physiological Integrity",
            subcategories: [
                "Basic Care and Comfort",
                "Pharmacological Therapies",
                "Reduction of Risk Potential",
                "Physiological Adaptation",
            ],
        },
    ]
    return (
        <>
            <div className='mb-7'>
                <h2 className='font-bold text-2xl text-gray-800 mb-0.5'>NCLEX Categories</h2>
                <p className='text-gray-700 mb-3'>Choose a category to focus your practice session</p>
            </div>
            <div className='space-y-5'>
                {
                    nclexCategories.map((category, idx) => <div key={idx} className='bg-white border border-gray-200/30 rounded-lg p-5'>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='max-sm:hidden bg-teal-600/20 text-teal-600 w-11 h-11 rounded-lg flex items-center justify-center'>
                                <Stethoscope size={21} />
                            </div>
                            <div>
                                <h2 className='font-semibold max-sm:font-bold max-sm:text-gray-800 text-lg text-gray-900 mb-0.5'>{category.name}</h2>
                                <p className='text-gray-600 text-sm normal-case'>{category.subcategories.slice(0, 2).join(", ")}</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-600'>Progress</p>
                                <p className={`text-sm sm:font-medium w-16 max-sm:w-14 py-0.5 text-center rounded-full ${100 >= 70 ? 'bg-green-500/20 text-green-700' : 50 >= 40 ? 'bg-yellow-500/20 text-yellow-700' : 'bg-red-100 text-red-500'}`}>50%</p>
                            </div>
                            <Progress value={50} className='my-2' />
                            <p className='text-gray-500'>245 questions completed</p>
                        </div>
                        <div className='mt-5'>
                            <h3 className='uppercase text-sm font-semibold text-gray-600 mb-2'>Key topics</h3>
                            <ul className='flex items-center gap-2 flex-wrap'>
                                {category.subcategories.map((i, idx) => <li key={idx} className='border border-teal-600 text-teal-600 py-0.5 px-2 rounded-full text-xs'>{i}</li>)}
                            </ul>
                        </div>
                        <div className='mt-5 flex gap-4'>
                            <Button size={'lg'} className='sm:flex-1 w-6/12'><PlayIcon /> Start Session</Button>
                            <Button size={'lg'} variant={'secondary'} className='w-44 max-sm:w-fit'><BookA /> Study Guide</Button>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    );
};