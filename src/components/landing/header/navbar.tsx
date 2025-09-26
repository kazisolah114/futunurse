import React from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';

const Navbar = () => {
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
            <Button size={'lg'}>Get Started</Button>
        </nav>
    );
};

export default Navbar;