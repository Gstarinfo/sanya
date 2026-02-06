import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ProposeDay() {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ec4899', '#f43f5e', '#ffffff'] // Pinks and reds
        });
    };

    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

    const moveNoButton = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoPosition({ x, y });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center overflow-hidden">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold text-pink-600 mb-12 romantic-font"
            >
                Happy Propose Day, Sanya!
            </motion.h1>

            {!accepted ? (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border-2 border-pink-100 relative"
                >
                    <div className="flex justify-center mb-6">
                        <Gem size={80} className="text-pink-500 animate-bounce" />
                    </div>

                    <p className="text-2xl text-gray-700 mb-8 font-serif">
                        I don't need a ring to promise you my forever, but I do need you.
                        Will you accept my love?
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={handleAccept}
                            className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transform transition hover:scale-105 shadow-lg text-lg md:text-xl"
                        >
                            Yes!
                        </button>

                        <motion.button
                            animate={{ x: noPosition.x, y: noPosition.y }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            onMouseEnter={moveNoButton}
                            onClick={moveNoButton}
                            className="bg-gray-400 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg md:text-xl cursor-not-allowed"
                        >
                            No
                        </motion.button>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="text-8xl mb-4">💍💖</div>
                    <h2 className="text-4xl text-pink-600 font-bold romantic-font">
                        Yay! You're stuck with me now!
                    </h2>
                </motion.div>
            )}
        </div>
    );
}
