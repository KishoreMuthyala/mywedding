import { Calendar, Clock, Heart, Sparkles } from "lucide-react";
import heartImageSrc from "../assets/images/love-gif.gif";
import { Tab } from "../App";
import { useEffect, useState } from "react";

interface HomeProps {
    setActiveTab: (tab: Tab) => void;
}

const Home = ({ setActiveTab }: HomeProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const weddingDate = new Date("2025-04-18T20:34:00");

        const timer = setInterval(() => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();
            if (difference <= 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
            <p className="text-2xl font-heading text-white mb-6">
                We cordially invite you to celebrate the union of
            </p>
            <h1 className="text-4xl md:text-7xl font-cursive text-gold mb-6 animate-slide-up">
                Kishore{" "}
                <img
                    src={heartImageSrc}
                    alt="Heart"
                    className="inline-block w-20 h-20"
                />{" "}
                Saranya
            </h1>
            <p className="text-xl font-light text-white mb-4">
                as they embark on a beautiful journey together.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8 animate-slide-up">
                <div
                    onClick={() => {
                        setActiveTab("schedule");
                    }}
                    className="flex cursor-pointer items-center gap-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md"
                >
                    <Calendar className="w-6 h-6 text-yellow-300" />
                    <p className="text-xl text-white">April 18th, 2025</p>
                </div>
                <div
                    onClick={() => {
                        setActiveTab("schedule");
                    }}
                    className="flex cursor-pointer items-center gap-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md"
                >
                    <Clock className="w-6 h-6 text-yellow-300" />
                    <p className="text-xl text-white">8:34 PM</p>
                </div>
            </div>

            {timeLeft.days == 0 &&
            timeLeft.hours == 0 &&
            timeLeft.minutes == 0 &&
            timeLeft.seconds == 0 ? null : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds },
                    ].map(({ label, value }, index) => (
                        <div
                            key={label}
                            className="glass-card p-6 text-center animate-scale-in relative overflow-hidden group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="text-5xl md:text-6xl font-light mb-2">
                                {value < 10 ? "0" : ""}
                                {value}
                            </div>
                            <div className="text-sm uppercase tracking-widest text-primary-200">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <p className="text-xl text-white bg-opacity-20 p-4">
                Your presence will make our celebration even more special.
            </p>
        </div>
    );
};

export default Home;
