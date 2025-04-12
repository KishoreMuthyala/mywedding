import React, { useState, useEffect } from "react";
import { MapPin, Home as HomeIcon, Clock3 } from "lucide-react";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import bgImageSrc from "./assets/images/love.png";

export type Tab = "home" | "schedule" | "venue";

function App() {
    const [activeTab, setActiveTab] = useState<Tab>("home");

    const renderContent = () => {
        switch (activeTab) {
            case "home":
                return <Home setActiveTab={setActiveTab} />;
            case "schedule":
                return <Schedule />;
            case "venue":
                return <Venue />;
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${bgImageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="min-h-screen flex flex-col items-center justify-start text-white px-4 py-8 mt-[80px]">
                <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-400 via-primary-400 to-cyan-400 backdrop-blur-md z-50 shadow-lg">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="flex justify-center space-x-8 py-4">
                            {[
                                {
                                    id: "home" as Tab,
                                    icon: HomeIcon,
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

                <div className="w-full flex items-center justify-center mt-[80px]">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default App;
