import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Thực đơn', href: '#menu' },
    { label: 'Không gian', href: '#gallery' },
    { label: 'Review', href: '#reviews' },
    { label: 'Liên hệ', href: '#contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-ocean-dark/97 backdrop-blur-md shadow-deep py-2'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-coral/60 group-hover:border-coral transition-colors duration-300 shadow-coral">
                        <img
                            src="/img/logo.jpg"
                            alt="Xô Seafood Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <div className="font-serif text-white text-xl leading-tight font-semibold tracking-wide">
                            XÔ <span className="text-coral">Seafood</span>
                        </div>
                        <div className="text-white/55 text-xs tracking-widest uppercase font-sans">Hải sản · Hà Nội</div>
                    </div>
                </button>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="text-sm font-medium text-white/80 hover:text-coral transition-colors duration-200 tracking-wide font-sans relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full rounded-full" />
                        </button>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:0965242066"
                        className="flex items-center gap-2 text-coral border border-coral/50 px-4 py-2 text-sm font-medium font-sans rounded-lg hover:bg-coral/10 transition-all duration-200"
                    >
                        <Phone size={14} />
                        0965 242 066
                    </a>
                    <button
                        onClick={() => scrollTo('#contact')}
                        className="bg-coral text-white px-5 py-2 text-sm font-semibold font-sans rounded-lg hover:brightness-110 transition-all duration-200 shadow-coral"
                    >
                        Đặt bàn ngay
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <div className="lg:hidden bg-ocean-dark/98 backdrop-blur-md border-t border-coral/20 px-6 py-6 flex flex-col gap-5 animate-fade-in">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="text-left text-white/85 text-base font-medium font-sans hover:text-coral transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-coral/20">
                        <a href="tel:0965242066" className="flex items-center gap-2 text-coral font-medium font-sans text-sm">
                            <Phone size={14} /> 0965 242 066
                        </a>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="bg-coral text-white px-5 py-3 text-sm font-semibold font-sans rounded-lg w-full"
                        >
                            Đặt bàn ngay
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
