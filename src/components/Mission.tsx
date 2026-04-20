import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Mission() {
    return (
        <section className="flex flex-col lg:flex-row h-auto lg:h-screen bg-white">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="relative w-full lg:w-1/2 h-[50vh] lg:h-full overflow-hidden"
            >
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Navisport Fleet"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay" />
            </motion.div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="max-w-xl flex flex-col gap-12 z-10"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent">
                            How can we help?
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-medium tracking-tighter">
                            Achieving Your Goals
                        </h3>
                    </div>

                    <div className="flex flex-col gap-6 text-lg text-zinc-600 font-light leading-relaxed">
                        <p>
                            At Navis Port Agency Services, we combine our insights, skills and passion of the industry to work with our customers and get them the best results.
                        </p>
                        <p>
                            We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best to ensure we are one of them. We then strategize using smart tools and global resources in order to understand the implications of every choice our clients can make.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-6 group"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                            Contact us
                        </span>
                        <Magnetic strength={0.3}>
                            <Link to="/contact" className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-xl">
                                <ArrowUpRight color="white" size={28} strokeWidth={1.5} />
                            </Link>
                        </Magnetic>
                    </motion.div>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-50/50 text-[15vw] font-bold uppercase z-0 pointer-events-none whitespace-nowrap">
                    NAVIGATE
                </div>
            </div>
        </section>
    );
}
