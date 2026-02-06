import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function KissDay() {
    const [caught, setCaught] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Move the kiss randomly every 800ms
    useEffect(() => {
        if (caught) return;

        const moveKiss = () => {
            const x = Math.random() * (window.innerWidth - 200) - (window.innerWidth / 2 - 100);
            const y = Math.random() * (window.innerHeight - 200) - (window.innerHeight / 2 - 100);
            setPosition({ x, y });
        };

        const interval = setInterval(moveKiss, 800);
        moveKiss(); // Initial move

        return () => clearInterval(interval);
    }, [caught]);

    const handleCatch = () => {
        setCaught(true);
        setPosition({ x: 0, y: 0 }); // Center it
        confetti({
            particleCount: 150,
            spread: 180,
            colors: ['#ef4444', '#fca5a5']
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4 relative overflow-hidden">
            <h1 className="text-6xl text-red-600 font-bold mb-4 romantic-font z-10 pointer-events-none">Happy Kiss Day!</h1>

            {!caught && (
                <p className="text-xl text-red-400 mb-12 animate-bounce pointer-events-none">
                    Catch the flying kiss if you can!
                </p>
            )}

            <motion.div
                animate={{
                    x: position.x,
                    y: position.y,
                    scale: caught ? 2 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: caught ? 200 : 50,
                    damping: 10
                }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCatch}
                className="text-8xl cursor-pointer z-20 filter drop-shadow-xl select-none"
            >
                💋
            </motion.div>

            {caught && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 20 }}
                    className="text-center z-10 bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl border border-red-200 mt-8"
                >
                    <h2 className="text-3xl font-bold text-red-600 mb-2">Gotcha!</h2>
                    <p className="text-xl text-red-800">
                        Muah! Muah! Muah! <br />
                        Im yours forever, Sanya.
                    </p>
                </motion.div>
            )}
        </div>
    );
}
