import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
    return (
        <>
            { children }
        </>
    );
};

export default DashboardLayout;