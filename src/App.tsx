import React, { useState, useEffect } from "react";
import { Heart, Clock, MapPin, Calendar, Home, Clock3 } from "lucide-react";

type Tab = "home" | "schedule" | "venue";

function App() {
    const [activeTab, setActiveTab] = useState<Tab>("home");

    const renderContent = () => {
        switch (activeTab) {
            case "home":
                return (
                    <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
                        <p className="text-2xl font-heading text-white mb-6">
                            We cordially invite you to celebrate the union of
                        </p>
                        <h1 className="text-6xl md:text-7xl font-cursive text-gold mb-6 animate-slide-up">
                            Kishore{" "}
                            <Heart className="w-12 h-12 text-red-500 inline animate-pulse" />{" "}
                            Saranya
                        </h1>
                        <p className="text-xl font-light text-white mb-4">
                            as they embark on a beautiful journey together.
                        </p>
                        <div className="flex items-center justify-center gap-6 mb-8 animate-slide-up">
                            <div className="flex items-center gap-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md">
                                <Calendar className="w-6 h-6 text-yellow-300" />
                                <p className="text-xl text-white">
                                    April 18th, 2025
                                </p>
                            </div>
                            <div className="flex items-center gap-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md">
                                <Clock className="w-6 h-6 text-yellow-300" />
                                <p className="text-xl text-white">8:34 PM</p>
                            </div>
                        </div>
                        <p className="text-xl text-white bg-opacity-20 p-4">
                            Your presence will make our celebration even more
                            special.
                        </p>
                    </div>
                );

            case "schedule":
                return (
                    <div className="min-w-3.5 mx-auto animate-fade-in">
                        <div className="space-y-8">
                            {[
                                {
                                    time: "17 April 04:00 PM",
                                    event: "Haldi Ceremony",
                                },
                                {
                                    time: "18 April 7:30 PM",
                                    event: "Dinner",
                                },
                                { time: "18 April 9:30 PM", event: "Wedding" },
                                {
                                    time: "20 April 11:00 AM",
                                    event: "Reception",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 p-6 bg-gray-50 bg-opacity-80 rounded-lg shadow-md animate-fade-in" // Added bg-opacity-80
                                    style={{
                                        animationDelay: `${index * 0.3}s`, // Delay for staggered animation
                                        animationFillMode: "both", // Ensures animation stays applied
                                    }}
                                >
                                    <div className="flex-shrink-0">
                                        <span
                                            className="inline-block p-3 bg-primary-200 text-white rounded-full"
                                            aria-label="Event Time"
                                        >
                                            🕒
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">
                                            {item.event}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "venue":
                return (
                    <div className="h-screen flex flex-col justify-center items-center text-center animate-fade-in mx-auto">
                        <h2 className="text-4xl md:text-5xl font-heading text-white mb-8 animate-slide-up">
                            The Venue
                        </h2>
                        <div className="glass-card p-6 md:p-8 bg-white bg-opacity-10 rounded-lg shadow-lg animate-scale-in max-w-3xl w-full">
                            <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-primary-300 animate-bounce-in" />
                            <h3
                                className="text-2xl md:text-3xl font-heading text-primary-200 mb-4 animate-slide-up"
                                style={{ animationDelay: "0.2s" }}
                            >
                                Sri Bala Venkateswara Swamy Temple
                            </h3>
                            <p
                                className="text-base md:text-lg text-primary-100 mb-4 animate-fade-in"
                                style={{ animationDelay: "0.3s" }}
                            >
                                Nidamarru, Nidamarru Mandal, Andhra Pradesh,
                                534195
                            </p>
                            <p
                                className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 animate-fade-in"
                                style={{ animationDelay: "0.4s" }}
                            >
                                Join us at this serene and sacred location to
                                celebrate our special day amidst blessings and
                                love.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    className="glass-card p-4 md:p-6 text-left bg-white bg-opacity-10 rounded-lg shadow-md animate-slide-left"
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    <h4 className="text-lg md:text-xl font-heading text-primary-200 mb-2">
                                        Directions
                                    </h4>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0915505230028!2d81.41611917560058!3d16.722283221623734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3636056413d1d3%3A0xf3ec43d00f1d25de!2sBala%20Venkateswara%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1743239919242!5m2!1sen!2sin"
                                        width="100%"
                                        height="150"
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <div
                                    className="glass-card p-4 md:p-6 text-left bg-white bg-opacity-10 rounded-lg shadow-md animate-slide-left"
                                    style={{ animationDelay: "0.5s" }}
                                >
                                    <h4 className="text-lg md:text-xl font-heading text-primary-200 mb-2">
                                        Reception
                                    </h4>
                                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                        At our home in Nidamarru, Andhra
                                        Pradesh. Enjoy a warm and joyous evening
                                        with family and friends.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('love.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="min-h-screen flex flex-col items-center justify-start text-white px-4 py-8">
                <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-400 via-primary-400 to-cyan-400 backdrop-blur-md z-50 shadow-lg">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="flex justify-center space-x-8 py-4">
                            {[
                                {
                                    id: "home" as Tab,
                                    icon: Home,
                                    label: "Home",
                                },
                                {
                                    id: "schedule" as Tab,
                                    icon: Clock3,
                                    label: "Schedule",
                                },
                                {
                                    id: "venue" as Tab,
                                    icon: MapPin,
                                    label: "Venue",
                                },
                            ].map(({ id, icon: Icon, label }) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                                        activeTab === id
                                            ? "bg-white text-primary-500 shadow-md scale-110"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="hidden md:inline text-sm font-medium tracking-wide">
                                        {label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>

                <div
                    style={{ height: "calc(100vh - 192px)" }}
                    className="mt-32 w-full flex items-center"
                >
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default App;
