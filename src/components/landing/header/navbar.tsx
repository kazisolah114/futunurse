"use client";
import React, { useState } from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';
import AuthPopup from '@/components/authentication/authPopup';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [showAuthPopup, setShowAuthPopup] = useState<boolean>(false);
    const handleGetStarted = () => {
        if(session) {
            router.push("/dashboard");
        } else {
            setShowAuthPopup(true);
        }
    }
    return (
        <nav className='flex items-center gap-5'>
            <ul className='flex items-center gap-5'>
                {[
                    { label: 'Features', href: '#features' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'About', href: '#about' },
                ].map((item, index) => (
                    <li key={index} className='text-base text-gray-700 hover:text-gray-800'>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            <Button onClick={handleGetStarted} size={'lg'}>Get Started</Button>
            <AuthPopup open={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
        </nav>
    );
};

export default Navbar;