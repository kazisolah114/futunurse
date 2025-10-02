"use client";
import { Button } from '@/components/ui/button';
import { Book, Home, LucideArrowLeft, Stethoscope, User, XCircle } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';

interface NavigationProps {
    responsiveMenu: boolean;
    setResponsiveMenu: Dispatch<SetStateAction<boolean>>
}

const Navigation = ({ responsiveMenu, setResponsiveMenu }: NavigationProps) => {
    const navs = [
        { name: 'Dashboard', href: '/dashboard', icon: <Home size={20} /> },
        { name: 'Care Plans', href: '/dashboard/care-plans', icon: <Stethoscope size={20} /> },
        { name: 'NCLEX Coach', href: '/dashboard/nclex', icon: <Book size={20} /> },
        { name: 'Profile', href: '/dashboard/profile', icon: <User size={20} /> },
    ]
    const pathname = usePathname();
    return (
        <nav className={`lg:col-span-1 p-4 max-h-screen sticky top-0 left-0 bg-teal-600 lg:rounded-r-3xl flex flex-col justify-between items-start max-lg:absolute max-lg:z-20 max-lg:w-full max-lg:h-full ${responsiveMenu ? '' : 'max-lg:hidden max-lg:opacity-0'}`}>
            <div className='w-full'>
                <div className='flex items-center justify-between pb-5 mb-5 border-b'>
                    <>
                        <Link href="/dashboard" className='flex items-center gap-2 text-white'><h2 className='font-bold text-3xl'>FutuNurse</h2></Link>
                    </>
                    <button onClick={() => setResponsiveMenu(false)} className='lg:hidden text-white'><XCircle size={35} /></button>
                </div>
                <ul className='flex flex-col gap-3 text-white font-medium'>
                    {navs.map((nav, index) => {
                        const isActive = nav.href === pathname;
                        return (
                            <li key={index} onClick={() => setResponsiveMenu(false)} className={`${isActive ? 'bg-white text-teal-600' : 'hover:bg-teal-500'} w-full rounded-lg px-3 `}>
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