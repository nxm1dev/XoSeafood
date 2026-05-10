import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Thực đơn', href: '#menu' },
    { label: 'Không gian', href: '#gallery' },
    { label: 'Review', href: '#reviews' },
    { label: 'Liên hệ', href: '#contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
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
                    ? 'bg-burgundy shadow-deep py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
                    <img
                        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/6b1b927c-ebc0-40.jpg"
                        alt="An Viên Logo"
                        className="h-12 w-auto object-contain"
                    />
                    <div className="hidden sm:block text-left">
                        <div className="font-serif text-gold text-xl leading-tight font-semibold">An Viên</div>
                        <div className="text-gold/70 text-xs tracking-widest uppercase font-sans">Restaurant & Coffee</div>
                    </div>
                </button>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="text-sm font-medium text-ivory/85 hover:text-gold transition-colors duration-200 tracking-wide font-sans relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:0982000000"
                        className="flex items-center gap-2 text-gold border border-gold/50 px-4 py-2 text-sm font-medium font-sans rounded hover:bg-gold/10 transition-all duration-200"
                    >
                        <Phone size={14} />
                        Gọi ngay
                    </a>
                    <button
                        onClick={() => scrollTo('#contact')}
                        className="bg-gold text-burgundy-dark px-5 py-2 text-sm font-semibold font-sans rounded hover:brightness-110 transition-all duration-200 shadow-gold"
                    >
                        Đặt bàn ngay
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-ivory p-2"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <div className="lg:hidden bg-burgundy border-t border-gold/20 px-6 py-6 flex flex-col gap-5 animate-fade-in">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="text-left text-ivory/90 text-base font-medium font-sans hover:text-gold transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-gold/20">
                        <a href="tel:0982000000" className="flex items-center gap-2 text-gold font-medium font-sans text-sm">
                            <Phone size={14} /> Gọi ngay
                        </a>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="bg-gold text-burgundy-dark px-5 py-3 text-sm font-semibold font-sans rounded w-full"
                        >
                            Đặt bàn ngay
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
