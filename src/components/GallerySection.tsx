import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
    {
        img: '/img/mon_an_1.jpg',
        caption: 'Lẩu cua cốm bầu — best seller của XÔ',
        category: 'Món đặc sắc',
    },
    {
        img: '/img/mon_an_2.jpg',
        caption: 'Mực nướng mọi giòn thơm hấp dẫn',
        category: 'Nướng',
    },
    {
        img: '/img/mon_an_3.jpg',
        caption: 'Ghẹ rang muối ớt đậm đà',
        category: 'Hải sản',
    },
    {
        img: '/img/mon_an_4.jpg',
        caption: 'Tôm hùm tươi hấp bia gừng',
        category: 'Hải sản',
    },
    {
        img: '/img/mon_an_5.jpg',
        caption: 'Lẩu hải sản thập cẩm đa dạng',
        category: 'Lẩu',
    },
    {
        img: '/img/dat_ban.jpg',
        caption: 'Không gian đặt bàn sang trọng',
        category: 'Không gian',
    },
    {
        img: '/img/mon_an_7.jpg',
        caption: 'Bàn ăn phục vụ nhóm đông',
        category: 'Không gian',
    },
    {
        img: '/img/mon_an_8.jpg',
        caption: 'Tôm sú tươi hấp sả thơm ngon',
        category: 'Hải sản',
    },
    {
        img: '/img/mon_an_9.jpg',
        caption: 'Bạch tuộc nướng sa tế',
        category: 'Nướng',
    },
    {
        img: '/img/mon_an_10.jpg',
        caption: 'Nghêu xào sả ớt vàng thơm',
        category: 'Hải sản',
    },
    {
        img: '/img/mon_an_111.jpg',
        caption: 'Tôm nướng muối ớt tươi ngon',
        category: 'Nướng',
    },
    {
        img: '/img/datban_21.jpg',
        caption: 'Không gian quán rộng, thoáng mát',
        category: 'Không gian',
    },
];

export default function GallerySection() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const prev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    };
    const next = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    };

    return (
        <section id="gallery" className="section-pad bg-sand">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-coral font-sans text-sm tracking-widest uppercase mb-3 font-medium">Khám phá</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-ocean-dark mb-4">
                        Không gian & Món ngon
                    </h2>
                    <div className="divider-coral mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Mỗi góc XÔ Seafood là một bức tranh sinh động của biển cả và ẩm thực miền Việt.
                    </p>
                </div>

                {/* Photo grid — masonry-style with varying sizes */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {galleryItems.map((item, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2' : ''} ${i === 5 ? 'col-span-2' : ''}`}
                            style={{ aspectRatio: i === 0 ? '1/1' : '4/3' }}
                            onClick={() => setLightboxIndex(i)}
                        >
                            <img
                                src={item.img}
                                alt={item.caption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-xs text-coral font-sans tracking-wider uppercase font-medium">{item.category}</span>
                                <p className="text-white text-sm font-sans mt-1">{item.caption}</p>
                            </div>
                            {/* Hover overlay icon */}
                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm">⛶</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-ocean text-ocean px-8 py-3.5 font-serif font-semibold rounded-xl hover:bg-ocean hover:text-white transition-all duration-300"
                    >
                        Đặt bàn để trải nghiệm
                    </button>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-ink/96 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        className="absolute top-5 right-5 text-white/70 hover:text-coral transition-colors"
                        onClick={() => setLightboxIndex(null)}
                        aria-label="Close"
                    >
                        <X size={28} />
                    </button>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-coral transition-colors bg-ocean/50 p-2 rounded-full"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galleryItems[lightboxIndex].img}
                            alt={galleryItems[lightboxIndex].caption}
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />
                        <div className="text-center mt-4">
                            <span className="text-coral text-xs font-sans tracking-wider uppercase">{galleryItems[lightboxIndex].category}</span>
                            <p className="text-white/80 font-sans text-sm mt-1">{galleryItems[lightboxIndex].caption}</p>
                        </div>
                    </div>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-coral transition-colors bg-ocean/50 p-2 rounded-full"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        aria-label="Next"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </section>
    );
}
