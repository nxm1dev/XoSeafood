import { ChevronDown, Star, Car, Baby, Utensils, Coffee, MapPin } from 'lucide-react';

const badges = [
    { icon: Star, label: 'Không gian đẹp' },
    { icon: Utensils, label: 'Đồ ăn ngon' },
    { icon: Coffee, label: 'Đồ uống chất lượng' },
    { icon: Car, label: 'Nhiều chỗ đậu xe' },
    { icon: Baby, label: 'Phù hợp trẻ em' },
];

export default function HeroSection() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background images */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/06765ab8-08fa-45.jpg"
                    alt="An Viên về đêm"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/90 via-burgundy/70 to-charcoal/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/60 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-8 md:right-16 w-64 h-64 rounded-full bg-gold/5 blur-3xl z-0 pointer-events-none" />
            <div className="absolute bottom-1/3 left-4 w-48 h-48 rounded-full bg-burgundy/30 blur-2xl z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
                <div className="max-w-3xl">
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 text-gold px-4 py-2 rounded-sm text-xs font-sans tracking-widest uppercase mb-8 animate-fade-in">
                        <MapPin size={12} />
                        Nhà hàng & Cafe cao cấp
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6 animate-fade-in-up">
                        Không gian đẹp,{' '}
                        <span className="text-shimmer italic">món ngon,</span>
                        <br className="hidden md:block" />
                        {' '}cà phê tinh tế
                    </h1>

                    {/* Subheadline */}
                    <p className="text-ivory/75 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200">
                        Điểm hẹn lý tưởng cho bữa ăn gia đình, gặp gỡ bạn bè và những phút thư giãn trọn vẹn.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up delay-300">
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="bg-gold text-burgundy-dark px-8 py-4 font-serif font-semibold text-lg rounded hover:brightness-110 transition-all duration-300 shadow-gold hover:shadow-deep"
                        >
                            Đặt bàn ngay
                        </button>
                        <button
                            onClick={() => scrollTo('#menu')}
                            className="border border-ivory/50 text-ivory px-8 py-4 font-serif text-lg rounded hover:bg-ivory/10 hover:border-ivory transition-all duration-300"
                        >
                            Xem thực đơn
                        </button>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-3 animate-fade-in-up delay-400">
                        {badges.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 bg-ivory/10 border border-ivory/20 backdrop-blur-sm text-ivory/90 px-4 py-2 rounded-sm text-sm font-sans"
                            >
                                <Icon size={14} className="text-gold" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={() => scrollTo('#features')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ivory/50 hover:text-gold transition-colors animate-float"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
}
