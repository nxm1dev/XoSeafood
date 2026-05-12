import { ChevronDown, Star, Car, Baby, Utensils, MapPin, Flame, Fish } from 'lucide-react';

const badges = [
    { icon: Fish, label: 'Hải sản tươi sống' },
    { icon: Flame, label: 'Lẩu cua cốm bầu' },
    { icon: Utensils, label: 'Đặc sản miền biển' },
    { icon: Car, label: 'Chỗ đỗ xe rộng' },
    { icon: Baby, label: 'Phù hợp gia đình' },
];

export default function HeroSection() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/img/background.png"
                    alt="Hải sản Xô Seafood"
                    className="w-full h-full object-cover"
                />
                {/* Multi-layer gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/95 via-ocean-dark/75 to-ocean/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/80 via-ocean-dark/40 to-transparent" />
            </div>

            {/* Floating bubbles decoration */}
            <div className="absolute top-1/4 right-16 w-72 h-72 rounded-full bg-ocean-light/6 blur-3xl z-0 pointer-events-none animate-float" />
            <div className="absolute bottom-1/3 left-8 w-56 h-56 rounded-full bg-coral/8 blur-2xl z-0 pointer-events-none" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-seafoam/10 blur-2xl z-0 pointer-events-none animate-float delay-300" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
                <div className="max-w-3xl">
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 border border-coral/50 bg-coral/15 text-coral px-4 py-2 rounded-full text-xs font-sans tracking-widest uppercase mb-8 animate-fade-in backdrop-blur-sm">
                        <MapPin size={12} />
                        129 P. Ô Chợ Dừa, Đống Đa, Hà Nội
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 animate-fade-in-up">
                        Hải sản{' '}
                        <span className="text-shimmer-coral italic">tươi ngon,</span>
                        <br className="hidden md:block" />
                        {' '}đúng chất biển Việt
                    </h1>

                    {/* Tagline */}
                    <div className="flex items-center gap-3 mb-5 animate-fade-in-up delay-100">
                        <div className="h-px w-10 bg-coral/60" />
                        <p className="text-coral/90 font-serif italic text-lg tracking-wide">"Ngon hơn ở biển"</p>
                        <div className="h-px w-10 bg-coral/60" />
                    </div>

                    {/* Subheadline */}
                    <p className="text-white/75 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200">
                        Lẩu cua cốm bầu chỉ XÔ mới có — hải sản tươi ngon mang hương vị riêng đầy màu sắc từ các miền biển Việt, từ Năm Căn ra tới Cô Tô.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up delay-300">
                        <button
                            onClick={() => scrollTo('#contact')}
                            id="hero-booking-btn"
                            className="bg-coral text-white px-8 py-4 font-serif font-semibold text-lg rounded-xl hover:brightness-110 transition-all duration-300 shadow-coral hover:shadow-deep flex items-center justify-center gap-2 animate-pulse-glow"
                        >
                            Đặt bàn ngay ❤️
                        </button>
                        <button
                            onClick={() => scrollTo('#menu')}
                            className="border-2 border-white/40 text-white px-8 py-4 font-serif text-lg rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300 backdrop-blur-sm"
                        >
                            Xem thực đơn
                        </button>
                    </div>

                    {/* Rating pill */}
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in-up delay-300">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="text-white font-sans text-sm font-medium">4.9 · 4,374 đánh giá Google</span>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-3 animate-fade-in-up delay-400">
                        {badges.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 bg-white/8 border border-white/18 backdrop-blur-sm text-white/88 px-4 py-2 rounded-full text-sm font-sans hover:bg-white/15 transition-colors duration-200"
                            >
                                <Icon size={14} className="text-coral" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={() => scrollTo('#features')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-coral transition-colors animate-float"
                aria-label="Scroll down"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
}
