import { motion } from "framer-motion";
import { useState } from "react";
import { PenTool } from "lucide-react";

export default function PromiseDay() {
    const [signed, setSigned] = useState(false);

    const promises = [
        "I promise to always make you smile.",
        "I promise to support your dreams.",
        "I promise to share my fries with you.",
        "I promise to listen to your rants.",
        "I promise to love you more every single day.",
        "I promise to always be by your side, Sanya."
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-sky-50 p-4 font-nunito">
            <h1 className="text-6xl text-sky-600 font-bold mb-8 romantic-font">Our Promise Contract</h1>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-sky-200 max-w-2xl w-full relative overflow-hidden">
                {/* Paper texture lines or decoration could go here */}
                <div className="absolute top-0 left-0 w-full h-2 bg-sky-400"></div>

                <div className="space-y-6 mb-12">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-start"
                        >
                            <input type="checkbox" checked readOnly className="mt-1.5 mr-3 accent-sky-500 w-5 h-5" />
                            <span className="text-lg md:text-xl text-slate-700 font-serif italic">{promise}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t-2 border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Promised By</p>
                        <div className="font-dancing text-3xl text-sky-600">Guffy</div>
                    </div>

                    <div className="text-center md:text-left w-full md:w-auto">
                        <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Accepted By</p>
                        {!signed ? (
                            <button
                                onClick={() => setSigned(true)}
                                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full transition-colors shadow-lg mx-auto md:mx-0"
                            >
                                <PenTool size={18} />
                                Sign Here
                            </button>
                        ) : (
                            <motion.div
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                className="font-dancing text-4xl text-sky-600 transform -rotate-6"
                            >
                                Sanya
                            </motion.div>
                        )}
                    </div>
                </div>

                {signed && (
                    <motion.div
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="border-8 border-green-600 rounded-full p-4 transform -rotate-12">
                            <span className="text-8xl font-black text-green-600 uppercase">Sealed</span>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
