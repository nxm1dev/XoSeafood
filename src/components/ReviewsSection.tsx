import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: 'Nguyễn Thị Lan',
        time: '2 tuần trước',
        avatar: 'NL',
        rating: 5,
        text: 'Nhà hàng quá đẹp! Không gian rộng rãi, trang trí tinh tế và ấm cúng. Đây thực sự là địa chỉ đáng tin cậy cho những buổi hẹn hò hay tiệc gia đình.',
    },
    {
        name: 'Trần Minh Quân',
        time: '1 tháng trước',
        avatar: 'TQ',
        rating: 5,
        text: 'Đồ uống tuyệt vời luôn! Mình đặc biệt thích cà phê trứng và trà đào ở đây. Chắc chắn sẽ quay lại nhiều lần nữa.',
    },
    {
        name: 'Phạm Thu Hương',
        time: '3 tuần trước',
        avatar: 'PH',
        rating: 5,
        text: 'Món ăn ngon, nhân viên rất thân thiện và nhiệt tình. Mình đến cùng cả gia đình và mọi người đều hài lòng. Sẽ giới thiệu cho bạn bè.',
    },
    {
        name: 'Lê Văn Bình',
        time: '5 ngày trước',
        avatar: 'LB',
        rating: 5,
        text: 'Có nhiều bãi đậu xe, rất tiện lợi cho cả gia đình. Không phải lo chỗ đỗ như nhiều nơi khác. Điểm cộng lớn khi đến đây.',
    },
    {
        name: 'Hoàng Thị Mai',
        time: '2 tháng trước',
        avatar: 'HM',
        rating: 5,
        text: 'Có khu vui chơi trẻ em nên các con rất thích. Bố mẹ ăn uống thoải mái trong khi bé chơi. Không gian an toàn, thoải mái cho cả nhà.',
    },
    {
        name: 'Vũ Quang Huy',
        time: '1 tuần trước',
        avatar: 'VH',
        rating: 5,
        text: 'Giá cả hợp lý, khoảng 150k mà được ăn ngon và ngồi trong không gian đẹp như vậy. Quá xứng đáng! Nhân viên luôn nở nụ cười.',
    },
];

export default function ReviewsSection() {
    return (
        <section id="reviews" className="section-pad bg-burgundy relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.08),transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-gold font-sans text-sm tracking-widest uppercase mb-3">Đánh giá thực</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-4">
                        Khách hàng nói gì?
                    </h2>
                    <div className="divider-gold mb-5" />
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="text-gold fill-gold" />
                        ))}
                    </div>
                    <p className="text-ivory/60 font-sans text-sm">4.9 / 5 sao từ hàng trăm đánh giá thực tế</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="hover-lift bg-burgundy-dark/60 border border-gold/15 rounded-sm p-7 relative backdrop-blur-sm"
                        >
                            <Quote size={32} className="text-gold/20 absolute top-5 right-5" />
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(r.rating)].map((_, j) => (
                                    <Star key={j} size={14} className="text-gold fill-gold" />
                                ))}
                            </div>
                            {/* Text */}
                            <p className="text-ivory/80 font-sans text-sm leading-relaxed mb-6 italic">
                                "{r.text}"
                            </p>
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-sans font-semibold text-sm">
                                    {r.avatar}
                                </div>
                                <div>
                                    <p className="text-ivory font-sans font-medium text-sm">{r.name}</p>
                                    <p className="text-ivory/40 font-sans text-xs">{r.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gold text-burgundy-dark px-8 py-3.5 font-serif font-semibold rounded hover:brightness-110 transition-all duration-300 shadow-gold"
                    >
                        Đặt bàn để trải nghiệm
                    </button>
                </div>
            </div>
        </section>
    );
}
