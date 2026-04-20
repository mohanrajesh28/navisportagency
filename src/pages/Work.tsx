import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';
import { LayoutGrid, List } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'Crew Change Logistics',
        desc: 'Seamless end-to-end coordination for vessel personnel transitions.',
        image: 'https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '02',
        title: 'COVID Testing & Health',
        desc: 'Testing and vaccination coordination for safe fleet operations.',
        image: 'https://images.unsplash.com/photo-1624957485444-8bad55f0d395?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '03',
        title: "Accommodation's",
        desc: 'Curated lodging solutions for crew comfort and proximity to port.',
        image: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '04',
        title: 'Transportation Services',
        desc: 'Reliable ground logistics for crew and technical specialist transfers.',
        image: 'https://images.unsplash.com/photo-1766776964126-6892cecfb37f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '05',
        title: 'CBP & Immigration Request',
        desc: 'Expert handling of all Customs and Border Protection formalities.',
        image: 'https://images.unsplash.com/photo-1576078361289-d7c4da40e7cd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '06',
        title: 'Guards Services Coordination',
        desc: 'Securing vessel and port zones with professional watch keeping.',
        image: 'https://images.unsplash.com/photo-1562154535-45506ddad933?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '07',
        title: 'D&A Testing Coordination',
        desc: 'Managed drug and alcohol screening for regulatory compliance.',
        image: 'https://images.unsplash.com/photo-1629330595593-ab7146bc82c1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '08',
        title: 'Crew Medical Care',
        desc: '24/7 access to medical attention and emergency evacuation services.',
        image: 'https://images.unsplash.com/photo-1758204054604-46519dfe8cf3?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '09',
        title: 'Crew Shopping',
        desc: 'Providing essential goods and local shopping assistance for seafarers.',
        image: 'https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '10',
        title: 'Mail & Package Delivery',
        desc: 'Synchronized sorting and dispatch of parcels to vessels in port.',
        image: 'https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '11',
        title: 'Local Procurement Services',
        desc: 'Sourcing specialized parts and supplies from trusted local vendors.',
        image: 'https://images.unsplash.com/photo-1593617762209-00636c2ca9c6?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '12',
        title: 'Spares & Provision Delivery',
        desc: 'Coordination of lube oils, stores, and vital catering provisions.',
        image: 'https://images.unsplash.com/photo-1733970533747-96dbb5db5097?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '13',
        title: 'Air Freight Coordination',
        desc: 'Global logistics links to move urgent air cargo and technical spares.',
        image: 'https://images.unsplash.com/photo-1754388088242-9444d5d66710?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '14',
        title: 'Launch Services',
        desc: 'Reliable water-borne transport for pilots, surveyors, and crew.',
        image: 'https://images.unsplash.com/photo-1760887136964-b8ee72188414?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '15',
        title: 'Cash to Master',
        desc: 'Secure and timely delivery of vessel funds and master cash requirements.',
        image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: '16',
        title: 'Inspection Coordination',
        desc: 'Pre-purchase, vetting, and safety inspections and certifications.',
        image: 'https://images.unsplash.com/photo-1737874960921-d1205a4f55da?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default function Work() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    // Smooth cursor tracking
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
        <div className="bg-white pt-40 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto min-h-screen">
            <div className="flex flex-col gap-12 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="flex flex-col gap-6"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">Services</p>
                    <h1 className="text-6xl md:text-9xl font-medium tracking-tighter leading-none">
                        Husbandry.
                    </h1>
                </motion.div>
                <p className="text-xl md:text-2xl font-light text-zinc-500 max-w-2xl leading-relaxed">
                    Providing <span className="font-semibold text-brand-dark">unmatched expertise</span> across every facet of maritime logistics.
                </p>
            </div>

            {/* View Toggle */}
            <div className="flex justify-end mb-16">
                <div className="flex bg-zinc-50 p-1 rounded-full border border-zinc-100">
                    <button
                        onClick={() => setViewMode('list')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${viewMode === 'list' ? 'bg-white shadow-sm text-brand-dark' : 'text-zinc-400 hover:text-zinc-600'}`}
                    >
                        <List size={16} />
                        <span>List</span>
                    </button>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${viewMode === 'grid' ? 'bg-white shadow-sm text-brand-dark' : 'text-zinc-400 hover:text-zinc-600'}`}
                    >
                        <LayoutGrid size={16} />
                        <span>Grid</span>
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {viewMode === 'list' ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col border-t border-zinc-100"
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.05 * i }}
                                onMouseEnter={() => setActiveId(project.id)}
                                onMouseLeave={() => setActiveId(null)}
                                className="group relative flex flex-col md:flex-row items-center justify-between py-12 border-b border-zinc-100 cursor-pointer overflow-hidden"
                            >
                                <div className="z-10 flex items-center gap-8 md:gap-16 group-hover:translate-x-6 transition-transform duration-500">
                                    <span className="text-xs font-mono text-zinc-300 font-bold">{project.id}</span>
                                    <h4 className="text-3xl md:text-7xl font-medium tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                                        {project.title}
                                    </h4>
                                </div>

                                <div className="z-10 mt-4 md:mt-0 text-zinc-400 md:text-right max-w-sm group-hover:-translate-x-6 transition-transform duration-500">
                                    <p className="text-sm font-medium leading-relaxed">{project.desc}</p>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 top-0 bg-zinc-900 z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.05 * i }}
                                className="group flex flex-col gap-8"
                            >
                                <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono text-zinc-300 font-bold">{project.id}</span>
                                        <h3 className="text-3xl font-medium tracking-tight group-hover:text-brand-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-zinc-500 font-light leading-relaxed border-l-2 border-brand-accent pl-6">
                                        {project.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Preview Image (List Mode Only) */}
            <AnimatePresence>
                {activeId && (viewMode === 'list') && (
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
                        className="hidden md:block w-[350px] h-[450px] overflow-hidden rounded-lg shadow-2xl pointer-events-none"
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <motion.img
                                src={projects.find(p => p.id === activeId)?.image}
                                alt="Preview"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, duration: 0.5, ease: "backOut" }}
                                    className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest shadow-xl"
                                >
                                    View
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
