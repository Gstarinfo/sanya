import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";

export default function HugDay() {
    const [hugging, setHugging] = useState(false);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ scale: 1 });
    }, []);

    const startHug = () => {
        setHugging(true);
        controls.start({ scale: 1.2 });

        intervalRef.current = window.setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    completeHug();
                    return 100;
                }
                return prev + 2;
            });
        }, 50);
    };

    const endHug = () => {
        setHugging(false);
        controls.start({ scale: 1 });
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (progress < 100) setProgress(0); // Reset if not complete
    };

    const completeHug = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#a855f7', '#d8b4fe', '#ffffff']
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4 overflow-hidden select-none">
            <h1 className="text-6xl text-purple-600 font-bold mb-8 romantic-font text-center">Happy Hug Day!</h1>

            <div className="relative mb-12">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={controls}
                    className="text-9xl cursor-pointer"
                    onMouseDown={startHug}
                    onMouseUp={endHug}
                    onMouseLeave={endHug}
                    onTouchStart={startHug}
                    onTouchEnd={endHug}
                >
                    🤗
                </motion.div>

                {/* Progress Ring or Bar */}
                {hugging && progress < 100 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-purple-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-purple-600 transition-all duration-75"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                )}
            </div>

            {progress >= 100 ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center bg-white p-6 rounded-2xl shadow-lg border border-purple-200"
                >
                    <h2 className="text-3xl font-bold text-purple-700 mb-2">Hug Sent!</h2>
                    <p className="text-purple-900">
                        A warm, tight squeeze is on its way to you, Sanya!
                    </p>
                </motion.div>
            ) : (
                <p className="text-2xl text-purple-800 text-center max-w-lg animate-pulse">
                    {hugging ? "Keep holding..." : "Press and hold the emoji to send a warm hug!"}
                </p>
            )}
        </div>
    );
}
