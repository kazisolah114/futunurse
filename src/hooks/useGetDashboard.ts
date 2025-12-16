"use client";
import axios from "axios";
import { useEffect, useState } from "react"

export const useGetDashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    useEffect(() => {
        const handleFetchDashboard = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/dashboard`);
                console.log(response.data);
                setDashboardData(response.data?.dashboard)
            } catch (error) {
                console.log(error)
            }
        };
        handleFetchDashboard();
    }, [])
    return dashboardData;
}