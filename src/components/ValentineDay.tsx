import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ValentineDay() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const handleYesClick = () => {
        setYesPressed(true);
        confetti({
            particleCount: 150,
            spread: 60,
            colors: ['#e11d48', '#fb7185', '#fff1f2']
        });
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure, Sanya?",
            "What if I asked really nicely?",
            "Pretty please",
            "With a chocolate rice cake on top",
            "What about a matcha frostie",
            "PLEASE POOKIE",
            "But :*(",
            "I am going to die",
            "Yep im dead",
            "ok ur talking to nathan's ghost",
            "please babe",
            ":((((",
            "PRETTY PLEASE",
            "Estoy muerto",
            "No :(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            {yesPressed ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center"
                >
                    <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="rounded-2xl shadow-2xl mb-8" />
                    <div className="text-4xl md:text-6xl font-bold text-rose-600 romantic-font">WOOHOOO!!! I love you Sanya!! ;))</div>
                    <p className="text-xl mt-4 text-rose-400">Best Valentine's Day Ever!</p>
                </motion.div>
            ) : (
                <>
                    <motion.img
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", repeat: Infinity, repeatType: "mirror", duration: 2 }}
                        className="h-[250px] rounded-xl shadow-lg mb-8"
                        src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                    />
                    <h1 className="my-4 text-5xl md:text-7xl romantic-font text-rose-600">Will you be my Valentine, Sanya?</h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        <button
                            className={`rounded-full bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-600 transition-colors shadow-lg`}
                            style={{ fontSize: yesButtonSize }}
                            onClick={handleYesClick}
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleNoClick}
                            className="rounded-full bg-red-500 px-8 py-4 font-bold text-white hover:bg-red-600 transition-colors shadow-lg text-xl"
                        >
                            {noCount === 0 ? "No" : getNoButtonText()}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
