import Header from '@/components/dashboard/header/header';
import Navigation from '@/components/dashboard/navigation/navigation';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
    return (
        <main className='grid grid-cols-12 min-h-screen'>
            <Navigation />
            <div className='col-span-10'>
                <Header />
                <div className='p-4'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;