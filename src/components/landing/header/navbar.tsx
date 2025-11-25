"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex items-center gap-5'>
            <ul className='flex items-center gap-1'>
                {[
                    { label: 'Features', href: '#features' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'About', href: '#about' },
                ].map((item, index) => (
                    <li key={index} className='text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-500/5 duration-200 text-center rounded-full h-9 leading-9'>
                        <Link href={item.href} className='px-5'>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;