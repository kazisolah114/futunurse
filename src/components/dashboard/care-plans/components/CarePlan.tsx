import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, PencilLine, Star, Stethoscope, Trash } from 'lucide-react';

interface CarePlanProps {
    carePlan: [];
}

const CarePlan = ({ carePlan }: CarePlanProps) => {
    return (
        <div className='w-full border bg-white p-5 rounded-md'>
            <div className='flex items-center gap-3'>
                <h2 className='text-xl font-bold text-gray-800'>John Smith</h2> <span className='px-2 py-0.5 border rounded-full text-xs'>Med-surg</span>
            </div>
            <p className='text-gray-800 my-2'>Post-operative hip replacement with risk for infection</p>
            <div className='flex items-center gap-8'>
                <p className='text-sm text-gray-500 flex items-center gap-2'><Calendar size={16} /> Created 1/14/2025</p>
                <p className='text-sm text-gray-500 flex items-center gap-2'><Clock size={16} /> Updated 1/28/2025</p>
            </div>
            <div className='space-x-2 mt-6'>
                <Button className=''><Stethoscope size={18} /> View Details</Button>
                <Button variant={'outline'}><PencilLine size={18} /> Edit Plan</Button>
                <Button className='bg-transparent text-gray-700 hover:text-yellow-500 hover:bg-yellow-500/20'><Star size={18} /></Button>
                <Button className='bg-transparent text-gray-700 hover:text-red-500 hover:bg-red-500/20'><Trash size={18} /></Button>
            </div>
        </div>
    );
};

export default CarePlan;