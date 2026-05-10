import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

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
        <section id="contact" className="section-pad bg-ivory">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-gold font-sans text-sm tracking-widest uppercase mb-3">Đặt bàn & Liên hệ</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">
                        Hẹn gặp tại An Viên
                    </h2>
                    <div className="divider-gold mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Đặt bàn trước để có vị trí đẹp nhất. Chúng tôi sẽ xác nhận trong vòng 30 phút.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Quick contact */}
                        <div>
                            <h3 className="font-serif text-2xl text-burgundy mb-6">Liên hệ nhanh</h3>
                            <div className="space-y-4">
                                <a
                                    href="tel:0982000000"
                                    className="flex items-center gap-4 bg-burgundy text-ivory p-5 rounded-sm hover:brightness-110 transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-sm bg-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors">
                                        <Phone size={18} className="text-gold" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs text-ivory/60 mb-0.5">Gọi ngay</p>
                                        <p className="font-sans font-medium">0982 000 000</p>
                                    </div>
                                </a>

                                <a
                                    href="https://zalo.me/0982000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 bg-card border border-border p-5 rounded-sm hover:border-gold/40 hover:shadow-warm transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-sm bg-blue-50 flex items-center justify-center shrink-0">
                                        <MessageCircle size={18} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs text-muted-foreground mb-0.5">Nhắn Zalo</p>
                                        <p className="font-sans font-medium text-foreground">Chat với chúng tôi</p>
                                    </div>
                                </a>

                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 bg-card border border-border p-5 rounded-sm hover:border-gold/40 hover:shadow-warm transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-sm bg-red-50 flex items-center justify-center shrink-0">
                                        <MapPin size={18} className="text-red-500" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs text-muted-foreground mb-0.5">Chỉ đường</p>
                                        <p className="font-sans font-medium text-foreground">Xem bản đồ Google</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="bg-card border border-border rounded-sm p-6 space-y-4">
                            <div className="flex gap-3">
                                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Địa chỉ</p>
                                    <p className="font-sans text-sm text-foreground">123 Đường Nguyễn Văn Cừ, TP. ...</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Clock size={16} className="text-gold shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Giờ mở cửa</p>
                                    <p className="font-sans text-sm text-foreground">07:00 – 22:00 (tất cả các ngày)</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-sans text-xs text-muted-foreground mb-0.5">Hotline</p>
                                    <p className="font-sans text-sm text-foreground">0982 000 000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking form */}
                    <div className="lg:col-span-3">
                        <div className="bg-card border border-border rounded-sm p-8 shadow-warm">
                            <h3 className="font-serif text-2xl text-burgundy mb-6">Đặt bàn trực tuyến</h3>

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <CheckCircle size={56} className="text-gold mb-4" />
                                    <h4 className="font-serif text-2xl text-burgundy mb-2">Đặt bàn thành công!</h4>
                                    <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
                                        Cảm ơn bạn đã đặt bàn tại An Viên. Chúng tôi sẽ gọi xác nhận trong vòng 30 phút.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-gold font-sans text-sm underline hover:text-gold/70 transition-colors"
                                    >
                                        Đặt thêm bàn khác
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase">Họ tên *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Nguyễn Văn A"
                                                className="w-full bg-background border border-input rounded-sm px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase">Số điện thoại *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="0912 345 678"
                                                className="w-full bg-background border border-input rounded-sm px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase">Số người *</label>
                                            <select
                                                name="guests"
                                                value={form.guests}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-background border border-input rounded-sm px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors"
                                            >
                                                <option value="">Chọn số người</option>
                                                <option value="2-4">2 – 4 người</option>
                                                <option value="5-8">5 – 8 người</option>
                                                <option value="9+">9+ người</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase">Ngày & giờ *</label>
                                            <input
                                                type="datetime-local"
                                                name="date"
                                                value={form.date}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-background border border-input rounded-sm px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-sans text-xs text-muted-foreground mb-1.5 tracking-wide uppercase">Ghi chú thêm</label>
                                        <textarea
                                            name="note"
                                            value={form.note}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Yêu cầu đặc biệt, dị ứng thực phẩm, dịp kỷ niệm..."
                                            className="w-full bg-background border border-input rounded-sm px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gold text-burgundy-dark py-4 font-serif font-semibold text-base rounded hover:brightness-110 transition-all duration-300 shadow-gold flex items-center justify-center gap-2"
                                    >
                                        <Send size={16} />
                                        Xác nhận đặt bàn
                                    </button>

                                    <p className="text-muted-foreground font-sans text-xs text-center">
                                        Hoặc gọi trực tiếp:{' '}
                                        <a href="tel:0982000000" className="text-gold hover:text-gold/70 transition-colors">
                                            0982 000 000
                                        </a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-12 rounded-sm overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                    <div className="text-center">
                        <MapPin size={40} className="text-gold mx-auto mb-3" />
                        <p className="font-serif text-lg text-burgundy">An Viên Restaurant & Coffee</p>
                        <p className="font-sans text-sm text-muted-foreground mt-1">123 Đường Nguyễn Văn Cừ</p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block text-gold font-sans text-sm underline hover:text-gold/70 transition-colors"
                        >
                            Xem trên Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
