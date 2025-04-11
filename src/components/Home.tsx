import { Calendar, Clock, Heart } from "lucide-react";
import heartImageSrc from "../assets/images/love-gif.gif";
import { Tab } from "../App";

interface HomeProps {
    setActiveTab: (tab: Tab) => void;
}

const Home = ({ setActiveTab }: HomeProps) => {
    return (
        <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
            <p className="text-2xl font-heading text-white mb-6">
                We cordially invite you to celebrate the union of
            </p>
            <h1 className="text-6xl md:text-7xl font-cursive text-gold mb-6 animate-slide-up">
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
            <p className="text-xl text-white bg-opacity-20 p-4">
                Your presence will make our celebration even more special.
            </p>
        </div>
    );
};

export default Home;
