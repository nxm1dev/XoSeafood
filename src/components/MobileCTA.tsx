import { Phone, CalendarCheck } from 'lucide-react';

export default function MobileCTA() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-ocean-dark/97 backdrop-blur-md border-t border-coral/25 px-4 py-3 flex gap-3 shadow-deep">
            <a
                href="tel:0965242066"
                className="flex-1 flex items-center justify-center gap-2 border border-ocean-light/40 text-ocean-light py-3 rounded-xl font-sans font-medium text-sm hover:bg-ocean-light/10 transition-colors"
            >
                <Phone size={16} />
                0965 242 066
            </a>
            <button
                onClick={() => scrollTo('#contact')}
                className="flex-1 flex items-center justify-center gap-2 bg-coral text-white py-3 rounded-xl font-sans font-semibold text-sm shadow-coral hover:brightness-110 transition-all"
            >
                <CalendarCheck size={16} />
                Đặt bàn ngay
            </button>
        </div>
    );
}
