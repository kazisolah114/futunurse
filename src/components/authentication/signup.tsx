import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface SignUpProps {
    signInInstead: () => void;
    onClose: () => void;
}

type FormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp = ({ signInInstead, onClose }: SignUpProps) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("data", formData);
        // User sign up logic:
        const res = fetch('http://localhost:3000/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await res.then(res => res.json());
        console.log("data", data);
        if(!data?.success) return;

        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

        const signInRes = await signIn("credentials", {
            redirect: false,
            email: formData.email,
            password: formData.password
        });
        console.log(signInRes)

        if (signInRes?.ok === false) {
            console.log(signInRes.error);
        } else {
            console.log("User authenticated!");
            onClose();
        }
    }
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                <h5 className='font-bold text-lg text-gray-900 uppercase'>Sign Up Now</h5>
                <p className='text-gray-700 text-sm'>Sign up to create your account to continue your nursing journey</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                <div className='space-y-2'>
                    <Label htmlFor='name'>Full name</Label>
                    <Input type='text' placeholder='e,g. Donald Trump' required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' placeholder='student@nursing.edu' required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' placeholder='Enter password' required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='cpassword'>Confirm password</Label>
                    <Input type='password' placeholder='Confirm password' required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                </div>
                <Button size={'lg'} className='w-full mt-4'>Sign Up</Button>
            </form>
            <p className='text-gray-700 text-center text-sm mt-3'>Already have an account? <Button variant={'link'} onClick={signInInstead}>Sign In</Button></p>
        </div>
    );
};

export default SignUp;