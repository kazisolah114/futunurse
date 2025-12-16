import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-teal-600 text-white py-16 rounded-4xl">
            <div className="xl:px-28 lg:px-10 max-lg:px-5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Futunurse</h2>
                        <p className="text-sm text-gray-300">
                            AI-powered nursing education platform designed to help students think clinically, practice smarter, and pass exams with confidence.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <Youtube className="w-5 h-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2">
                            {[
                                'AI Care Plans',
                                'NCLEX-Style Questions',
                                'Clinical Reasoning',
                                'Progress Tracking',
                                'Personalized Study Plans',
                                'Exam Readiness'
                            ].map((feature) => (
                                <li key={feature}>
                                    <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                        {feature}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {[
                                'About Futunurse',
                                'Our Mission',
                                'For Nursing Students',
                                'Blog',
                                'Contact'
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <div>
                            <a
                                href="mailto:support@futunurse.com"
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                support@futunurse.com
                            </a>
                        </div>
                        <div>
                            <p className="text-sm text-gray-300">
                                Built for nursing students <br />
                                Worldwide
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Futunurse. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <ul className="flex space-x-4 text-sm">
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
