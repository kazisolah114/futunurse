import React from 'react';
import { CarePlan } from "@/components/dashboard/care-plans";

interface CarePlanProps {
    params: {
        slug: string
    };
}

const CarePlanPage = async ({ params }: CarePlanProps) => {
    const { slug } = await params;
    return (
        <CarePlan slug={slug} />
    );
};

export default CarePlanPage;