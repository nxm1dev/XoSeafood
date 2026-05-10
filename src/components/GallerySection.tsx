import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/06765ab8-08fa-45.jpg',
        caption: 'An Viên về đêm — lung linh đèn cây',
        category: 'Ngoại thất',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/8c641b75-e697-4b.jpg',
        caption: 'Không gian ngoài trời thoáng mát',
        category: 'Ngoại thất',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/5c0e8fe9-38e0-42.jpg',
        caption: 'Khu cafe – An Viên Coffee & Tea',
        category: 'Khu cafe',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/a9788a3c-a78b-46.jpg',
        caption: 'Biển hiệu An Viên sáng đẹp mỗi đêm',
        category: 'Check-in',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/229f2576-1c7d-4e.jpg',
        caption: 'Phòng ăn trong nhà – sức chứa lớn',
        category: 'Không gian ăn uống',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/2357c15e-3fcc-49.jpg',
        caption: 'Cổng chào An Viên Restaurant & Coffee',
        category: 'Ngoại thất',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/091a3964-b83c-4e.jpg',
        caption: 'Cà phê trứng đặc trưng An Viên',
        category: 'Đồ uống',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/24084262-7386-4e.jpg',
        caption: 'Trà chanh leo bạc hà tươi mát',
        category: 'Đồ uống',
    },
    {
        img: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045600/c230b5d1-394b-47.jpg',
        caption: 'Trà đào hồng tươi đặc biệt',
        category: 'Đồ uống',
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
        <section id="gallery" className="section-pad bg-ivory">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-gold font-sans text-sm tracking-widest uppercase mb-3">Khám phá</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">
                        Không gian An Viên
                    </h2>
                    <div className="divider-gold mb-5" />
                    <p className="text-muted-foreground font-sans max-w-lg mx-auto leading-relaxed">
                        Từ sân ngoài trời xanh mát đến phòng ăn ấm cúng, mỗi góc An Viên đều là một bức tranh đẹp.
                    </p>
                </div>

                {/* Photo grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {galleryItems.map((item, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-sm cursor-pointer group"
                            style={{ aspectRatio: '4/3' }}
                            onClick={() => setLightboxIndex(i)}
                        >
                            <img
                                src={item.img}
                                alt={item.caption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-xs text-gold font-sans tracking-wider uppercase">{item.category}</span>
                                <p className="text-ivory text-sm font-sans mt-1">{item.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-burgundy text-burgundy px-8 py-3.5 font-serif font-semibold rounded hover:bg-burgundy hover:text-ivory transition-all duration-300"
                    >
                        Đặt bàn để trải nghiệm
                    </button>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        className="absolute top-5 right-5 text-ivory/70 hover:text-gold transition-colors"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <X size={28} />
                    </button>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-gold transition-colors bg-burgundy/50 p-2 rounded-full"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galleryItems[lightboxIndex].img}
                            alt={galleryItems[lightboxIndex].caption}
                            className="w-full max-h-[80vh] object-contain rounded-sm"
                        />
                        <div className="text-center mt-4">
                            <span className="text-gold text-xs font-sans tracking-wider uppercase">{galleryItems[lightboxIndex].category}</span>
                            <p className="text-ivory/80 font-sans text-sm mt-1">{galleryItems[lightboxIndex].caption}</p>
                        </div>
                    </div>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-gold transition-colors bg-burgundy/50 p-2 rounded-full"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </section>
    );
}
