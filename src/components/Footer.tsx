import Magnetic from './Magnetic';
import logo from '../assets/NAVIS LOGO_JPG.avif';
import vadaliLogo from '../assets/image.webp';

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-dark text-white py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
            <div className="max-w-[1800px] mx-auto w-full">
                <div className="flex flex-col gap-24">

                    {/* Top Row: Brand & CTA */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                        <div className="flex flex-col gap-4">
                            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em]">Get in touch</span>
                            <a href="mailto:agency@navisagency.co" className="text-3xl md:text-6xl font-medium tracking-tighter hover:text-brand-accent transition-colors duration-500">
                                agency@navisagency.co
                            </a>
                        </div>

                        <div className="flex flex-col gap-4 text-right md:items-end">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Follow us</span>
                            <div className="flex gap-6">
                                {['LinkedIn', 'Instagram', 'X'].map((social) => (
                                    <div key={social}>
                                        <Magnetic>
                                            <a href="#" className="text-sm font-medium hover:text-brand-accent transition-colors duration-300">
                                                {social}
                                            </a>
                                        </Magnetic>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Credits */}
                    <div className="flex flex-col lg:flex-row justify-between items-center pt-12 border-t border-white/5 gap-12">
                        {/* Left: Brand */}
                        <div className="flex items-center gap-6 lg:w-1/3">
                            <div className="w-10 h-10 border border-white/10 overflow-hidden flex items-center justify-center rounded-sm bg-white/5 shadow-inner">
                                <img src={logo} alt="Navisport" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-forum tracking-wide text-zinc-100">
                                Navisport Agency
                            </span>
                        </div>

                        {/* Middle: Developed By */}
                        <div className="flex flex-col items-center gap-2 lg:w-1/3">
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-500">Developed By</span>
                            <a href="https://vadali.in" target="_blank" rel="noopener noreferrer" className="group">
                                <div className="flex items-center px-4 py-1.5 rounded-full bg-white border border-white/10 hover:border-brand-accent/50 transition-all duration-700 shadow-xl">
                                    <img
                                        src={vadaliLogo}
                                        alt="Vadali.in"
                                        className="h-5 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </a>
                        </div>

                        {/* Right: Copyright */}
                        <div className="flex flex-col md:flex-row gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 lg:w-1/3 lg:justify-end">
                            <span>© 2026 All Rights Reserved</span>
                            <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-800" />
                            <div className="flex gap-8">
                                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
