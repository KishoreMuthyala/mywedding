import React from "react";

const Schedule = () => {
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
                    { time: "18 April 8:34 PM", event: "Wedding" },
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
                            <p className="text-sm text-gray-600">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
