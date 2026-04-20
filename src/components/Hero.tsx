import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Globe } from 'lucide-react';

export default function Hero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <section ref={container} className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
            <motion.div
                style={{ y }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 w-full h-full z-0 overflow-hidden"
            >
                <img
                    src="https://images.unsplash.com/photo-1527314392553-2c7bded21b23?q=80&w=1974&auto=format&fit=crop"
                    alt="Navisport Agency"
                    className="w-full h-full object-cover scale-125"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay" />
            </motion.div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 24 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 pl-4 rounded-full border border-white/20 shadow-2xl group cursor-pointer"
                >
                    <div className="flex flex-col">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 mb-0.5">Located</span>
                        <span className="text-xs font-semibold tracking-tight text-white">Texas, USA</span>
                    </div>
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <Globe color="white" size={18} strokeWidth={1.5} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-0 w-full overflow-hidden pointer-events-none z-20">
                <motion.div
                    style={{ x }}
                    className="flex whitespace-nowrap text-[18vw] font-medium leading-none uppercase tracking-tighter text-white"
                >
                    <span>— Navisport Agency — Services — Husbandry — Logistics —</span>
                </motion.div>
            </div>
        </section>
    );
}
