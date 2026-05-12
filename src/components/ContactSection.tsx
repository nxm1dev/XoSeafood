import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, Facebook } from 'lucide-react';

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        guests: '',
        date: '',
        note: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="section-pad bg-sand">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-coral font-sans text-sm tracking-widest uppercase mb-3 font-medium">Đặt bàn & Liên hệ</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-ocean-dark mb-4">
                        Hẹn gặp tại XÔ Seafood
                    </h2>
                    <div className="divider-coral mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Đặt bàn trước để có vị trí view đẹp nhất — tầng 2 & 3 nhìn ra phố Ô Chợ Dừa. Xác nhận trong vòng 30 phút.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact info */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="font-serif text-2xl text-ocean-dark mb-6">Liên hệ nhanh</h3>
                        <div className="space-y-4">
                            <a
                                href="tel:0965242066"
                                id="contact-phone-link"
                                className="flex items-center gap-4 bg-ocean text-white p-5 rounded-2xl hover:brightness-110 transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                                    <Phone size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-sans text-xs text-white/60 mb-0.5">Gọi ngay</p>
                                    <p className="font-sans font-semibold text-lg">0965 242 066</p>
                                </div>
                            </a>

                            <a
                                href="https://www.facebook.com/xoseafood"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl hover:border-ocean/40 hover:shadow-ocean transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                    <Facebook size={18} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Facebook</p>
                                    <p className="font-sans font-medium text-foreground">fb.com/xoseafood</p>
                                </div>
                            </a>

                            <a
                                href="https://www.google.com/maps/place/H%E1%BA%A3i+s%E1%BA%A3n+X%C3%B4+Seafood/@21.0201699,105.8264049,17z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl hover:border-coral/40 hover:shadow-coral transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-red-500" />
                                </div>
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Chỉ đường</p>
                                    <p className="font-sans font-medium text-foreground">Xem trên Google Maps</p>
                                </div>
                            </a>

                            <a
                                href="https://zalo.me/0965242066"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl hover:border-ocean/40 hover:shadow-ocean transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                                    <MessageCircle size={18} className="text-sky-500" />
                                </div>
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Nhắn Zalo</p>
                                    <p className="font-sans font-medium text-foreground">Chat với chúng tôi</p>
                                </div>
                            </a>
                        </div>

                        {/* Info card */}
                        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                            <div className="flex gap-3">
                                <MapPin size={16} className="text-coral shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Địa chỉ</p>
                                    <p className="font-sans text-sm text-foreground font-medium">129 P. Ô Chợ Dừa, Đống Đa, Hà Nội</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Clock size={16} className="text-coral shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Giờ mở cửa</p>
                                    <p className="font-sans text-sm text-foreground">10:00 – 22:30 (tất cả các ngày)</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Phone size={16} className="text-coral shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Hotline</p>
                                    <p className="font-sans text-sm text-foreground">0965 242 066</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking form */}
                    <div className="lg:col-span-3">
                        <div className="bg-card border border-border rounded-2xl p-8 shadow-ocean">
                            <h3 className="font-serif text-2xl text-ocean-dark mb-6">Đặt bàn trực tuyến</h3>

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-20 h-20 rounded-full bg-coral/15 flex items-center justify-center mb-4">
                                        <CheckCircle size={40} className="text-coral" />
                                    </div>
                                    <h4 className="font-serif text-2xl text-ocean-dark mb-2">Đặt bàn thành công! 🎉</h4>
                                    <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
                                        Cảm ơn bạn đã chọn XÔ Seafood! Chúng tôi sẽ gọi xác nhận trong vòng 30 phút. Hẹn gặp bạn tại quán nhé ❤️
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-coral font-sans text-sm underline hover:text-coral/70 transition-colors"
                                    >
                                        Đặt thêm bàn khác
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase font-medium">Họ tên *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Nguyễn Văn A"
                                                id="booking-name"
                                                className="w-full bg-background border border-input rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-ocean/60 focus:ring-2 focus:ring-ocean/20 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase font-medium">Số điện thoại *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="0912 345 678"
                                                id="booking-phone"
                                                className="w-full bg-background border border-input rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-ocean/60 focus:ring-2 focus:ring-ocean/20 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase font-medium">Số người *</label>
                                            <select
                                                name="guests"
                                                value={form.guests}
                                                onChange={handleChange}
                                                required
                                                id="booking-guests"
                                                className="w-full bg-background border border-input rounded-xl px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:ring-2 focus:ring-ocean/20 transition-colors"
                                            >
                                                <option value="">Chọn số người</option>
                                                <option value="2-4">2 – 4 người</option>
                                                <option value="5-8">5 – 8 người</option>
                                                <option value="9+">9+ người</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase font-medium">Ngày & giờ *</label>
                                            <input
                                                type="datetime-local"
                                                name="date"
                                                value={form.date}
                                                onChange={handleChange}
                                                required
                                                id="booking-date"
                                                className="w-full bg-background border border-input rounded-xl px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:ring-2 focus:ring-ocean/20 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase font-medium">Ghi chú thêm</label>
                                        <textarea
                                            name="note"
                                            value={form.note}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Muốn đặt bàn view phố tầng 2, dị ứng thực phẩm, dịp kỷ niệm..."
                                            id="booking-note"
                                            className="w-full bg-background border border-input rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-ocean/60 focus:ring-2 focus:ring-ocean/20 transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        id="booking-submit"
                                        className="w-full bg-coral text-white py-4 font-serif font-semibold text-base rounded-xl hover:brightness-110 transition-all duration-300 shadow-coral flex items-center justify-center gap-2"
                                    >
                                        <Send size={16} />
                                        Xác nhận đặt bàn
                                    </button>

                                    <p className="text-muted-foreground font-sans text-xs text-center">
                                        Hoặc gọi trực tiếp:{' '}
                                        <a href="tel:0965242066" className="text-coral hover:text-coral/70 transition-colors font-semibold">
                                            0965 242 066
                                        </a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Embedded Google Maps */}
                <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-ocean h-80">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.576897889539!2d105.8264049!3d21.0201699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf64b67bd45%3A0x75216de302d4a6bc!2zSOG6o2kgc-G6o24gWMO0IFNlYWZvb2Q!5e0!3m2!1svi!2s!4v1715000000000!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bản đồ Hải sản Xô Seafood"
                    />
                </div>
            </div>
        </section>
    );
}
