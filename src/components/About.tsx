import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const phrase = "Navis Port Agency Services exists to solve the critical issues our clients face, both large and small. Our unique approach is not only what differentiates us, but also what makes us successful.";
    const words = phrase.split(" ");

    return (
        <section ref={container} id="about" className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto overflow-hidden">
            <div className="flex flex-col gap-4 mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent"
                >
                    Agency Services
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-2xl md:text-4xl tracking-tight text-zinc-300 italic font-light"
                >
                    EXCEEDING YOUR EXPECTATIONS
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-8 flex flex-col gap-12">
                    <div className="flex flex-wrap column-gap-3 row-gap-1">
                        {words.map((word, i) => (
                            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                                {word}
                            </Word>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Link to="/about" className="flex items-center gap-6 group w-fit">
                            <div className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500">
                                <span className="text-2xl group-hover:text-white transition-colors">→</span>
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest group-hover:text-brand-accent transition-colors">Our Full History</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-end gap-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg text-zinc-500 font-light leading-relaxed"
                    >
                        We provide a broad range of services and solutions to help organizations facilitate change, achieve their vision and optimize performance and productivity.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number], key?: number }) {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative mr-3 mb-1">
            <motion.span
                className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900"
                style={{ opacity }}
            >
                {children}
            </motion.span>
        </span>
    );
}
