"use client";
import { Button } from '@/components/ui/button';
import { Book, Home, LucideArrowLeft, Stethoscope, User } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = () => {
    const navs = [
        { name: 'Dashboard', href: '/dashboard', icon: <Home size={20} /> },
        { name: 'Care Plans', href: '/dashboard/care-plans', icon: <Stethoscope size={20} /> },
        { name: 'NCLEX Coach', href: '/dashboard/nclex', icon: <Book size={20} /> },
        { name: 'Profile', href: '/dashboard/profile', icon: <User size={20} /> },
    ]
    const pathname = usePathname();
    return (
        <nav className='col-span-2 p-4 max-h-screen sticky top-0 left-0 bg-teal-600 rounded-r-3xl flex flex-col justify-between items-start'>
            <div className='w-full'>
                <Link href="/dashboard" className='flex items-center gap-2 text-white border-b pb-4 mb-4'><h2 className='font-bold text-3xl'>FutuNurse</h2></Link>
                <ul className='flex flex-col gap-3 text-white font-medium'>
                    {navs.map((nav, index) => {
                        const isActive = nav.href === pathname;
                        return (
                            <li key={index} className={`${isActive ? 'bg-white text-teal-600' : 'hover:bg-teal-500'} w-full rounded-lg px-3 `}>
                                <Link href={nav.href} className='flex items-center gap-2 py-2'>{nav.icon} {nav.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Button onClick={() => signOut({ callbackUrl: '/' })} className='border w-full'><LucideArrowLeft size={20} /> Logout</Button>
        </nav>
    );
};

export default Navigation;