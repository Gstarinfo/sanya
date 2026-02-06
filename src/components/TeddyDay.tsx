import { motion } from "framer-motion";
import { useState } from "react";

export default function TeddyDay() {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 p-4 font-nunito">
            <motion.div
                animate={{
                    rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
                className="text-[150px] mb-8 drop-shadow-2xl cursor-pointer hover:scale-110 transition-transform"
            >
                🧸
            </motion.div>

            <h1 className="text-6xl text-amber-800 font-bold mb-6 romantic-font">Happy Teddy Day!</h1>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-amber-200 max-w-lg w-full text-center">
                <p className="text-2xl text-amber-900 font-medium mb-6">
                    I got you a virtual teddy bear! What should we name him?
                </p>

                {!submitted ? (
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Enter a cute name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:outline-none focus:border-amber-500 text-center text-lg text-amber-900 placeholder:text-amber-300"
                        />
                        <button
                            disabled={!name.trim()}
                            onClick={() => setSubmitted(true)}
                            className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold py-3 rounded-xl transition-colors shadow-md"
                        >
                            Name Him!
                        </button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <p className="text-3xl font-bold text-amber-600 romantic-font mb-2">
                            Welcome, {name}!
                        </p>
                        <p className="text-amber-800">
                            Now {name} will keep you company whenever I'm not around. Give him a big hug for me!
                        </p>
                    </motion.div>
                )}

                <p className="mt-8 text-amber-700 text-sm border-t border-amber-100 pt-4">
                    To my cuddly bear, Sanya.
                </p>
            </div>
        </div>
    );
}
