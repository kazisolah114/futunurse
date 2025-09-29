"use client";
import { Button } from '@/components/ui/button';
import { Book, Home, LucideArrowLeft, Stethoscope, User } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    const navs = [
        { name: 'Dashboard', href: '/dashboard', icon: <Home size={20} /> },
        { name: 'Care Plan Coach', href: '/dashboard/care-plan', icon: <Stethoscope size={20} /> },
        { name: 'NCLEX Coach', href: '/dashboard/nclex', icon: <Book size={20} /> },
        { name: 'Profile', href: '/dashboard/profile', icon: <User size={20} /> },
    ]
    return (
        <nav className='col-span-2 p-4 min-h-screen bg-teal-600 rounded-r-4xl flex flex-col justify-between items-start'>
            <ul className='flex flex-col gap-4 text-white font-medium'>
                {navs.map((nav, index) => (
                    <li key={index}><Link href={nav.href} className='flex items-center gap-2'>{nav.icon} {nav.name}</Link></li>
                ))}
            </ul>
            <Button onClick={() => signOut({ callbackUrl: '/' })} className='border w-full'><LucideArrowLeft size={20} /> Logout</Button>
        </nav>
    );
};

export default Navigation;