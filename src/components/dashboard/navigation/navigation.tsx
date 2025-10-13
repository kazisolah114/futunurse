"use client";
import { Button } from '@/components/ui/button';
import { ArrowBigLeft, ArrowBigRight, ArrowRightIcon, Book, Home, LucideArrowLeft, LucideArrowLeftSquare, MoveLeft, PanelLeftRightDashedIcon, PanelRight, Stethoscope, User, XCircle } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { redirect } from 'next/navigation';
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
    const { data } = useSession();
    const user = data?.user;
    const userNameAbbr = user?.name ? user.name.split(' ').map(n => n[0]).join('') : "G";
    return (
        <nav className={`lg:col-span-1 p-4 max-h-screen sticky top-0 left-0 bg-teal-600 flex flex-col justify-between items-start max-lg:absolute max-lg:z-20 max-lg:w-full max-lg:h-full ${responsiveMenu ? '' : 'max-lg:hidden max-lg:opacity-0'}`}>
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
                                <Link href={nav.href} className='flex items-center gap-2 py-3'>{nav.icon} {nav.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='w-full h-12 px-3 flex items-center justify-between rounded-md bg-teal-700/50 hover:bg-teal-700/60 duration-150 ease-in-out'>
                <Avatar onClick={() => redirect("/dashboard/profile")} className='w-9 h-9 cursor-pointer'>
                    <AvatarImage src={user?.image as string} />
                    <AvatarFallback>{userNameAbbr}</AvatarFallback>
                </Avatar>
                <Button onClick={() => signOut({ callbackUrl: '/' })} className='flex-1 justify-end bg-transparent hover:bg-transparent group'>Sign Out <ArrowRightIcon className='relative group-hover:left-1' /></Button>
            </div>
        </nav>
    );
};

export default Navigation;