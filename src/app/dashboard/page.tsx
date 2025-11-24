import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { Dashboard } from '@/components/dashboard/dashboard';

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);
    return (
        <Dashboard user={session?.user} />
    );
};

export default DashboardPage;