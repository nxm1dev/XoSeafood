import { CheckCircle } from 'lucide-react';

const highlights = [
    'Không gian 2 tầng, sức chứa hàng trăm khách',
    'Khu sân ngoài trời thoáng mát với cây xanh',
    'Khu vực gia đình riêng tư, ấm cúng',
    'Khu cafe và trà với view đẹp',
    'Phù hợp sinh nhật, họp mặt, tiệc nhóm',
];

export default function AboutSection() {
    return (
        <section id="about" className="section-pad bg-burgundy overflow-hidden relative">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--gold))_0%,transparent_60%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Images */}
                    <div className="relative">
                        <div className="relative z-10 rounded-sm overflow-hidden shadow-deep">
                            <img
                                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/8c641b75-e697-4b.jpg"
                                alt="An Viên ban ngày"
                                className="w-full h-80 md:h-96 object-cover"
                            />
                        </div>
                        {/* Second image overlap */}
                        <div className="absolute -bottom-8 -right-4 md:-right-8 w-52 md:w-64 rounded-sm overflow-hidden shadow-deep border-4 border-burgundy z-20">
                            <img
                                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/5c0e8fe9-38e0-42.jpg"
                                alt="An Viên cafe"
                                className="w-full h-36 md:h-44 object-cover"
                            />
                        </div>
                        {/* Gold accent line */}
                        <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold/50 z-30" />
                        <div className="absolute -bottom-3 -right-3 md:-right-11 w-20 h-20 border-b-2 border-r-2 border-gold/50 z-30" />
                    </div>

                    {/* Text */}
                    <div className="pb-8 lg:pb-0">
                        <p className="text-gold font-sans text-sm tracking-widest uppercase mb-4">Câu chuyện của chúng tôi</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight mb-6">
                            Nơi ẩm thực{' '}
                            <span className="italic text-gold">gặp gỡ</span>{' '}
                            cảm xúc
                        </h2>
                        <div className="w-12 h-0.5 bg-gold mb-6" />
                        <p className="text-ivory/75 font-sans leading-relaxed mb-4">
                            An Viên ra đời với một mong muốn giản dị nhưng sâu sắc: tạo ra một nơi chốn mà bạn có thể thật sự thư giãn — thoải mái như ở nhà nhưng chỉn chu như một điểm hẹn sang trọng.
                        </p>
                        <p className="text-ivory/70 font-sans leading-relaxed mb-8">
                            Từ không gian kiến trúc ấm áp với cây xanh và ánh đèn lung linh, đến từng món ăn được chế biến tỉ mỉ — chúng tôi tin rằng một bữa ăn ngon cần đi kèm với không gian đẹp và sự phục vụ từ trái tim.
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-3 mb-10">
                            {highlights.map((h) => (
                                <li key={h} className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                                    <CheckCircle size={16} className="text-gold shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => {
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-gold text-burgundy-dark px-8 py-3.5 font-serif font-semibold rounded hover:brightness-110 transition-all duration-300 shadow-gold"
                        >
                            Đặt bàn ngay
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
