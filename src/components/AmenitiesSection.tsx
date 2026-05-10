import { Car, Baby, Users, DollarSign, Shield, Clock } from 'lucide-react';

const amenities = [
    {
        icon: DollarSign,
        title: 'Giá hợp lý',
        desc: '100.000đ – 300.000đ / người',
        detail: 'Trải nghiệm không gian sang trọng với giá cả thân thiện. Phù hợp mọi dịp trong ngày.',
    },
    {
        icon: Car,
        title: 'Bãi đậu xe miễn phí',
        desc: 'Rộng rãi, có người trông',
        detail: 'Không lo tìm chỗ đỗ xe. Bãi xe rộng lớn, có bảo vệ trông xe tận tình suốt giờ mở cửa.',
    },
    {
        icon: Baby,
        title: 'Khu vui chơi trẻ em',
        desc: 'An toàn & thú vị',
        detail: 'Khu vui chơi riêng dành cho các bé. Phụ huynh thư giãn, trẻ em vui chơi thoải mái.',
    },
    {
        icon: Users,
        title: 'Đón mọi quy mô nhóm',
        desc: 'Từ 2 đến 9+ người',
        detail: 'Hẹn hò đôi đến tiệc nhóm lớn đều phù hợp. Đặt trước để có bàn đẹp nhất.',
    },
    {
        icon: Shield,
        title: 'Không gian an toàn',
        desc: 'Vệ sinh, sạch sẽ',
        detail: 'An toàn thực phẩm được đảm bảo nghiêm ngặt. Không gian luôn sạch sẽ và thoáng đãng.',
    },
    {
        icon: Clock,
        title: 'Giờ mở cửa',
        desc: '07:00 – 22:00 hàng ngày',
        detail: 'Mở cửa tất cả các ngày trong tuần, kể cả lễ Tết. Đặt bàn trước để đảm bảo chỗ ngồi.',
    },
];

const groupSizes = [
    { size: '2 – 4 người', note: 'Hẹn hò, gia đình nhỏ', bg: 'bg-gold/10 border-gold/20' },
    { size: '5 – 8 người', note: 'Nhóm bạn, sinh nhật', bg: 'bg-burgundy/8 border-burgundy/15' },
    { size: '9+ người', note: 'Tiệc lớn, họp mặt', bg: 'bg-warmBrown/10 border-warmBrown/20' },
];

export default function AmenitiesSection() {
    return (
        <section id="amenities" className="section-pad bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-gold font-sans text-sm tracking-widest uppercase mb-3">Tiện ích</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">
                        Mọi thứ bạn cần
                    </h2>
                    <div className="divider-gold mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        An Viên được thiết kế để mọi chuyến ghé thăm đều trở nên dễ dàng và trọn vẹn.
                    </p>
                </div>

                {/* Amenities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                    {amenities.map(({ icon: Icon, title, desc, detail }) => (
                        <div key={title} className="flex gap-5 p-6 bg-card border border-border rounded-sm hover:border-gold/30 hover:shadow-warm transition-all duration-300">
                            <div className="shrink-0 w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center">
                                <Icon size={22} className="text-gold" />
                            </div>
                            <div>
                                <h3 className="font-serif text-base text-foreground mb-0.5">{title}</h3>
                                <p className="text-gold font-sans font-medium text-xs mb-2">{desc}</p>
                                <p className="text-muted-foreground font-sans text-xs leading-relaxed">{detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Group sizes */}
                <div className="bg-ivory rounded-sm p-8 md:p-10 border border-border">
                    <h3 className="font-serif text-2xl text-burgundy text-center mb-2">Phù hợp mọi quy mô nhóm</h3>
                    <p className="text-muted-foreground font-sans text-sm text-center mb-8">Đặt trước để có trải nghiệm tốt nhất</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {groupSizes.map(({ size, note, bg }) => (
                            <div key={size} className={`${bg} border rounded-sm p-6 text-center`}>
                                <p className="font-serif text-2xl text-burgundy mb-1">{size}</p>
                                <p className="text-muted-foreground font-sans text-sm">{note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
