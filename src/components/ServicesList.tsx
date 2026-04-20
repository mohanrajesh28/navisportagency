import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: '01',
        title: 'Crew Change Logistics',
        desc: 'The epicenter of energy and logistics in the Gulf coast.',
        image: 'https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '02',
        title: 'COVID Testing & Health',
        desc: 'Strategic island access with century-long maritime heritage.',
        image: 'https://images.unsplash.com/photo-1631084336106-10984c17ff08?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '03',
        title: 'Accommodation',
        desc: 'A vital link in global energy exports and industrial growth.',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '04',
        title: 'Transportation Services',
        desc: 'Specialized focus on deep-water commerce and refining.',
        image: 'https://images.unsplash.com/photo-1766776964126-6892cecfb37f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '05',
        title: 'CBP & Immigration Request',
        desc: 'Unmatched scale in liquid bulk and container operations.',
        image: 'https://images.unsplash.com/photo-1576078361289-d7c4da40e7cd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default function ServicesList() {
    const [activeId, setActiveId] = useState<string | null>(null);

    // Using motion values for smooth tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleGlobalMouseMove);
        return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="services" className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto bg-white">
            <div className="flex flex-col gap-12 mb-24">
                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">Our Services</h3>
                <p className="text-3xl md:text-5xl font-light tracking-tight max-w-2xl leading-tight">
                    Offering services.
                </p>
            </div>

            <motion.div
                className="border-t border-zinc-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.2,
                        },
                    },
                }}
            >
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.33, 1, 0.68, 1],
                                },
                            },
                        }}
                        className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-zinc-100 cursor-pointer overflow-hidden z-10"
                        onMouseEnter={() => setActiveId(service.id)}
                        onMouseLeave={() => setActiveId(null)}
                    >
                        <div className="z-10 flex items-center gap-8 md:gap-16 group-hover:translate-x-4 transition-transform duration-500">
                            <span className="text-xs font-bold text-zinc-300 font-mono">{service.id}</span>
                            <h4 className="text-4xl md:text-7xl font-medium tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                                {service.title}
                            </h4>
                        </div>

                        <div className="z-10 mt-4 md:mt-0 text-zinc-400 md:text-right max-w-xs group-hover:-translate-x-4 transition-transform duration-500">
                            <p className="text-sm font-medium leading-relaxed">{service.desc}</p>
                        </div>

                        <div className="absolute inset-0 bg-zinc-50 z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </motion.div>
                ))}

                <motion.div
                    className="flex justify-end pt-12"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                ease: [0.33, 1, 0.68, 1],
                                delay: 0.5
                            },
                        },
                    }}
                >
                    <Link
                        to="/work"
                        className="flex items-center gap-6 group"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-900 group-hover:text-brand-accent transition-colors">More Services</span>
                        <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-all duration-300">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {activeId && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        style={{
                            position: 'fixed',
                            zIndex: 100,
                            left: mouseXSpring,
                            top: mouseYSpring,
                            x: '-50%',
                            y: '-50%',
                            pointerEvents: 'none'
                        }}
                        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
                        className="hidden md:block w-[300px] h-[400px] overflow-hidden rounded-lg shadow-2xl pointer-events-none"
                    >
                        <img
                            src={services.find(s => s.id === activeId)?.image}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
