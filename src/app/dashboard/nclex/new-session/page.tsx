import { NewSession } from '@/components/dashboard/nclex';
import React, { Suspense } from 'react';

const NewSessionPage = () => {
    return (
        <Suspense>
            <NewSession />
        </Suspense>
    );
};

export default NewSessionPage;