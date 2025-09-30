import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React, { Dispatch, SetStateAction } from 'react';

interface PatientFormProps {
    currentStage: number;
    setCurrentStage: Dispatch<SetStateAction<number>>;
}

const PatientForm = ({ currentStage, setCurrentStage }: PatientFormProps) => {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className='mt-2 border rounded-md p-6 w-full'>
            <div className='space-y-3'>
                <div className='mb-5'>
                    <h3 className='font-semibold text-xl text-gray-800'>Patient Demographics</h3>
                    <p className='text-sm text-gray-600'>Enter complete patient information</p>
                </div>
                <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-3'>
                    <div className='space-y-1.5'>
                        <Label htmlFor='name' className='text-sm text-gray-700'>Patient name</Label>
                        <Input type="text" placeholder='Mike Anderson' id="name" required />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='age' className='text-sm text-gray-700'>Patient age</Label>
                        <Input type="number" placeholder='55' id="age" required />
                    </div>
                    <div className='space-y-1.5 w-full'>
                        <Label htmlFor='gender' className='text-sm text-gray-700'>Gender</Label>
                        <Select>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-1.5 w-full'>
                        <Label htmlFor='specialty' className='text-sm text-gray-700'>Specialty</Label>
                        <Select>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder="Specialty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="medical-surgical">Medical-Surgical</SelectItem>
                                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                                <SelectItem value="obgyn">OB/GYN</SelectItem>
                                <SelectItem value="phsychiatric">Phsychiatric</SelectItem>
                                <SelectItem value="critical-care">Critical Care</SelectItem>
                                <SelectItem value="community-health">Community Health</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='mrn' className='text-sm text-gray-700'>MRN</Label>
                        <Input type="text" placeholder='e.g., 2858146' id="mrn" required />
                    </div>
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='primary-diagnoses' className='text-sm text-gray-700'>Primary Diagnoses</Label>
                    <Input type="text" placeholder='e.g., Congestive Heart Failure, COPD Exacerbation' id="primary-diagnoses" required />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='secondary-diagnoses' className='text-sm text-gray-700'>Secondary Diagnoses</Label>
                    <Input type="text" placeholder='List secondary diagnoses separated by commas' id="secondary-diagnoses" required />
                </div>
            </div>
            <hr className='mt-8' />
            <div className='space-y-3 mt-5'>
                <div className='mb-5'>
                    <h3 className='font-semibold text-xl text-gray-800'>Vital Signs & Assesment</h3>
                    <p className='text-sm text-gray-600'>Enter patient&apos;s vital signs & available assesment</p>
                </div>
                <div className='space-y-2'>
                    <Label className='text-sm text-gray-700'>Current Vital Signs</Label>
                    <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-3'>
                        <Input type="text" placeholder='Temp (F)' />
                        <Input type="text" placeholder='BP (mmHg)' />
                        <Input type="text" placeholder='HR (bpm)' />
                        <Input type="text" placeholder='RR (/min)' />
                        <Input type="text" placeholder='SpO₂ (%)' />
                        <Input type="text" placeholder='Pain (0-10)' />
                    </div>
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='labresult' className='text-sm text-gray-700'>Laboratory Results</Label>
                    <Textarea id="labresult" placeholder='Enter relevant lab values (CBC, BMP, ABG, etc.)' />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='physical-findings' className='text-sm text-gray-700'>Physical Assesment Findings</Label>
                    <Textarea id="physical-findings" placeholder='Enter head-to-toe assesment findings, symptom, patient complaints...' />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='current-medications' className='text-sm text-gray-700'>Current Medications</Label>
                    <Input type="text" placeholder='List current medications with doses separated by commas' id="current-medications" required />
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor='allergies' className='text-sm text-gray-700'>Allergies</Label>
                    <Input type="text" placeholder='List known allergies separated by commas' id="allergies" required />
                </div>
            </div>
            <Button onClick={() => setCurrentStage(currentStage + 1)} className='w-full h-12 text-lg mt-7'>Generate Care Plan</Button>
        </form>
    );
};

export default PatientForm;