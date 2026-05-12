import { Phone, MapPin, Clock, Facebook } from 'lucide-react';

const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Thực đơn', href: '#menu' },
    { label: 'Không gian', href: '#gallery' },
    { label: 'Review', href: '#reviews' },
    { label: 'Liên hệ', href: '#contact' },
];

export default function Footer() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-ocean-dark text-white/65">
            {/* Top CTA banner */}
            <div className="bg-coral py-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,hsl(16_90%_70%_/_0.3),transparent_60%)]" />
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">
                            Sẵn sàng ghé XÔ Seafood? 🦀
                        </h3>
                        <p className="text-white/80 font-sans text-sm">Đặt bàn ngay hôm nay — trải nghiệm hải sản ngon nhất Hà Nội</p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <a
                            href="tel:0965242066"
                            className="flex items-center gap-2 bg-ocean-dark text-white px-5 py-3 rounded-xl font-sans font-medium text-sm hover:brightness-125 transition-all"
                        >
                            <Phone size={14} />
                            Gọi ngay
                        </a>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="bg-white text-coral px-5 py-3 rounded-xl font-sans font-semibold text-sm hover:brightness-95 transition-all"
                        >
                            Đặt bàn
                        </button>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-coral/50">
                                <img
                                    src="/img/logo.jpg"
                                    alt="XÔ Seafood Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-serif text-white text-xl font-semibold">XÔ <span className="text-coral">Seafood</span></div>
                                <div className="text-white/45 text-xs tracking-widest uppercase font-sans">Hải sản · Hà Nội</div>
                            </div>
                        </div>
                        <p className="font-sans text-sm leading-relaxed text-white/55 mb-6">
                            Lẩu cua cốm bầu chỉ XÔ mới có — hải sản tươi ngon từ Năm Căn ra tới Cô Tô.
                            <br />
                            <span className="italic text-coral/80">"Ngon hơn ở biển" ❤️</span>
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/xoseafood"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center hover:bg-coral/25 transition-colors group"
                            >
                                <Facebook size={17} className="text-white/50 group-hover:text-coral transition-colors" />
                            </a>
                            <a
                                href="https://www.google.com/maps/place/H%E1%BA%A3i+s%E1%BA%A3n+X%C3%B4+Seafood/@21.0201699,105.8264049,17z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center hover:bg-coral/25 transition-colors group"
                                title="Google Maps"
                            >
                                <MapPin size={17} className="text-white/50 group-hover:text-coral transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif text-white text-base mb-5">Điều hướng</h4>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <button
                                        onClick={() => scrollTo(l.href)}
                                        className="font-sans text-sm text-white/55 hover:text-coral transition-colors"
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="font-serif text-white text-base mb-5">Thông tin</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin size={15} className="text-coral shrink-0 mt-0.5" />
                                <p className="font-sans text-sm text-white/55">129 P. Ô Chợ Dừa, Đống Đa, Hà Nội</p>
                            </div>
                            <div className="flex gap-3">
                                <Phone size={15} className="text-coral shrink-0 mt-0.5" />
                                <a href="tel:0965242066" className="font-sans text-sm text-white/55 hover:text-coral transition-colors">0965 242 066</a>
                            </div>
                            <div className="flex gap-3">
                                <Clock size={15} className="text-coral shrink-0 mt-0.5" />
                                <p className="font-sans text-sm text-white/55">10:00 – 22:30 (mỗi ngày)</p>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-serif text-white text-base mb-5">Giờ mở cửa</h4>
                        <div className="space-y-2">
                            {[
                                { day: 'Thứ 2 – Thứ 6', time: '10:00 – 22:30' },
                                { day: 'Thứ 7 – Chủ nhật', time: '10:00 – 22:30' },
                                { day: 'Ngày lễ', time: '10:00 – 22:30' },
                            ].map(({ day, time }) => (
                                <div key={day} className="flex justify-between gap-4">
                                    <span className="font-sans text-sm text-white/45">{day}</span>
                                    <span className="font-sans text-sm text-coral font-medium">{time}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-coral/12 border border-coral/20 rounded-xl">
                            <p className="font-sans text-xs text-white/70 leading-relaxed">
                                📍 Giá trung bình: 200.000đ – 600.000đ / người
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/8 py-6">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-sans text-xs text-white/25">
                        © 2024 Hải sản Xô Seafood. 129 P. Ô Chợ Dừa, Đống Đa, Hà Nội.
                    </p>
                    <p className="font-sans text-xs text-white/25">
                        Làm với tình yêu & đam mê hải sản ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}
