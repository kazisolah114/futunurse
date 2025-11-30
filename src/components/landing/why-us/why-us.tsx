import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const WhyUsSection = () => {
    return (
        <section className='py-20'>
            <div className='lg:px-32 grid grid-cols-2 items-center justify-between gap-5 max-md:grid-cols-1 max-md:gap-8'>
                <Image src={'/images/nurse-laptop.avif'} alt={'whyus-img'} width={500} height={500} className='max-md:order-2 rounded-full w-100 h-100 object-cover' />
                <div className='max-md:order-1'>
                    <p className='mb-5 font-semibold text-lg text-teal-600 uppercase flex items-center gap-3'>
                        <span className='w-3 h-3 rounded-full bg-teal-600 animate-pulse-dot'></span>
                        Why Us
                    </p>
                    <h2 className='font-bold text-3xl text-gray-800 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit aliquam praesentium impedit quam eos officia.</h2>
                    <p className='text-base text-gray-800 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla molestias facere. Reiciendis omnis dolor ad molestiae consequatur id repellat et, alias, exercitationem illum architecto asperiores perspiciatis praesentium optio ipsum.</p>
                    <Button size={'lg'} className='rounded-full'>Try Futunurse Now</Button>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;