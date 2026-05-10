import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Giới thiệu', href: '#about' },
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
        <footer className="bg-charcoal text-ivory/70">
            {/* Top CTA banner */}
            <div className="bg-gold py-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-burgundy-dark mb-1">
                            Sẵn sàng ghé thăm An Viên?
                        </h3>
                        <p className="text-burgundy/80 font-sans text-sm">Đặt bàn ngay hôm nay – trải nghiệm bữa ăn khó quên</p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <a
                            href="tel:0982000000"
                            className="flex items-center gap-2 bg-burgundy text-ivory px-5 py-3 rounded font-sans font-medium text-sm hover:brightness-110 transition-all"
                        >
                            <Phone size={14} />
                            Gọi ngay
                        </a>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="bg-burgundy-dark text-ivory px-5 py-3 rounded font-sans font-medium text-sm hover:brightness-110 transition-all"
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
                        <img
                            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/6b1b927c-ebc0-40.jpg"
                            alt="An Viên"
                            className="h-14 w-auto mb-4"
                        />
                        <p className="font-sans text-sm leading-relaxed text-ivory/60 mb-6">
                            Nơi ẩm thực gặp gỡ cảm xúc — không gian đẹp, món ngon, cà phê tinh tế.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-sm bg-ivory/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                                <Facebook size={16} className="text-ivory/50 hover:text-gold" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-sm bg-ivory/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                                <Instagram size={16} className="text-ivory/50 hover:text-gold" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-sm bg-ivory/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                                <Youtube size={16} className="text-ivory/50 hover:text-gold" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif text-ivory text-base mb-5">Điều hướng</h4>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <button
                                        onClick={() => scrollTo(l.href)}
                                        className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors"
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="font-serif text-ivory text-base mb-5">Thông tin</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                                <p className="font-sans text-sm text-ivory/60">123 Đường Nguyễn Văn Cừ, TP. ...</p>
                            </div>
                            <div className="flex gap-3">
                                <Phone size={15} className="text-gold shrink-0 mt-0.5" />
                                <a href="tel:0982000000" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors">0982 000 000</a>
                            </div>
                            <div className="flex gap-3">
                                <Clock size={15} className="text-gold shrink-0 mt-0.5" />
                                <p className="font-sans text-sm text-ivory/60">07:00 – 22:00 (mỗi ngày)</p>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-serif text-ivory text-base mb-5">Giờ mở cửa</h4>
                        <div className="space-y-2">
                            {[
                                { day: 'Thứ 2 – Thứ 6', time: '07:00 – 22:00' },
                                { day: 'Thứ 7 – Chủ nhật', time: '07:00 – 22:30' },
                                { day: 'Ngày lễ', time: '08:00 – 22:00' },
                            ].map(({ day, time }) => (
                                <div key={day} className="flex justify-between gap-4">
                                    <span className="font-sans text-sm text-ivory/50">{day}</span>
                                    <span className="font-sans text-sm text-gold">{time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-ivory/10 py-6">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-sans text-xs text-ivory/30">
                        © 2024 An Viên Restaurant & Coffee. Tất cả quyền được bảo lưu.
                    </p>
                    <p className="font-sans text-xs text-ivory/30">
                        Thiết kế với tình yêu thương ♥
                    </p>
                </div>
            </div>
        </footer>
    );
}
