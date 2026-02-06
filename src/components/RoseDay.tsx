import { motion, AnimatePresence } from "framer-motion";
import { Flower2 } from "lucide-react";
import { useState } from "react";

export default function RoseDay() {
    const [selectedRose, setSelectedRose] = useState<number | null>(null);

    const compliments = [
        "Your smile lights up my whole world, Sanya.",
        "You are the most beautiful flower in my garden.",
        "My love for you grows every single day."
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen text-center p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-8 romantic-font drop-shadow-sm">
                Happy Rose Day, Sanya!
            </h1>

            <p className="text-xl text-rose-800 mb-8">Pick a rose to reveal a message:</p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[0, 1, 2].map((index) => (
                    <div key={index} className="relative flex flex-col items-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="cursor-pointer"
                            onClick={() => setSelectedRose(index)}
                        >
                            <Flower2
                                size={100}
                                className={`transition-colors duration-500 ${selectedRose === index ? 'text-rose-500' : 'text-rose-300'}`}
                            />
                        </motion.div>
                        <AnimatePresence>
                            {selectedRose === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-28 w-48 bg-white/80 p-2 rounded-lg shadow-lg border border-rose-200 text-sm font-serif text-rose-900 z-10"
                                >
                                    {compliments[index]}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <p className="text-xl md:text-2xl text-rose-800 mt-4 max-w-lg font-semibold bg-white/50 p-6 rounded-2xl shadow-sm backdrop-blur-sm border border-rose-100">
                "Like a rose, you bring beauty and fragrance into my life.
                Here's to the start of a week as lovely as you."
            </p>
        </motion.div>
    );
}
