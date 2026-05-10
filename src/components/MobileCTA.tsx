import { Phone, CalendarCheck } from 'lucide-react';

export default function MobileCTA() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-burgundy border-t border-gold/20 px-4 py-3 flex gap-3 shadow-deep">
            <a
                href="tel:0982000000"
                className="flex-1 flex items-center justify-center gap-2 border border-gold/50 text-gold py-3 rounded font-sans font-medium text-sm hover:bg-gold/10 transition-colors"
            >
                <Phone size={16} />
                Gọi ngay
            </a>
            <button
                onClick={() => scrollTo('#contact')}
                className="flex-1 flex items-center justify-center gap-2 bg-gold text-burgundy-dark py-3 rounded font-sans font-semibold text-sm"
            >
                <CalendarCheck size={16} />
                Đặt bàn ngay
            </button>
        </div>
    );
}
