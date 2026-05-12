import { useState } from 'react';
import { Flame, Star } from 'lucide-react';

type Category = 'best-seller' | 'lau' | 'hai-san' | 'nuong' | 'com-chao' | 'khai-vi';

const categories: { key: Category; label: string; emoji: string }[] = [
    { key: 'best-seller', label: 'Best Seller', emoji: '🔥' },
    { key: 'lau', label: 'Lẩu', emoji: '🫕' },
    { key: 'hai-san', label: 'Hải sản', emoji: '🦀' },
    { key: 'nuong', label: 'Nướng & Rang', emoji: '🦑' },
    { key: 'com-chao', label: 'Cơm & Cháo', emoji: '🍚' },
    { key: 'khai-vi', label: 'Khai vị', emoji: '🥗' },
];

const menuItems: Record<Category, { name: string; desc: string; price: string; best?: boolean; img: string }[]> = {
    'best-seller': [
        { name: 'Lẩu Cua Cốm Bầu', desc: 'Đặc sản số 1 của XÔ — cua tươi thịt chắc, cốm dẻo thơm, bầu ngọt mát. Nước lẩu ngọt tự nhiên, không hóa chất.', price: 'Từ 350.000đ', best: true, img: '/img/mon_an_1.jpg' },
        { name: 'Mực Nướng Mọi Giòn', desc: 'Mực tươi nướng trực tiếp trên than hoa, vàng giòn bên ngoài, ngọt mềm bên trong. Chấm muối tiêu chanh.', price: '180.000đ', best: true, img: '/img/mon_an_2.jpg' },
        { name: 'Ghẹ Rang Muối', desc: 'Ghẹ biển tươi, rang muối ớt thơm lừng. Da giòn, thịt ngọt, vị đậm đà khó cưỡng.', price: '220.000đ', best: true, img: '/img/mon_an_3.jpg' },
        { name: 'Tôm Hùm Hấp Bia', desc: 'Tôm hùm tươi hấp bia gừng, thịt ngọt, không tanh. Chấm muối chanh hoặc sốt bơ tỏi.', price: 'Theo kg', best: true, img: '/img/mon_an_4.jpg' },
    ],
    'lau': [
        { name: 'Lẩu Cua Cốm Bầu', desc: 'Signature của XÔ — Cua tươi + cốm dẻo + bầu non + nước lẩu thanh ngọt. Ăn một lần nhớ mãi!', price: 'Từ 350.000đ', best: true, img: '/img/mon_an_1.jpg' },
        { name: 'Lẩu Hải Sản Thập Cẩm', desc: 'Tôm, mực, nghêu, bạch tuộc, cua... trong nước lẩu chua cay đặc biệt. Phong phú và tươi ngon.', price: '280.000đ', img: '/img/mon_an_5.jpg' },
        { name: 'Lẩu Cua Đồng Riêu', desc: 'Cua đồng giã nát, lọc nước riêu cua mịn. Ăn kèm đậu hũ, bún, rau muống. Đậm đà hương quê.', price: '220.000đ', img: '/img/mon_an_6.jpg' },
        { name: 'Lẩu Mắm Hải Sản', desc: 'Lẩu mắm miền Tây chuẩn vị Nam Bộ, nhiều hải sản tươi, ăn kèm bông điên điển, rau xanh.', price: '260.000đ', img: '/img/mon_an_7.jpg' },
    ],
    'hai-san': [
        { name: 'Ghẹ Rang Muối Ớt', desc: 'Ghẹ biển tươi, rang muối ớt thơm lừng. Vị đậm đà, cay nhẹ, không thể bỏ qua.', price: '220.000đ', best: true, img: '/img/mon_an_3.jpg' },
        { name: 'Tôm Sú Hấp Sả', desc: 'Tôm sú to tươi, hấp sả gừng thơm. Vỏ đỏ đẹp, thịt ngọt chắc, chấm nước mắm chua ngọt.', price: '180.000đ', img: '/img/mon_an_8.jpg' },
        { name: 'Bạch Tuộc Nướng Sa Tế', desc: 'Bạch tuộc tươi ướp sa tế đặc biệt, nướng than hoa. Giòn dai, cay nồng, thơm lừng.', price: '150.000đ', img: '/img/mon_an_9.jpg' },
        { name: 'Nghêu Xào Sả Ớt', desc: 'Nghêu Bến Tre tươi, xào sả ớt vàng thơm. Nước xào đậm đà, chan cơm trắng ngon tuyệt.', price: '90.000đ', img: '/img/mon_an_10.jpg' },
    ],
    'nuong': [
        { name: 'Mực Nướng Mọi Giòn', desc: 'Mực ống tươi, nướng than hoa vàng giòn. Không ướp gia vị phức tạp, giữ vị ngọt tự nhiên.', price: '180.000đ', best: true, img: '/img/mon_an_2.jpg' },
        { name: 'Tôm Nướng Muối Ớt', desc: 'Tôm biển tươi, nướng muối ớt vàng đều, da giòn, thịt ngọt. Ăn tại bàn thơm phức.', price: '160.000đ', img: '/img/mon_an_111.jpg' },
        { name: 'Cá Thu Nướng Hành', desc: 'Cá thu một nắng nướng hành mỡ thơm lừng. Thịt cá đậm đà, ăn kèm cơm trắng.', price: '140.000đ', img: '/img/mon_an_121.jpg' },
        { name: 'Sò Huyết Nướng', desc: 'Sò huyết tươi nướng bơ tỏi. Mở miệng thơm lừng, nước sò ngọt đậm, ăn đến đâu thích đến đó.', price: '120.000đ', img: '/img/mon_an_131.jpg' },
    ],
    'com-chao': [
        { name: 'Cháo Hải Sản XÔ', desc: 'Cháo gạo tám thơm, nấu cùng tôm, mực, nghêu tươi. Ăn kèm quẩy giòn, gừng, hành phi.', price: '85.000đ', best: true, img: '/img/mon_an_141.jpg' },
        { name: 'Cơm Rang Hải Sản', desc: 'Cơm chiên giòn với tôm, mực, trứng. Thơm ngon đậm đà, ăn no mà không ngán.', price: '90.000đ', img: '/img/mon_an_151.jpg' },
        { name: 'Bún Cua Cà Chua', desc: 'Bún nước cua đồng, cà chua chín đỏ, đậu phụ rán. Chan nóng, ăn kèm rau sống.', price: '75.000đ', img: '/img/mon_an_161.jpg' },
        { name: 'Miến Xào Hải Sản', desc: 'Miến dong trong veo xào với tôm, mực, nấm đông cô. Nhẹ nhàng mà đầy đủ dưỡng chất.', price: '80.000đ', img: '/img/mon_an_171.jpg' },
    ],
    'khai-vi': [
        { name: 'Gỏi Đu Đủ Tôm Khô', desc: 'Đu đủ xanh giòn, tôm khô ngọt, đậu phộng rang, nước trộn chua ngọt đặc trưng miền Nam.', price: '65.000đ', best: true, img: '/img/mon_an_181.jpg' },
        { name: 'Chả Giò Hải Sản', desc: 'Chả giò nhân tôm mực giòn rụm, vàng ươm thơm lừng. Chấm nước mắm chua ngọt ăn không ngán.', price: '75.000đ', img: '/img/mon_an_4.jpg' },
        { name: 'Gỏi Ngó Sen Tôm Thịt', desc: 'Ngó sen giòn, tôm luộc, thịt heo, rau thơm. Trộn nước chua ngọt, rắc đậu phộng thơm.', price: '70.000đ', img: '/img/mon_an_5.jpg' },
        { name: 'Đầu Cá Hồi Sốt Đặc Biệt', desc: 'Đầu cá hồi tươi, áp chảo giòn bên ngoài, sốt tiêu chanh đặc biệt của XÔ. Không tanh.', price: '120.000đ', img: '/img/mon_an_6.jpg' },
    ],
};

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState<Category>('best-seller');

    return (
        <section id="menu" className="section-pad bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-coral font-sans text-sm tracking-widest uppercase mb-3 font-medium">Thực đơn</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-ocean-dark mb-4">
                        Đặc sản biển Việt
                    </h2>
                    <div className="divider-coral mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Mỗi món là một hành trình hương vị từ biển cả — tươi ngon, đậm đà và đầy màu sắc.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(({ key, label, emoji }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-5 py-2.5 text-sm font-sans font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${activeTab === key
                                ? 'bg-ocean text-white shadow-ocean'
                                : 'bg-muted text-muted-foreground hover:bg-sand-dark hover:text-foreground'
                                }`}
                        >
                            <span>{emoji}</span>
                            {label}
                        </button>
                    ))}
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems[activeTab].map(({ name, desc, price, best, img }) => (
                        <div
                            key={name}
                            className="hover-lift bg-card rounded-2xl overflow-hidden border border-border group shadow-sm"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                                    style={{ transform: 'scale(1)', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {best && (
                                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-coral text-white text-xs font-sans font-semibold px-2.5 py-1 rounded-full shadow-coral">
                                        <Flame size={10} />
                                        Best Seller
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="font-serif text-base text-foreground mb-1.5 leading-snug">{name}</h3>
                                <p className="text-muted-foreground font-sans text-xs leading-relaxed mb-3">{desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-coral font-sans font-bold text-sm">{price}</span>
                                    {best && <Star size={14} className="text-amber-400 fill-amber-400" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground font-sans text-sm mb-4">Xem đầy đủ thực đơn tại quán hoặc liên hệ trước</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-ocean text-white px-8 py-3.5 font-serif font-semibold rounded-xl hover:brightness-110 transition-all duration-300 shadow-ocean"
                        >
                            Đặt bàn & hỏi thêm
                        </button>
                        <a
                            href="https://www.facebook.com/xoseafood"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-ocean text-ocean px-8 py-3.5 font-serif font-semibold rounded-xl hover:bg-ocean hover:text-white transition-all duration-300 text-center"
                        >
                            Xem menu đầy đủ
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
