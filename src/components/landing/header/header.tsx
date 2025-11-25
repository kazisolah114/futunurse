"use client";
import React, { useState } from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';
import Navbar from './navbar';
import { Stethoscope } from 'lucide-react';
import AuthPopup from '@/components/authentication/authPopup';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Header = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [showAuthPopup, setShowAuthPopup] = useState<boolean>(false);
    const handleGetStarted = () => {
        if (session) {
            router.push("/dashboard");
        } else {
            setShowAuthPopup(true);
        }
    }
    return (
        <header className='py-2.5 px-3 flex justify-between items-center bg-white rounded-full top-10 left-0 right-0 mx-auto w-6xl shadow-md fixed z-10'>
            <Link href="/" className='flex items-center gap-2 text-teal-600 pl-2'>
                <Stethoscope size={25} className='relative top-0.5' />
                <h2 className='font-semibold text-[26px]'>Futunurse</h2>
            </Link>
            <Navbar />
            <Button onClick={handleGetStarted} size={'lg'} className='rounded-full w-42 h-12 text-lg'>Get Started</Button>

            <AuthPopup open={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
        </header>
    );
};

export default Header;