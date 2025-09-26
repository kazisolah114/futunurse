import React from 'react';
import Link from 'next/link';;
import Navbar from './navbar';

const Header = () => {
    return (
        <header className='header h-16 px-28 flex justify-between items-center bg-white border-b'>
            <Link href={"/"}><h2 className='font-bold text-3xl text-teal-600'>FutuNurse</h2></Link>
            <Navbar />
        </header>
    );
};

export default Header;