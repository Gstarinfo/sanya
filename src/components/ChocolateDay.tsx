import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ChocolateDay() {
    const [unwrapped, setUnwrapped] = useState(false);

    const handleUnwrap = () => {
        setUnwrapped(true);
        confetti({
            colors: ['#5d4037', '#8d6e63', '#d7ccc8', '#ffd700'],
            particleCount: 150,
            origin: { y: 0.6 }
        });
    };

    return (
        <div className="min-h-screen overflow-hidden relative flex flex-col items-center justify-center bg-gradient-to-br from-[#2e1c16] via-[#4e342e] to-[#2e1c16] text-white">

            {/* Floating Cocoa Beans Background Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animation: `float ${Math.random() * 10 + 10}s infinite linear`
                        }}
                    />
                ))}
            </div>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-12 text-[#d7ccc8] romantic-font drop-shadow-lg text-center px-4"
            >
                Happy Chocolate Day!
            </motion.h1>

            <div className="relative cursor-pointer group scale-75 md:scale-100 transition-transform duration-500 hover:scale-[0.8] md:hover:scale-105" onClick={handleUnwrap}>

                {/* Golden Wrapper */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: unwrapped ? 0 : 1,
                        rotate: unwrapped ? 15 : 0,
                        x: unwrapped ? 200 : 0,
                        y: unwrapped ? 50 : 0
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-lg shadow-2xl border-t border-yellow-200"
                    style={{ pointerEvents: unwrapped ? 'none' : 'auto' }}
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/foil.png')] opacity-30 mix-blend-overlay"></div>
                    <div className="text-center transform -rotate-2">
                        <span className="block text-5xl font-bold text-[#3e2723] tracking-wider drop-shadow-sm font-serif">ROYAL</span>
                        <span className="block text-2xl font-semibold text-[#5d4037] tracking-widest uppercase mt-1">Chocolate</span>
                    </div>

                    {/* Crinkle effect lines */}
                    <div className="absolute top-0 left-10 w-1 h-full bg-black/10 blur-[1px]"></div>
                    <div className="absolute top-0 right-10 w-1 h-full bg-white/20 blur-[1px]"></div>
                </motion.div>

                {/* Realistic Chocolate Bar */}
                <div className="w-80 h-48 bg-[#3E2723] rounded-lg shadow-2xl grid grid-cols-4 gap-1 p-2 border-b-4 border-r-4 border-[#251510]">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="relative bg-gradient-to-br from-[#5D4037] to-[#3E2723] rounded-sm shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden">
                            <div className="w-12 h-8 bg-[#4E342E] opacity-50 rounded-[4px] shadow-sm transform rotate-45"></div>
                            {/* Bevel highlight */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
                        </div>
                    ))}
                </div>

                {!unwrapped && (
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, -2, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white text-[#3e2723] px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap border-2 border-[#d7ccc8]"
                    >
                        Tap to Unwrap!
                    </motion.div>
                )}
            </div>

            <div className="h-24"></div> {/* Spacer */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-center p-8 bg-[#3e2723]/60 backdrop-blur-md rounded-3xl border border-[#8d6e63]/30 shadow-2xl max-w-xl mx-4 mt-8"
            >
                <p className="text-xl md:text-2xl leading-relaxed text-[#eceff1] font-serif italic">
                    {unwrapped
                        ? "“Just like this chocolate, you add the perfect sweetness to my life. I love you, Sanya! 🍬”"
                        : "“Sanya, I have a sweet surprise for you above...”"}
                </p>
            </motion.div>
        </div>
    );
}
