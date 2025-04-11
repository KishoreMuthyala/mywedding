import { MapPin } from "lucide-react";

const Venue = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center animate-fade-in mx-auto">
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
                    Nidamarru, Nidamarru Mandal, Andhra Pradesh, 534195
                </p>
                <p
                    className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                >
                    Join us at this serene and sacred location to celebrate our
                    special day amidst blessings and love.
                </p>

                <div className="">
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
                            height="100"
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Venue;
