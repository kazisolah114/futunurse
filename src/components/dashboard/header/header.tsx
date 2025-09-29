"use client";
import React from 'react';
import { useSession } from 'next-auth/react';

const Header = () => {
    const { data } = useSession();
    const user = data?.user;

    return (
        <header className='border-b pb-4 mb-4'>
            <div className='flex justify-end'>
                <h3 className='font-semibold'>{user?.name || "Guest"}</h3>
            </div>
        </header>
    );
};

export default Header;