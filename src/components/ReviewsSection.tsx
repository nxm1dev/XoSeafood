import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: 'Minh Trang Phạm',
        time: '4 tháng trước',
        avatar: 'MT',
        avatarColor: 'from-pink-400 to-rose-500',
        rating: 5,
        text: 'Đồ ăn ngon, sạch sẽ, nhân viên phục vụ nhiệt tình. Bữa tối thật sự hoàn hảo tại XÔ Seafood!',
        photos: 4,
    },
    {
        name: 'Tuan Le Manh',
        time: '2 tháng trước',
        avatar: 'TL',
        avatarColor: 'from-blue-400 to-indigo-500',
        rating: 5,
        text: 'Đồ ăn hải sản tươi, nhân viên phục vụ tận tình. Ăn lẩu cua bầu đúng best seller, thêm mực nướng mọi giòn ngon — không chê vào đâu được!',
        photos: 9,
    },
    {
        name: 'My name is Haaa',
        time: '2 tháng trước',
        avatar: 'MH',
        avatarColor: 'from-violet-400 to-purple-500',
        rating: 5,
        text: 'Luôn là điểm đến của mình khi cho bé đi ăn hải sản, đồ tươi ngon, đa dạng, cơ sở ô chợ dừa rất to, chỗ để ô tô tiện. 5 sao ạaaaa!',
        photos: 7,
    },
    {
        name: 'Heidi Ngo',
        time: '5 tháng trước',
        avatar: 'HN',
        avatarColor: 'from-emerald-400 to-teal-500',
        rating: 5,
        text: 'Nhà hàng nằm trên mặt phố lớn Ô Chợ Dừa, gồm 4 tầng rộng thoáng. Tầng 2 và 3 có thể nhìn ra phố qua vách kính — view cực kỳ đẹp!',
        photos: 19,
        isLocalGuide: true,
    },
    {
        name: 'Giang',
        time: '2 tháng trước',
        avatar: 'GN',
        avatarColor: 'from-amber-400 to-orange-500',
        rating: 5,
        text: 'Trải nghiệm tuyệt vời từ sảnh đón khách — nhân viên đỗ xe, dẫn khách vào bàn nhanh nhẹn. Hải sản sốt ngon, các bạn còn bóc cua tại chỗ cho khách!',
        photos: 5,
    },
    {
        name: 'Thi Huong Giang Nguyen',
        time: '3 tháng trước',
        avatar: 'TG',
        avatarColor: 'from-cyan-400 to-sky-500',
        rating: 5,
        text: 'Quán sạch sẽ, rộng rãi, phù hợp cả tiếp khách + gia đình. Đồ ăn ngon, chất lượng hợp giá tiền. Rất đáng để ghé thử!',
        photos: 7,
    },
];

export default function ReviewsSection() {
    return (
        <section id="reviews" className="section-pad bg-ocean-dark relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(16_90%_54%_/_0.10),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(188_72%_22%_/_0.15),transparent_60%)]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-coral font-sans text-sm tracking-widest uppercase mb-3 font-medium">Đánh giá thực</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                        Khách hàng nói gì?
                    </h2>
                    <div className="divider-coral mb-5" />
                    <div className="flex items-center justify-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={22} className="text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5">
                        <span className="text-white font-sans text-sm font-semibold">4.9 / 5</span>
                        <span className="text-white/50 font-sans text-sm">·</span>
                        <span className="text-white/70 font-sans text-sm">4,374 đánh giá Google Maps</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="hover-lift bg-white/6 border border-white/12 rounded-2xl p-7 relative backdrop-blur-sm"
                        >
                            <Quote size={32} className="text-coral/25 absolute top-5 right-5" />
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(r.rating)].map((_, j) => (
                                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            {/* Text */}
                            <p className="text-white/90 font-sans text-sm leading-relaxed mb-6 italic">
                                "{r.text}"
                            </p>
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.avatarColor} flex items-center justify-center text-white font-sans font-semibold text-sm shadow-lg`}>
                                    {r.avatar}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-white font-sans font-medium text-sm">{r.name}</p>
                                        {r.isLocalGuide && (
                                            <span className="text-xs text-ocean-light bg-ocean-light/20 px-2 py-0.5 rounded-full">Local Guide</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-white/40 font-sans text-xs">{r.time}</p>
                                        {r.photos > 0 && (
                                            <span className="text-white/30 text-xs">· 📷 {r.photos} ảnh</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://www.google.com/maps/place/H%E1%BA%A3i+s%E1%BA%A3n+X%C3%B4+Seafood/@21.0201699,105.8264049,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/30 text-white px-8 py-3.5 font-serif font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            Xem tất cả đánh giá
                        </a>
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-coral text-white px-8 py-3.5 font-serif font-semibold rounded-xl hover:brightness-110 transition-all duration-300 shadow-coral"
                        >
                            Đặt bàn để trải nghiệm
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
