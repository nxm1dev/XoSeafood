import { DollarSign, Car, Baby, Users, Shield, Clock } from 'lucide-react';

const amenities = [
    {
        icon: DollarSign,
        title: 'Giá hợp lý',
        desc: '200.000đ – 600.000đ / người',
        detail: 'Hải sản tươi ngon, chất lượng đảm bảo với mức giá phải chăng. Xứng đáng với từng đồng tiền bỏ ra.',
    },
    {
        icon: Car,
        title: 'Đỗ xe tiện lợi',
        desc: 'Có người đỗ hộ tận nơi',
        detail: 'Ngay từ cổng đã có nhân viên nhanh nhẹn đỗ xe giúp khách. Không gian rộng, chỗ để ô tô thoải mái.',
    },
    {
        icon: Baby,
        title: 'Thân thiện gia đình',
        desc: 'Phù hợp cho trẻ nhỏ',
        detail: 'Không gian rộng rãi, an toàn cho bé. Phụ huynh thưởng thức hải sản ngon trong khi cả nhà vui vẻ.',
    },
    {
        icon: Users,
        title: 'Nhóm lớn hay nhỏ',
        desc: 'Từ 2 đến 9+ người',
        detail: 'Hẹn hò đôi, gia đình hay tiệc nhóm doanh nghiệp đều phù hợp. Đặt trước để có bàn đẹp nhất.',
    },
    {
        icon: Shield,
        title: 'Hải sản tươi đảm bảo',
        desc: 'Nhập mới mỗi ngày',
        detail: 'Hải sản được nhập từ các vùng biển uy tín, kiểm tra chất lượng nghiêm ngặt. Tươi ngon mỗi ngày.',
    },
    {
        icon: Clock,
        title: 'Giờ mở cửa',
        desc: '10:00 – 22:30 hàng ngày',
        detail: 'Mở cửa tất cả các ngày trong tuần. Đặt bàn trước giờ cao điểm để đảm bảo chỗ ngồi tốt nhất.',
    },
];

const groupSizes = [
    { size: '2 – 4 người', note: 'Hẹn hò, gia đình nhỏ', emoji: '👫' },
    { size: '5 – 8 người', note: 'Nhóm bạn, sinh nhật', emoji: '🥳' },
    { size: '9+ người', note: 'Tiệc lớn, tiếp khách', emoji: '🎉' },
];

export default function AmenitiesSection() {
    return (
        <section id="amenities" className="section-pad bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-coral font-sans text-sm tracking-widest uppercase mb-3 font-medium">Tiện ích</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-ocean-dark mb-4">
                        Mọi thứ bạn cần
                    </h2>
                    <div className="divider-coral mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        XÔ Seafood được thiết kế để mỗi lần ghé thăm đều trở nên dễ dàng và trọn vẹn nhất.
                    </p>
                </div>

                {/* Amenities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                    {amenities.map(({ icon: Icon, title, desc, detail }) => (
                        <div key={title} className="flex gap-5 p-6 bg-card border border-border rounded-2xl hover:border-coral/30 hover:shadow-ocean transition-all duration-300">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
                                <Icon size={22} className="text-coral" />
                            </div>
                            <div>
                                <h3 className="font-serif text-base text-foreground mb-0.5">{title}</h3>
                                <p className="text-coral font-sans font-medium text-xs mb-2">{desc}</p>
                                <p className="text-muted-foreground font-sans text-xs leading-relaxed">{detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Group sizes */}
                <div className="bg-ocean-dark rounded-3xl p-8 md:p-12 border border-ocean-light/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(188_72%_30%_/_0.15),transparent_70%)]" />
                    <h3 className="font-serif text-2xl text-white text-center mb-2 relative z-10">Phù hợp mọi quy mô nhóm</h3>
                    <p className="text-white/55 font-sans text-sm text-center mb-8 relative z-10">Đặt trước để có bàn đẹp và trải nghiệm tốt nhất</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                        {groupSizes.map(({ size, note, emoji }) => (
                            <div key={size} className="bg-white/8 border border-white/15 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/12 transition-colors">
                                <div className="text-4xl mb-3">{emoji}</div>
                                <p className="font-serif text-2xl text-white mb-1">{size}</p>
                                <p className="text-white/55 font-sans text-sm">{note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
