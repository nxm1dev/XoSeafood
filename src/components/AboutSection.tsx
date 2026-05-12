import { CheckCircle, Heart } from 'lucide-react';

const highlights = [
    'Nhà hàng 4 tầng, sức chứa hàng trăm khách',
    'Vị trí mặt phố Ô Chợ Dừa rộng lớn, thoáng đãng',
    'Tầng 2 & 3 có view nhìn ra phố qua vách kính',
    'Nhân viên bóc cua, gỡ tôm tại bàn cho khách',
    'Phù hợp gia đình, tiếp khách và nhóm bạn',
    'Chỗ đỗ ô tô tiện lợi ngay trước cửa',
];

export default function AboutSection() {
    return (
        <section id="about" className="section-pad bg-ocean-dark overflow-hidden relative">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--coral))_0%,transparent_60%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-coral/6 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-light/8 rounded-full blur-3xl" />

            {/* Decorative wave top */}
            <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-sand fill-current opacity-10">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Images collage */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-deep border-2 border-ocean-light/20">
                            <img
                                src="/img/img_quan_an.jpg"
                                alt="Không gian Xô Seafood"
                                className="w-full h-80 md:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/30 to-transparent" />
                        </div>
                        {/* Second image overlap */}
                        <div className="absolute -bottom-8 -right-4 md:-right-8 w-52 md:w-64 rounded-2xl overflow-hidden shadow-deep border-4 border-ocean-dark z-20">
                            <img
                                src="/img/nha_hang.jpg"
                                alt="Hải sản tươi Xô Seafood"
                                className="w-full h-36 md:h-44 object-cover"
                            />
                        </div>
                        {/* Coral accent corners */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-3 border-l-3 border-coral/60 z-30 rounded-tl-xl" style={{ borderWidth: '3px', borderRight: 'none', borderBottom: 'none' }} />
                        <div className="absolute -bottom-4 -right-4 md:-right-12 w-20 h-20 border-b-3 border-r-3 border-coral/60 z-30 rounded-br-xl" style={{ borderWidth: '3px', borderLeft: 'none', borderTop: 'none' }} />

                        {/* Floating badge */}
                        <div className="absolute -top-4 right-4 bg-coral text-white rounded-full px-4 py-2 z-30 font-sans text-sm font-semibold shadow-coral animate-float">
                            ⭐ 4.9/5 sao
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="pb-8 lg:pb-0">
                        <p className="text-coral font-sans text-sm tracking-widest uppercase mb-4 font-medium">Câu chuyện của XÔ</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
                            Từ biển cả{' '}
                            <span className="italic text-shimmer-coral">đến bàn ăn</span>
                        </h2>
                        <div className="w-14 h-0.5 bg-coral mb-6 rounded-full" />
                        <p className="text-white/78 font-sans leading-relaxed mb-4">
                            <span className="text-coral font-semibold">Lẩu cua cốm bầu</span> chỉ XÔ mới có, và nhiều món hải sản tươi ngon mang hương vị riêng đầy màu sắc từ các miền biển Việt, từ Năm Căn ra tới Cô Tô.
                        </p>
                        <p className="text-white/65 font-sans leading-relaxed mb-8">
                            "Ngon hơn ở biển" — khi XÔ phục vụ những đặc sản của đại dương bằng cả tấm lòng và bàn tay tâm huyết, chúng tôi tin mỗi bữa ăn là một chuyến hành trình về với biển cả.
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-3 mb-10">
                            {highlights.map((h) => (
                                <li key={h} className="flex items-center gap-3 text-white/80 font-sans text-sm">
                                    <CheckCircle size={16} className="text-coral shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => {
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-coral text-white px-8 py-3.5 font-serif font-semibold rounded-xl hover:brightness-110 transition-all duration-300 shadow-coral flex items-center gap-2 justify-center"
                            >
                                <Heart size={16} /> Đặt bàn ngay
                            </button>
                            <a
                                href="https://www.facebook.com/xoseafood"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-ocean-light/40 text-ocean-light px-8 py-3.5 font-serif rounded-xl hover:bg-ocean-light/10 transition-all duration-300 text-center"
                            >
                                Facebook XÔ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
