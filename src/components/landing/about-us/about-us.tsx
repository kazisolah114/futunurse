import { Button } from '@/components/ui/button';
import { Check, CheckCircle, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Features = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const AboutUsSection = () => {
    const features: Features[] = [
        {
            icon: <Check size={15} />,
            title: 'AI Care Plans',
            description: 'Generate accurate NANDA care plans instantly with AI'
        },
        {
            icon: <CheckCircle size={15} />,
            title: 'NCLEX Coach',
            description: 'Smart, personalized NCLEX prep with adaptive quizzes'
        },
        {
            icon: <Stethoscope size={15} />,
            title: 'Clinical Scenarios',
            description: 'Practice real patient cases to build clinical confidence'
        },
    ];
    const bgColor = (index: number) => {
        switch (index) {
            case 1:
                return 'bg-green-600';
            case 2:
                return 'bg-blue-600';
            case 3:
                return 'bg-purple-600';
            default:
                return 'bg-gray-600';
        }
    }
    return (
        <section id={'about'} className="py-28">
            <div className="lg:px-32 max-sm:p-5 grid grid-cols-2 items-center justify-between gap-5 max-md:grid-cols-1 max-md:gap-8">

                <Image
                    src="/images/nurse-tablet.jpg"
                    alt="Futunurse About Image"
                    width={500}
                    height={500}
                    className="max-md:order-2 rounded-3xl w-120 h-120 max-sm:h-100 object-cover "
                />

                <div className="max-md:order-1">
                    <p className="mb-5 font-semibold text-lg text-teal-600 uppercase flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-teal-600 animate-pulse-dot"></span>
                        About Us
                    </p>

                    <h2 className="font-bold text-3xl text-gray-800 mb-3">
                        Helping Nursing Students Learn Smarter, Practice Better, and Pass with Confidence
                    </h2>

                    <p className="text-base text-gray-800 mb-5">
                        Futunurse is built for the next generation of nurses who deserve modern,
                        powerful tools—not outdated PDFs and endless note-taking. Our platform blends
                        intelligent automation with clinical accuracy to help students stay ahead in
                        school, prepare for exams, and feel confident in real patient care settings.
                    </p>

                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center max-sm:items-start gap-3">
                                <div className={`w-8 h-8 rounded ${bgColor(index + 1)} flex items-center justify-center text-white`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-gray-800 mb-0">{feature.title}</p>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Button size="lg" className="rounded-full mt-10">
                        Try Futunurse Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
