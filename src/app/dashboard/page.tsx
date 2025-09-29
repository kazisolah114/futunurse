import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Dashboard = async () => {
    const session = await getServerSession(authOptions);
    console.log("session:", session);
    return (
        <div>
            Welcome Dashboard
        </div>
    );
};

export default Dashboard;