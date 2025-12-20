import { ChevronRight, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Features = () => {
    return (
        <div className='col-span-2 max-md:col-span-full grid sm:grid-cols-2 gap-5 max-sm:gap-5'>
            <Link href="/dashboard/care-plans" className='cursor-pointer bg-white border border-gray-200/30 hover:border-blue-600/50 duration-200 p-4 rounded-lg group'>
                <div className='bg-blue-600/10 rounded-lg p-3 inline-block'>
                    <Stethoscope size={20} className='text-blue-600' />
                </div>
                <h4 className='font-semibold text-gray-900 my-1'>New Care Plan</h4>
                <p className=' text-xs text-slate-500'>AI-powered NANDA/NIC/NOC care plans</p>
                <span className='mt-3 text-sm flex items-center text-blue-600'>Start now <ChevronRight size={13} className='group-hover:ml-2 duration-200 relative top-0.5' /></span>
            </Link>
            <Link href="/dashboard/nclex" className='cursor-pointer bg-white border border-gray-200/30 hover:border-green-600/50 duration-200 p-4 rounded-lg group'>
                <div className='bg-green-600/10 rounded-lg p-3 inline-block'>
                    <Stethoscope size={20} className='text-green-600' />
                </div>
                <h4 className='font-semibold text-gray-900 my-1'>Practice NCLEX</h4>
                <p className=' text-xs text-slate-500'>Adaptive NCLEX exam simulation</p>
                <span className='mt-3 text-sm flex items-center text-green-600'>Begin practice <ChevronRight size={13} className='group-hover:ml-2 duration-200 relative top-0.5' /></span>
            </Link>
        </div>
    );
};

export default Features;