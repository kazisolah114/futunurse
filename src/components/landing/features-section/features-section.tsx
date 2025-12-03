import { Brain, ClipboardPlus, GraduationCap, Stethoscope, CheckCircle, Shield, ArrowUpRight } from "lucide-react";
import React from "react";

const features = [
    {
        icon: <Brain size={30} />,
        title: "AI Care Plan Generator",
        description: "Create accurate NANDA care plans in seconds using intelligent automation."
    },
    {
        icon: <GraduationCap size={30} />,
        title: "NCLEX Smart Coach",
        description: "Adaptive quizzes and personalized study routes built around your weak areas."
    },
    {
        icon: <Stethoscope size={30} />,
        title: "Clinical Skills Practice",
        description: "Hands-on scenarios that simulate real patient interactions and skill checks."
    },
    {
        icon: <ClipboardPlus size={30} />,
        title: "Drug & Lab Companion",
        description: "Instant explanations of drugs, labs, diagnostics, and safe nursing considerations."
    },
    {
        icon: <CheckCircle size={30} />,
        title: "Daily Study Planner",
        description: "Organize your study schedule with reminders and progress tracking."
    },
    {
        icon: <Shield size={30} />,
        title: "Evidence‑Based Content",
        description: "All materials follow ANA, NANDA, and NCLEX standards for accuracy."
    }
];

const FeaturesSection = () => {
    return (
        <section id={'features'} className="py-28 bg-gray-50">
            <div className="lg:px-32 max-sm:p-3">
                <p className="mb-10 font-semibold text-lg text-teal-600 uppercase flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-teal-600 animate-pulse-dot"></span>
                    Futunurse Features
                </p>

                <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {features.map((f, i) => (
                        <div key={i} className="relative bg-white hover:bg-teal-600 group duration-300 ease-in-out rounded-2xl text-left cursor-pointer hover:shadow-lg">
                            <div className="p-5 border-b-gray-50 border-b">
                                <div className="mb-5 text-teal-600 group-hover:text-white">{f.icon}</div>
                                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-white mb-1">{f.title}</h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-100">{f.description}</p>
                            </div>
                            <div className="flex justify-between ">
                                <p className="px-5 py-3 text-gray-700 group-hover:text-gray-100 flex items-center gap-2"><span className="w-2 h-2 bg-teal-600 group-hover:bg-white rounded-full"></span> Explore</p>
                                <div className="flex items-center justify-center bg-gray-50 group-hover:bg-transparent w-10 h-10 rounded-full absolute bottom-1 right-1 group">
                                    <ArrowUpRight className=" text-gray-700 group-hover:text-gray-100" size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;