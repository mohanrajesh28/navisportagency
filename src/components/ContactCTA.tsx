import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function ContactCTA() {
    return (
        <section className="bg-brand-dark text-white pt-40 pb-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1800px] mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <Link to="/contact" className="group">
                            <h6 className="text-[12vw] sm:text-[10vw] font-medium leading-[0.9] tracking-tighter text-white group-hover:text-brand-accent transition-colors duration-500">
                                Contact us
                            </h6>
                        </Link>
                    </motion.div>

                    <div className="translate-y-4">
                        <Magnetic strength={0.2}>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Link to="/contact" className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-brand-accent flex items-center justify-center hover:bg-white transition-colors duration-500 group">
                                    <ArrowUpRight className="text-white group-hover:text-brand-dark transition-colors duration-500" size={48} strokeWidth={1} />
                                </Link>
                            </motion.div>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </section>
    );
}
