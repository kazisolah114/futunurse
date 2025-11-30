"use client";
import React, { useState } from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';
import Navbar from './navbar';
import { Menu, Stethoscope } from 'lucide-react';
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
        <header className='py-2 px-2 flex justify-between items-center bg-white rounded-full top-10 max-sm:top-5 left-0 right-0 mx-auto w-6xl max-xl:w-4xl max-lg:w-3xl max-md:w-xl max-sm:w-[calc(100vw-2.5rem)] shadow-md fixed z-20'>
            <Link href="/" className='flex items-center gap-2 text-teal-600 pl-4 max-sm:pl-2'>
                <div className='bg-teal-600 w-8 h-8 max-sm:w-7 max-sm:h-7 rounded flex items-center justify-center'>
                    <Stethoscope size={20} className=' text-white' />
                </div>
                <h2 className='font-bold text-[26px] max-sm:text-[23px]'>Futunurse</h2>
            </Link>
            <Navbar />
            <Button onClick={handleGetStarted} size={'lg'} className='rounded-full w-42 h-12 text-lg max-md:hidden'>Get Started</Button>
            <div className='md:hidden text-teal-600 pr-2'><Menu /></div>

            <AuthPopup open={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
        </header>
    );
};

export default Header;