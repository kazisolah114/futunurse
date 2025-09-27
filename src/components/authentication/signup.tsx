import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface SignUpProps {
    signIn: () => void;
}

const SignUp = ({ signIn }: SignUpProps) => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                <h5 className='font-bold text-lg text-gray-900 uppercase'>Sign Up Now</h5>
                <p className='text-gray-700 text-sm'>Sign up to create your account to continue your nursing journey</p>
            </div>
            <form className='mt-6 space-y-4'>
                <div className='space-y-2'>
                    <Label htmlFor='name'>Full name</Label>
                    <Input type='text' placeholder='e,g. Donald Trump' required />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' placeholder='student@nursing.edu' required />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' placeholder='Enter password' required />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='cpassword'>Confirm password</Label>
                    <Input type='password' placeholder='Confirm password' required />
                </div>
                <Button size={'lg'} className='w-full mt-4'>Sign Up</Button>
            </form>
            <p className='text-gray-700 text-center text-sm mt-3'>Already have an account? <Button variant={'link'} onClick={signIn}>Sign In</Button></p>
        </div>
    );
};

export default SignUp;