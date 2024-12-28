import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const ComingSoonPage = () => {
    const targetDate = new Date("january 15, 2025 00:00:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animation Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"></div>
            </div>

            <div className="max-w-4xl w-full backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="p-8 md:p-12 flex flex-col items-center text-center">
                    <div className="mb-8 flex items-center justify-center space-x-4">
                        <img
                            src="public/images/logo.png"
                            alt="Being Digital Logo"
                            className="h-12 w-auto"
                        />
                        <p className="text-blue-300 font-semibold text-3xl">Being Digital</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                        New Things Coming Soon
                    </h1>
                    <p className="text-gray-300 text-lg mb-12 max-w-2xl">
                        We're crafting a revolutionary platform that will transform your
                        digital presence. Join us on this journey to redefine digital
                        marketing excellence.
                    </p>
                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-6 mb-12 px-8 py-6 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map(({ label, value }, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="text-5xl font-extrabold text-white mb-2">
                                    {value.toString().padStart(2, "0")}
                                </div>
                                <div className="text-sm uppercase tracking-wide text-blue-200">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Social Media Links */}
                    <div className="flex gap-3 sm:gap-4 justify-center">
                        {[
                            {
                                Icon: FaFacebookF,
                                href: "https://www.facebook.com/tltechnologiespvtltd",
                            },
                            {
                                Icon: FaLinkedinIn,
                                href: "https://www.linkedin.com/company/tltechnologiespvtltd/",
                            },
                            {
                                Icon: FaInstagram,
                                href: "https://www.instagram.com/tltechnologiespvtltd/",
                            },
                            {
                                Icon: FaWhatsapp,
                                href: "https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0",
                            },
                        ].map(({ Icon, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                            >
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 text-gray-400 text-sm">
                        © 2024 TL Technologies. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
