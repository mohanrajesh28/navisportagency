import { motion } from 'motion/react';
import { useRef } from 'react';

const ports = [
    { name: "Baytown" },
    { name: "Beaumont" },
    { name: "Bolivar Roads" },
    { name: "Corpus Christi" },
    { name: "Freeport" },
    { name: "Galveston" },
    { name: "Houston" },
    { name: "Pasadena" },
    { name: "Point Comfort" },
    { name: "Port Arthur" },
    { name: "Port Neches" },
    { name: "Texas City" }
];

export default function Hubs() {
    const container = useRef(null);

    return (
        <section ref={container} className="relative py-24 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(28,79,139,0.05)_0%,transparent_70%)]" />
                <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <div className="px-6 md:px-12 max-w-[1800px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col gap-4"
                    >
                        <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em]">Reach</span>
                        <h2 className="text-4xl md:text-8xl font-medium tracking-tighter leading-none">
                            Offering services in the <br /> <span className="italic font-extralight text-zinc-300">Texas Gulf.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="border-l border-zinc-100 pl-8 pb-4"
                    >
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {ports.map((port, i) => (
                        <motion.div
                            key={port.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                            className="group relative h-[450px] overflow-hidden flex flex-col justify-end p-8 bg-zinc-50 border border-zinc-100"
                        >
                            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0">
                                <img
                                    src={`https://images.unsplash.com/photo-1622449589142-7757caf37fb9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                    alt={port.name}
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-brand-dark/95 via-brand-dark/20 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-white group-hover:text-brand-accent transition-colors duration-500">
                                        {port.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-4 h-4 border-t border-r border-brand-accent" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-4 h-4 border-b border-l border-brand-accent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-24 py-6 border-y border-zinc-100 flex whitespace-nowrap overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-24 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300"
                >
                    <span>Husbandry Ops — V.04</span>
                    <span>Operational Readiness 100%</span>
                    <span>Secure Terminal Access</span>
                    <span>Husbandry Ops — V.04</span>
                    <span>Operational Readiness 100%</span>
                    <span>Secure Terminal Access</span>
                </motion.div>
            </div>
        </section>
    );
}
