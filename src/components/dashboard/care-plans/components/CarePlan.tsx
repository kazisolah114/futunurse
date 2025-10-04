import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, PencilLine, Star, Stethoscope, Trash } from 'lucide-react';
import { ICarePlan } from '@/components/types/PatientCarePlan';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

interface CarePlanProps {
    carePlan: ICarePlan;
}

const CarePlan = ({ carePlan }: CarePlanProps) => {
    const pathname = usePathname();
    const { _id, patient, createdAt, updatedAt } = carePlan || {};
    const handleDeletePlan = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/care-plan/delete-care-plan/${_id}`);
            console.log(response);
            if (response.status === 200) {
                toast.success("Care plan deleted succesfully!", { autoClose: 1000 });
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete care plan!", { autoClose: 1000 });
        }
    };
    return (
        <div className='w-full border bg-white p-5 rounded-md'>
            <div className='flex items-center gap-3'>
                <h2 className='text-xl font-bold text-gray-800'>{patient.name}</h2> <span className='px-2 py-0.5 border rounded-full text-xs'>{patient.specialty}</span>
            </div>
            <p className='text-gray-800 my-2'>{patient.primaryDiagnoses}</p>
            <div className='flex items-center gap-8'>
                <p className='text-sm text-gray-500 flex items-center gap-2'><Calendar size={16} /> Created {new Date(createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                <p className='text-sm text-gray-500 flex items-center gap-2'><Clock size={16} /> Updated {new Date(updatedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
            </div>
            <div className='space-x-2 mt-6'>
                <Link href={{
                    pathname: `${pathname}/${_id}`,
                    query: {
                        patient: patient.name?.toLowerCase(),
                        specialty: patient.specialty?.toLowerCase()
                    }
                }}><Button><Stethoscope size={18} /> View Details</Button></Link>
                <Button variant={'outline'}><PencilLine size={18} /> Edit Plan</Button>
                <Button className='bg-transparent text-gray-700 hover:text-yellow-500 hover:bg-yellow-500/20'><Star size={18} /></Button>
                <Button onClick={handleDeletePlan} className='bg-transparent text-gray-700 hover:text-red-500 hover:bg-red-500/20'><Trash size={18} /></Button>
            </div>
        </div>
    );
};

export default CarePlan;