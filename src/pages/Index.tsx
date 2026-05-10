import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

const Index = () => {
    return (
        <div className="w-full min-h-full">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <AboutSection />
                <MenuSection />
                <GallerySection />
                <ReviewsSection />
                <AmenitiesSection />
                <ContactSection />
            </main>
            <Footer />
            <MobileCTA />
            {/* Bottom padding for mobile sticky CTA */}
            <div className="h-16 lg:hidden" />
        </div>
    );
};

export default Index;
