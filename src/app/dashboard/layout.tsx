"use client";
import Header from '@/components/dashboard/header/header';
import Navigation from '@/components/dashboard/navigation/navigation';
import React, { ReactNode, useState } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
    const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);
    return (
        <main className='grid lg:grid-cols-5 min-h-screen max-lg:relative'>
            <Navigation responsiveMenu={responsiveMenu} setResponsiveMenu={setResponsiveMenu} />
            <div className='lg:col-span-4 bg-gradient-to-br from-blue-50 via-white to-green-50'>
                <Header setResponsiveMenu={setResponsiveMenu} />
                <div className='p-6'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;