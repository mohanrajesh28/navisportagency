import { motion } from 'motion/react';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    return (
        <main className="bg-white min-h-screen pt-40 pb-24 overflow-hidden text-zinc-900 transition-colors">
            <div className="container mx-auto px-6 md:px-12 max-w-[1800px]">

                {/* Header Section */}
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-brand-accent" />
                            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] font-mono">Get in Touch</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.85]">
                            Let's map out your <br />
                            <span className="italic font-extralight text-zinc-300">next transition.</span>
                        </h1>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Form Section */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
                                <FormField
                                    label="Who are you?"
                                    number="01"
                                    placeholder="Your Name *"
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    isFocused={focusedField === 'name'}
                                />

                                <FormField
                                    label="Where can we reach you?"
                                    number="02"
                                    placeholder="Your Email Address *"
                                    type="email"
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    isFocused={focusedField === 'email'}
                                />

                                <FormField
                                    label="How can we help?"
                                    number="03"
                                    placeholder="Brief Scope of Project *"
                                    onFocus={() => setFocusedField('subject')}
                                    onBlur={() => setFocusedField(null)}
                                    isFocused={focusedField === 'subject'}
                                />

                                <div className="group relative">
                                    <div className="flex items-center justify-between mb-4">
                                        <label className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
                                            04. Additional Details
                                        </label>
                                    </div>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your fleet, locations, or specific requirements..."
                                        className="w-full bg-transparent border-b border-zinc-100 py-6 text-xl md:text-2xl font-light focus:outline-none focus:border-brand-accent transition-all placeholder:text-zinc-300 resize-none"
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                                        className="absolute bottom-0 left-0 h-[2px] bg-brand-accent w-full origin-left transition-transform duration-500"
                                    />
                                </div>

                                <div className="pt-12">
                                    <motion.button
                                        whileHover={{ x: 10 }}
                                        className="group flex items-center gap-12 text-3xl font-medium tracking-tight text-zinc-900 transition-colors hover:text-brand-accent"
                                    >
                                        <span>Send Message</span>
                                        <div className="w-20 h-20 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500">
                                            <ArrowRight className="text-brand-dark group-hover:text-white transition-colors duration-500" size={32} />
                                        </div>
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-5">
                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="bg-zinc-50 p-12 lg:p-24 rounded-lg flex flex-col gap-24 h-full border border-zinc-100"
                        >
                            <section className="flex flex-col gap-12">
                                <header className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <Mail size={14} className="text-brand-accent" />
                                    </div>
                                    <h4 className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Direct Channels</h4>
                                </header>
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-zinc-300 text-[10px] uppercase tracking-widest font-bold">Inquiries</span>
                                        <a href="mailto:agency@navisagency.co" className="text-1xl md:text-2xl font-light hover:text-brand-accent transition-colors block leading-none tracking-tight">agency@navisagency.co</a>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-zinc-300 text-[10px] uppercase tracking-widest font-bold">Operations</span>
                                        <a href="tel:+17130000000" className="text-1xl md:text-2xl font-light hover:text-brand-accent transition-colors block leading-none tracking-tight">+1 (713) 000-0000</a>
                                    </div>
                                </div>
                            </section>

                            <section className="flex flex-col gap-12">
                                <header className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <MapPin size={14} className="text-brand-accent" />
                                    </div>
                                    <h4 className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">HQ Location</h4>
                                </header>
                                <address className="not-italic text-zinc-500 font-light text-xl leading-relaxed max-w-xs">
                                    Texas, USA
                                </address>
                            </section>

                            <section className="flex flex-col gap-12">
                                <header className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <Globe size={14} className="text-brand-accent" />
                                    </div>
                                    <h4 className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Digital Presence</h4>
                                </header>
                                <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
                                    <a href="#" className="w-fit border-b border-zinc-200 hover:border-brand-accent transition-all pb-2">LinkedIn</a>
                                    <a href="#" className="w-fit border-b border-zinc-200 hover:border-brand-accent transition-all pb-2">Twitter</a>
                                    <a href="#" className="w-fit border-b border-zinc-200 hover:border-brand-accent transition-all pb-2">Instagram</a>
                                </div>
                            </section>
                        </motion.aside>
                    </div>

                </div>
            </div>
        </main>
    );
}

interface FormFieldProps {
    label: string;
    number: string;
    placeholder: string;
    type?: string;
    onFocus: () => void;
    onBlur: () => void;
    isFocused: boolean;
}

function FormField({ label, number, placeholder, type = "text", onFocus, onBlur, isFocused }: FormFieldProps) {
    return (
        <div className="group relative">
            <div className="flex items-center justify-between mb-4">
                <label className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
                    {number}. {label}
                </label>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                className="w-full bg-transparent border-b border-zinc-100 py-6 text-xl md:text-3xl font-light focus:outline-none transition-all placeholder:text-zinc-300"
            />
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isFocused ? 1 : 0 }}
                className="absolute bottom-0 left-0 h-[2px] bg-brand-accent w-full origin-left transition-transform duration-500"
            />
        </div>
    );
}
