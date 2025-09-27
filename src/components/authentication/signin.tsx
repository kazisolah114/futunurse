import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface SignInProps {
    signUp: () => void;
}

const SignIn = ({ signUp }: SignInProps) => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                <h5 className='font-bold text-lg text-gray-900 uppercase'>Welcome Back</h5>
                <p className='text-gray-700 text-sm'>Sign in to your account to continue your nursing journey</p>
            </div>
            <form className='mt-6 space-y-4'>
                <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' placeholder='student@nursing.edu' required />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='email' placeholder='Enter password' required />
                </div>
                <Button size={'lg'} className='w-full mt-4'>Sign In</Button>
            </form>
            <p className='text-gray-700 text-center text-sm mt-3'>Don&apos; have an account? <Button variant={'link'} onClick={signUp}>Sign Up</Button></p>
        </div>
    );
};

export default SignIn;