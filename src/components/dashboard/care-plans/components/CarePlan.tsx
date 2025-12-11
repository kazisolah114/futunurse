import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, PencilLine, Star, Stethoscope, Trash } from 'lucide-react';
import { ICarePlan } from '@/types/PatientCarePlan';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

interface CarePlanProps {
    carePlan: ICarePlan;
}

const CarePlan = ({ carePlan }: CarePlanProps) => {
    console.log(carePlan)
    const pathname = usePathname();
    const { _id, patient, createdAt, updatedAt } = carePlan || {};
    const handleDeletePlan = async () => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE}/api/care-plan/delete-care-plan/${_id}`);
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
        <div className='w-full bg-white border border-gray-200/30 hover:border-gray-200/50 duration-200 p-5 rounded-md'>
            <div className='sm:flex items-center justify-between gap-3'>
                <h2 className='text-xl font-bold text-gray-800'>
                    {patient.name}
                </h2>
                <div className='space-x-2 max-sm:mt-3'>
                    <span className='font-medium px-2 py-0.5 border rounded-full text-xs'>
                        {patient.specialty}
                    </span>
                    <span className='font-medium px-2 py-0.5 border border-blue-200 bg-blue-500/10 text-blue-600 rounded-full text-xs'>
                        {carePlan.diagnoses?.length} Diagnoses
                    </span>
                </div>
            </div>
            <p className='text-gray-800 my-2'>{patient.primaryDiagnoses}</p>
            <div className='flex sm:items-center gap-8 max-sm:flex-col max-sm:gap-2'>
                <p className='text-sm text-gray-500 flex items-center gap-2'><Calendar size={16} /> Created {new Date(createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                <p className='text-sm text-gray-500 flex items-center gap-2'><Clock size={16} /> Updated {new Date(updatedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
            </div>
            <div className='space-x-2 max-sm:space-x-4 mt-6'>
                <Link href={{
                    pathname: `${pathname}/${_id}`,
                    query: {
                        patient: patient.name?.toLowerCase(),
                        specialty: patient.specialty?.toLowerCase()
                    }
                }}>
                    <Button className='max-sm:w-52'><Stethoscope size={18} /> View Details</Button>
                </Link>
                <Button variant={'outline'} className='max-sm:hidden'><PencilLine size={18} /> Edit Plan</Button>
                <Button className='bg-transparent text-gray-700 hover:text-yellow-500 hover:bg-yellow-500/20 max-sm:w-2'><Star size={18} /></Button>
                <Button onClick={handleDeletePlan} className='bg-transparent text-gray-700 hover:text-red-500 hover:bg-red-500/20 max-sm:w-2'><Trash size={18} /></Button>
            </div>
        </div>
    );
};

export default CarePlan;