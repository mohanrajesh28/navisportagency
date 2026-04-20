import { motion } from 'motion/react';
import { Shield, Zap, Target } from 'lucide-react';

export default function About() {
    return (
        <main className="bg-white min-h-screen pt-40 pb-20 overflow-hidden text-zinc-900 transition-colors">
            <div className="container mx-auto px-6 md:px-12 max-w-[1800px]">

                {/* Header Section */}
                <div className="max-w-5xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-8 block font-mono">
                            The Navisport Legacy
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.85] mb-12">
                            About our<br />
                            <span className="italic font-extralight text-zinc-300">Business.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left: Narrative */}
                    <div className="lg:col-span-7 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <p className="text-3xl md:text-4xl font-light leading-snug tracking-tight mb-12">
                                At Navisport Agency Services, we understand that the maritime landscape is defined by fluid transitions and uncompromising timelines.
                            </p>
                            <div className="h-px w-20 bg-brand-accent mb-12" />
                            <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
                                For over a decade, we have been the silent engine behind successful fleet operations in the Texas Gulf. Our team doesn't just manage logistics; we engineer reliability through deep-water expertise and localized intelligence.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="bg-zinc-50 p-12 rounded-sm border border-zinc-100"
                        >
                            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-zinc-400">Our Mission</h3>
                            <p className="text-2xl font-medium italic text-brand-accent leading-normal">
                                "To provide the most efficient, transparent, and secure husbandry services in the maritime industry, ensuring our clients stay ahead of the tide."
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Visual & Stats */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative aspect-4/5 rounded-sm overflow-hidden border border-zinc-100 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=1200"
                                alt="Maritime Hub"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>

                {/* Values Section */}
                <section className="mt-40 pt-24 border-t border-zinc-100">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="md:col-span-1">
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Core Values</h2>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-16">
                            <ValueItem
                                icon={<Shield size={24} className="text-brand-accent" />}
                                title="Reliability"
                                desc="24/7 readiness to serve fleet transitions without compromise."
                            />
                            <ValueItem
                                icon={<Zap size={24} className="text-brand-accent" />}
                                title="Agility"
                                desc="Predicting industry shifts to keep your operations fluid."
                            />
                            <ValueItem
                                icon={<Target size={24} className="text-brand-accent" />}
                                title="Precision"
                                desc="Excellence in every coordinate and logistical detail."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

function ValueItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col gap-6"
        >
            <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 group">
                <div className="transition-transform duration-500 group-hover:scale-110">
                    {icon}
                </div>
            </div>
            <h4 className="text-2xl font-semibold tracking-tight">{title}</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
}
