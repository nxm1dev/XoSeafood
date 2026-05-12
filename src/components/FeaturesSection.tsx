import { Fish, Waves, Flame, Users, Car, Star } from 'lucide-react';

const features = [
    {
        icon: Fish,
        title: 'Hải sản tươi sống',
        desc: 'Hải sản được nhập trực tiếp từ các vùng biển nổi tiếng: Năm Căn, Cô Tô, Quảng Ninh. Tươi ngon đảm bảo mỗi ngày.',
        color: 'text-ocean',
        bg: 'bg-ocean/8 group-hover:bg-ocean/15',
    },
    {
        icon: Flame,
        title: 'Lẩu cua cốm bầu',
        desc: 'Món signature độc quyền của XÔ — Lẩu cua cốm bầu đậm vị, cua tươi thịt chắc, nước lẩu ngọt tự nhiên. Chỉ XÔ mới có!',
        color: 'text-coral',
        bg: 'bg-coral/8 group-hover:bg-coral/15',
    },
    {
        icon: Waves,
        title: 'Hương vị miền biển',
        desc: 'Thực đơn đa dạng từ món nướng, hấp, rang muối đến lẩu — mang hương vị đặc trưng của biển Việt vào từng bữa ăn.',
        color: 'text-ocean-light',
        bg: 'bg-ocean-light/8 group-hover:bg-ocean-light/15',
    },
    {
        icon: Users,
        title: 'Nhân viên tận tình',
        desc: 'Đội ngũ phục vụ chuyên nghiệp, nhiệt tình — thậm chí bóc cua, gỡ tôm tại bàn cho khách. Trải nghiệm 5 sao!',
        color: 'text-coral',
        bg: 'bg-coral/8 group-hover:bg-coral/15',
    },
    {
        icon: Car,
        title: 'Chỗ để xe rộng rãi',
        desc: '4 tầng không gian, nhà hàng mặt phố lớn Ô Chợ Dừa. Có người đỗ xe cho khách ngay từ cổng, tiện lợi tối đa.',
        color: 'text-ocean',
        bg: 'bg-ocean/8 group-hover:bg-ocean/15',
    },
    {
        icon: Star,
        title: 'Đánh giá 4.9 sao',
        desc: 'Hơn 4,374 đánh giá thực tế trên Google Maps. Được yêu thích bởi cả gia đình lẫn nhóm bạn và tiếp khách.',
        color: 'text-amber-500',
        bg: 'bg-amber-50 group-hover:bg-amber-100/80',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="section-pad bg-sand relative overflow-hidden">
            {/* Decorative bubbles */}
            <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-ocean/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-coral font-sans text-sm tracking-widest uppercase mb-3 font-medium">Tại sao chọn XÔ Seafood?</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-ocean-dark mb-4">
                        Trải nghiệm biển cả
                    </h2>
                    <div className="divider-coral mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Khi XÔ phục vụ những đặc sản của đại dương bằng cả tấm lòng và bàn tay tâm huyết ❤️
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                    {features.map(({ icon: Icon, title, desc, color, bg }) => (
                        <div
                            key={title}
                            className="hover-lift bg-card rounded-2xl p-7 border border-border group cursor-default shadow-sm"
                        >
                            <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-5 transition-colors duration-300`}>
                                <Icon size={26} className={color} />
                            </div>
                            <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
                            <p className="text-muted-foreground font-sans text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
