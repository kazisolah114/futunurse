import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import GoogleIcon from "../../../public/icons/google.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SignInProps {
    signUpInstead: () => void;
    onClose: () => void;
}

type FormData = {
    email: string;
    password: string;
}

const SignIn = ({ signUpInstead, onClose }: SignInProps) => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const signInRes = await signIn("credentials", {
            redirect: false,
            email: formData.email,
            password: formData.password
        });
        console.log(signInRes)
        if (signInRes?.ok === false) {
            console.log(signInRes.error);
        } else {
            alert("Sign in successful!");
            console.log("User authenticated!");
            router.push("/dashboard");
            setFormData({
                email: '',
                password: ''
            });
            onClose();
        }
    }
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                <h5 className='font-bold text-lg text-gray-900 uppercase'>Welcome Back</h5>
                <p className='text-gray-700 text-sm'>Sign in to your account to continue your nursing journey</p>
            </div>
            <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} variant={'outline'} className='w-full my-6'><Image src={GoogleIcon || null} alt={"google-icon"} width={30} height={30} /> Continue with Google</Button>
            <form onSubmit={handleSubmit} className=' space-y-4'>
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
                <Button size={'lg'} className='w-full mt-4'>Sign In</Button>
            </form>
            <p className='text-gray-700 text-center text-sm mt-3'>Don&apos; have an account? <Button variant={'link'} onClick={signUpInstead}>Sign Up</Button></p>
        </div>
    );
};

export default SignIn;