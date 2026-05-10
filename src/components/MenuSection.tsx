import { useState } from 'react';
import { Star } from 'lucide-react';

type Category = 'dac-sac' | 'mon-chinh' | 'khai-vi' | 'do-uong' | 'ca-phe' | 'tre-em';

const categories: { key: Category; label: string }[] = [
    { key: 'dac-sac', label: 'Món đặc sắc' },
    { key: 'mon-chinh', label: 'Món chính' },
    { key: 'khai-vi', label: 'Khai vị' },
    { key: 'do-uong', label: 'Đồ uống' },
    { key: 'ca-phe', label: 'Cà phê' },
    { key: 'tre-em', label: 'Trẻ em' },
];

const menuItems: Record<Category, { name: string; desc: string; price: string; best?: boolean; img?: string }[]> = {
    'dac-sac': [
        { name: 'Cá hồi nướng đá tảng', desc: 'Cá hồi tươi nhập khẩu, nướng trên đá nóng, ăn kèm rau sốt chanh dây.', price: '280.000đ', best: true },
        { name: 'Bò sốt tiêu đen', desc: 'Thịt bò Mỹ mềm mại, sốt tiêu đen thơm lừng, phục vụ cùng khoai tây nghiền.', price: '250.000đ', best: true },
        { name: 'Tôm hùm nướng bơ tỏi', desc: 'Tôm hùm tươi nướng với bơ tỏi thơm, trình bày sang trọng.', price: '320.000đ' },
        { name: 'Gà nướng mật ong', desc: 'Gà nguyên con nướng mật ong, da giòn bên ngoài, thịt mềm bên trong.', price: '220.000đ', best: true },
    ],
    'mon-chinh': [
        { name: 'Cơm chiên thập cẩm', desc: 'Cơm chiên với hải sản, rau củ, trứng. Thơm ngon đậm đà.', price: '120.000đ', best: true },
        { name: 'Mì xào hải sản', desc: 'Mì vàng xào với tôm, mực tươi và rau xanh, sốt hải sản đặc biệt.', price: '130.000đ' },
        { name: 'Sườn non nướng BBQ', desc: 'Sườn non ngon mềm, ướp gia vị BBQ, nướng than hoa thơm.', price: '165.000đ', best: true },
        { name: 'Cơm gà hấp muối', desc: 'Gà hấp muối truyền thống, da vàng, thịt săn chắc, ăn kèm cơm trắng.', price: '145.000đ' },
    ],
    'khai-vi': [
        { name: 'Gỏi cuốn tôm thịt', desc: 'Bánh tráng, tôm tươi, thịt heo, rau thơm. Chấm nước mắm chua ngọt.', price: '75.000đ', best: true },
        { name: 'Chả giò hải sản', desc: 'Chả giò nhân hải sản giòn rụm, vàng ươm, thơm lừng.', price: '85.000đ' },
        { name: 'Súp bí đỏ kem', desc: 'Súp bí đỏ mịn màng, thêm kem tươi và hạt bí rang.', price: '65.000đ' },
        { name: 'Salad bơ cà chua', desc: 'Bơ chín, cà chua bi, phomai, rưới dầu oliu và giấm balsamic.', price: '79.000đ' },
    ],
    'do-uong': [
        { name: 'Nước ép chanh leo bạc hà', desc: 'Chanh leo tươi, bạc hà thơm, đá lạnh — thanh mát đặc trưng.', price: '55.000đ', best: true, img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/24084262-7386-4e.jpg' },
        { name: 'Trà đào cam sả', desc: 'Trà đào thơm ngon, cam tươi, sả, uống lạnh hay nóng đều ngon.', price: '49.000đ', best: true, img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/c230b5d1-394b-47.jpg' },
        { name: 'Sinh tố xoài dừa', desc: 'Xoài chín, nước dừa tươi, đá xay. Béo ngậy mát lạnh.', price: '55.000đ', img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/24084262-7386-4e.jpg' },
        { name: 'Nước dừa tươi', desc: 'Dừa xiêm tươi chặt tại chỗ, uống lạnh sảng khoái.', price: '35.000đ' },
    ],
    'ca-phe': [
        { name: 'Cà phê trứng An Viên', desc: 'Cà phê phin Việt truyền thống, phủ lớp kem trứng mịn đặc trưng.', price: '55.000đ', best: true, img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/091a3964-b83c-4e.jpg' },
        { name: 'Cà phê đá muối', desc: 'Cà phê đen đậm, thêm muối biển, béo ngậy khó cưỡng.', price: '49.000đ', best: true },
        { name: 'Bạc xỉu đặc biệt', desc: 'Cà phê sữa Việt Nam đậm đà, thêm kem béo tan trong miệng.', price: '45.000đ' },
        { name: 'Cold brew chanh sả', desc: 'Cold brew ngâm 18 tiếng, pha với chanh tươi và sả.', price: '59.000đ' },
    ],
    'tre-em': [
        { name: 'Gà chiên giòn nhí', desc: 'Miếng gà giòn cỡ nhỏ cho bé, vị nhẹ không cay, ăn kèm sốt cà chua.', price: '79.000đ', best: true },
        { name: 'Mì ý sốt cà chua', desc: 'Mì spaghetti mềm sốt cà chua nhẹ, phù hợp với bé 3 tuổi trở lên.', price: '75.000đ' },
        { name: 'Cơm trắng + trứng chiên', desc: 'Bữa cơm đơn giản dành cho bé. Trứng gà, cơm trắng, rau luộc.', price: '55.000đ' },
        { name: 'Sữa flan caramen', desc: 'Flan mềm mịn, sốt caramen thơm. Tráng miệng yêu thích của trẻ.', price: '39.000đ' },
    ],
};

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState<Category>('dac-sac');

    return (
        <section id="menu" className="section-pad bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-gold font-sans text-sm tracking-widest uppercase mb-3">Thực đơn</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">
                        Tinh hoa ẩm thực
                    </h2>
                    <div className="divider-gold mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Mỗi món ăn là một câu chuyện về hương vị, được chế biến từ nguyên liệu tươi ngon nhất.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-5 py-2.5 text-sm font-sans font-medium rounded-sm transition-all duration-200 ${activeTab === key
                                    ? 'bg-burgundy text-ivory shadow-warm'
                                    : 'bg-muted text-muted-foreground hover:bg-ivory-dark hover:text-foreground'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems[activeTab].map(({ name, desc, price, best, img }) => (
                        <div
                            key={name}
                            className="hover-lift bg-card rounded-sm overflow-hidden border border-border group"
                        >
                            {/* Image or placeholder */}
                            <div className="h-44 bg-muted overflow-hidden relative">
                                {img ? (
                                    <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ivory to-muted">
                                        <span className="text-5xl opacity-20 font-serif text-burgundy">AV</span>
                                    </div>
                                )}
                                {best && (
                                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-gold text-burgundy-dark text-xs font-sans font-semibold px-2.5 py-1 rounded-sm">
                                        <Star size={10} fill="currentColor" />
                                        Best Seller
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="font-serif text-base text-foreground mb-1.5">{name}</h3>
                                <p className="text-muted-foreground font-sans text-xs leading-relaxed mb-3">{desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gold font-sans font-semibold text-sm">{price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground font-sans text-sm mb-4">Xem đầy đủ thực đơn tại nhà hàng hoặc liên hệ trước</p>
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-burgundy text-ivory px-8 py-3.5 font-serif font-semibold rounded hover:brightness-110 transition-all duration-300 shadow-warm"
                    >
                        Đặt bàn & hỏi thêm
                    </button>
                </div>
            </div>
        </section>
    );
}
