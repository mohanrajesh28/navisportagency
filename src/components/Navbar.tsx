import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Magnetic from './Magnetic';
import logo from '../assets/NAVIS LOGO_JPG.avif';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Services', href: '/work' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Force dark (white text) on landing hero, or light (dark text) when scrolled on white pages
    const isWhitePage = !['/'].includes(location.pathname);
    const useDarkTheme = isScrolled || isWhitePage;

    return (
        <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-12 py-5 z-50 transition-all duration-500 border-b ${useDarkTheme
            ? 'bg-white/80 backdrop-blur-md border-zinc-100 py-4 shadow-sm'
            : 'bg-transparent border-transparent'
            }`}>
            <Link to="/" className="flex items-center gap-3 group">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-lg ${useDarkTheme ? 'bg-brand-dark' : 'bg-brand-accent'
                    }`}>
                    <img src={logo} alt="Navisport" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <span className={`text-sm font-bold tracking-tight uppercase transition-colors duration-500 ${useDarkTheme ? 'text-zinc-900' : 'text-white'
                        }`}>
                        Navisport
                    </span>
                    <span className={`text-[10px] font-medium tracking-[0.2em] uppercase leading-none transition-colors duration-500 ${useDarkTheme ? 'text-zinc-400' : 'text-white/50'
                        }`}>
                        Agency
                    </span>
                </div>
            </Link>

            <div className="flex gap-4 md:gap-2 items-center">
                {navItems.map((item) => (
                    <div key={item.name}>
                        <Magnetic strength={0.25}>
                            <Link to={item.href} className={`relative text-xs font-bold uppercase tracking-[0.2em] group px-6 py-2 flex items-center gap-2 transition-colors duration-500 ${useDarkTheme ? 'text-zinc-900' : 'text-white'
                                }`}>
                                <span className="relative z-10 group-hover:text-brand-accent transition-colors duration-300">{item.name}</span>
                                <div className="w-1 h-1 bg-brand-accent rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                            </Link>
                        </Magnetic>
                    </div>
                ))}
            </div>
        </nav>
    );
}
