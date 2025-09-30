"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { redirect } from 'next/navigation';

const Header = () => {
    const { data } = useSession();
    const user = data?.user;
    const userNameAbbr = user?.name ? user.name.split(' ').map(n => n[0]).join('') : "G";
    return (
        <header className='z-10 border-b bg-white p-4 w-full h-fit sticky top-0 left-0'>
            <div className='flex justify-end items-center gap-3'>
                <Avatar onClick={() => redirect("/dashboard/profile")} className='w-9 h-9 cursor-pointer'>
                    <AvatarImage src={user?.image as string} />
                    <AvatarFallback>{userNameAbbr}</AvatarFallback>
                </Avatar>
                {/* <h3 className=' text-sm'>{user?.name || "Guest"}</h3> */}
            </div>
        </header>
    );
};

export default Header;