import { Sparkles, Leaf, Coffee, Users, Car, Baby } from 'lucide-react';

const features = [
    {
        icon: Sparkles,
        title: 'Không gian sang trọng',
        desc: 'Kiến trúc độc đáo với tông màu kem-gỗ ấm áp, cây xanh và ánh đèn lung linh. Đẹp từ ban ngày đến ban đêm.',
    },
    {
        icon: Leaf,
        title: 'Thực đơn hấp dẫn',
        desc: 'Đa dạng món ăn từ khai vị đến món chính. Nguyên liệu tươi, chế biến cẩn thận, giá từ 100k–300k/người.',
    },
    {
        icon: Coffee,
        title: 'Đồ uống được yêu thích',
        desc: 'Cà phê, trà và thức uống đặc trưng được khách hàng đánh giá cao. Mỗi ly là một trải nghiệm tinh tế.',
    },
    {
        icon: Users,
        title: 'Nhân viên thân thiện',
        desc: 'Đội ngũ phục vụ tận tâm, chuyên nghiệp và luôn sẵn lòng giúp đỡ mang đến trải nghiệm dễ chịu nhất.',
    },
    {
        icon: Car,
        title: 'Bãi đậu xe thuận tiện',
        desc: 'Bãi đỗ xe rộng rãi, miễn phí, có người trông xe tận tình. Không lo về chỗ đỗ xe khi đến An Viên.',
    },
    {
        icon: Baby,
        title: 'Phù hợp gia đình',
        desc: 'Khu vui chơi dành riêng cho trẻ em, không gian rộng đón nhóm từ 3 đến 9+ người. Thoải mái như ở nhà.',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="section-pad bg-ivory">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold font-sans text-sm tracking-widest uppercase mb-3">Tại sao chọn An Viên?</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">
                        Trải nghiệm trọn vẹn
                    </h2>
                    <div className="divider-gold mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Mỗi chi tiết tại An Viên được chú trọng để bạn có một khoảng thời gian thật sự thư giãn và trọn vẹn.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="hover-lift bg-card rounded-sm p-8 border border-border group cursor-default"
                        >
                            <div className="w-14 h-14 rounded-sm bg-burgundy/8 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                                <Icon size={26} className="text-gold" />
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
