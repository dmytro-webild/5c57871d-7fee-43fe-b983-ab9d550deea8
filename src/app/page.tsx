"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Anasayfa",
          id: "#home",
        },
        {
          name: "Hakkımızda",
          id: "#about",
        },
        {
          name: "Özellikler",
          id: "#features",
        },
        {
          name: "Fiyatlandırma",
          id: "#pricing",
        },
        {
          name: "Yorumlar",
          id: "#testimonials",
        },
        {
          name: "İletişim",
          id: "#contact",
        },
      ]}
      brandName="Storelister"
      button={{
        text: "Başlayın",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardGallery
      background={{
        variant: "animated-grid",
      }}
      title="Dropshipping ve Shopify İçin Kazanan Ürünleri Bulun"
      description="Storelister ile satılacak kazandıran ürünleri keşfedin. Günlük güncellenen en yeni dropshipping ürünleri, nişler ve mağaza örnekleriyle rakiplerinizin önüne geçin."
      tag="Trendler"
      tagAnimation="opacity"
      buttons={[
        {
          text: "Bugün Başlayın",
          href: "#contact",
        },
      ]}
      buttonAnimation="opacity"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-3d-render-credit-debit-cards-futuristic-platform_187299-47941.jpg",
          imageAlt: "E-ticaret ürün listeleri arayüzü",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/shop-now-sale-mobile_23-2152020728.jpg",
          imageAlt: "Çeşitli ürün kategorilerini gösteren e-ticaret uygulaması",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/executive-manager-shwoing-marketing-graphs-freelancer-woman-analyzing-company-strategy-working-partnership-project-startup-office-marketing-team-brainstorming-business-ideas_482257-43876.jpg",
          imageAlt: "Ürün araştırma platformu analiz panosu",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mother-daughter-casual-adorable-heppiness-life-concept_53876-31608.jpg",
          imageAlt: "Shopify mağazalarına göz atma arayüzü",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-high-end-office-workspace-with-advanced-technology-enhance-efficiency_482257-119656.jpg",
          imageAlt: "Günlük güncellenen ürün fırsatları",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/robot-supported-shipping-boxes_1048-3529.jpg",
          imageAlt: "Yapay zeka destekli ürün kategorizasyonu",
        },
      ]}
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Hakkımızda"
      tagAnimation="opacity"
      title="Başarılı E-Ticaret Mağazalarını İncele ve Öğrenin"
      buttons={[
        {
          text: "Daha Fazla Keşfet",
          href: "#features",
        },
      ]}
      buttonAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [],
      }}
      positiveCard={{
        items: [
          "Dizinimizde binlerce gerçek Shopify mağazası bulunmaktadır.",
          "Markalı e-ticaret dükkanları, niş butikler ve aktif dropshipping operasyonları.",
          "Ürün sayfalarına göz atın ve fiyatları karşılaştırın.",
          "İlgilendiğiniz nişte neyin işe yaradığını görün.",
          "Yapay zeka iş akışımız her ürünü tek tek kategorize eder.",
          "Kategori seçin ve göz atmaya başlayın. Tahmin yürütme yok, rastgele sonuç yok.",
        ],
      }}
      title="Ürünleri İstediğiniz Nişte Bulun, Dijital Ürünler Dahil"
      description="Dijital ürünlerden güzelliğe, elektronikten modaya, evcil hayvan malzemelerine kadar hangi nişi araştırıyorsanız, yapay zeka iş akışımız listelediğimiz her ürünü tek tek kategorize ediyor. Kategori seç ve göz atmaya başla."
      tag="Özellikler"
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "50M+",
          title: "Kütüphanemizdeki Ürün",
          description: "Geniş ürün yelpazemizle keşfedecek sınırsız fırsatlar.",
          imageSrc: "http://img.b2bpic.net/free-photo/design-creative-inspirational-unique-special_53876-13821.jpg",
          imageAlt: "Ürün kütüphanesi simgesi",
        },
        {
          id: "m2",
          value: "1M+",
          title: "Takip Edilen Mağaza",
          description: "Binlerce başarılı mağazayı takip edin ve onlardan ilham alın.",
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-shopping-discount_23-2152027084.jpg",
          imageAlt: "Takip edilen mağaza simgesi",
        },
        {
          id: "m3",
          value: "5.000+",
          title: "Her Gün Eklenen Yeni Mağaza",
          description: "Sürekli güncellenen veritabanımızla en yeni fırsatları kaçırmayın.",
          imageSrc: "http://img.b2bpic.net/free-vector/cute-flat-elements_1212-63.jpg",
          imageAlt: "Yeni mağaza ekleme simgesi",
        },
      ]}
      title="Veriler Kendi Adına Konuşuyor"
      description="Her gün büyüyen bir ürün araştırma kütüphanesi oluşturduk. İşte şu an geldiğimiz nokta."
      tag="Veriler"
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Şefik Gür",
          role: "CEO",
          company: "sefikgur.com",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-surprised_1194-2853.jpg",
          imageAlt: "Şefik Gür",
        },
        {
          id: "2",
          name: "Cihan Erden",
          role: "Kurucu",
          company: "cihanerden33",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-by-truck-guy-delivery-uniform_1157-46193.jpg",
          imageAlt: "Cihan Erden",
        },
        {
          id: "3",
          name: "Emirhan Sezen",
          role: "Pazarlama Direktörü",
          company: "emirhansezen.com",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-hand-his-pocket-holding-glass-drink_23-2147861968.jpg",
          imageAlt: "Emirhan Sezen",
        },
        {
          id: "4",
          name: "Ayşe Yılmaz",
          role: "Mağaza Sahibi",
          company: "TrendButik",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-secretary-posing-table-with-computer_23-2147670278.jpg",
          imageAlt: "Ayşe Yılmaz",
        },
        {
          id: "5",
          name: "Can Demir",
          role: "Dropshipper",
          company: "HızlıDropship",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bald-man-with-beard-wearing-business-clothes-glasses-smiling-cheerful-showing-pointing-with-fingers-teeth-mouth-dental-health-concept_839833-16033.jpg",
          imageAlt: "Can Demir",
        },
      ]}
      kpiItems={[
        {
          value: "$0'dan $10K'ya çıktı",
          label: "Şefik Gür",
        },
        {
          value: "6 haneli 3 mağaza kurdu",
          label: "Cihan Erden",
        },
        {
          value: "Manuel işten saatler kazandı",
          label: "Emirhan Sezen",
        },
      ]}
      title="Kullanıcılarımız Ne Diyor — StoreLister Yorumları"
      description="Müşterilerimizin Storelister ile elde ettikleri başarıları ve memnuniyetlerini dinleyin."
      tag="Yorumlar"
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Shopify",
        "WooCommerce",
        "Etsy",
        "Amazon FBA",
        "eBay",
        "AliExpress",
        "BigCommerce",
      ]}
      title="İşinizi Büyütmenize Yardımcı Oluyoruz"
      description="E-ticaret ekosistemindeki önemli platformlarla entegrasyonlar ve bilgilerle destekleniyoruz."
      tag="Ortaklar"
      tagAnimation="opacity"
      buttonAnimation="opacity"
      speed={40}
      showCard={true}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      plans={[
        {
          id: "basic",
          badge: "Başlangıç",
          price: "Ücretsiz",
          subtitle: "Temel ürün araştırması",
          features: [
            "Günlük güncellemeler",
            "Sınırlı kategori erişimi",
            "50 ürün incelemesi",
          ],
        },
        {
          id: "pro",
          badge: "Popüler",
          badgeIcon: Sparkles,
          price: "$29/ay",
          subtitle: "Profesyonel dropshipper'lar için",
          features: [
            "Tüm kategorilere erişim",
            "Sınırsız ürün incelemesi",
            "Mağaza analizleri",
            "Trend ürün bildirimleri",
          ],
        },
        {
          id: "premium",
          badge: "İşletme",
          price: "$99/ay",
          subtitle: "E-ticaret uzmanları için",
          features: [
            "Tüm Pro özellikler",
            "Özel raporlar",
            "Rakip analizi",
            "Öncelikli destek",
          ],
        },
      ]}
      title="Fiyatlandırma Planlarımız"
      description="İşletmenizin ihtiyaçlarına uygun bir plan seçin ve e-ticaret potansiyelinizi maksimize edin."
      tag="Fiyatlandırma"
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-animated-grid",
      }}
      tag="İletişim"
      title="Sıradaki Kazanan Ürünün Bulunmayı Bekliyor"
      description="Her gün yeni e-ticaret mağazaları açılıyor, araştırmaya değer ürünlerle. Storelister onları nişe göre düzenliyor, kategoriye göre aranabilir yapıyor ve kütüphaneyi sürekli güncel tutuyor. Dropshipping, markalı e-ticaret, niş mağazalar, ne kuruyorsan kur, ürün araştırman buradan başlar."
      tagAnimation="opacity"
      inputPlaceholder="E-posta adresinizi girin"
      buttonText="Kaydol"
      termsText="Kaydolarak Şartlar ve Koşullarımızı kabul ettiğinizi onaylamış olursunuz."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="STORELISTER"
      leftLink={{
        text: "Gizlilik Politikası",
        href: "#",
      }}
      rightLink={{
        text: "Hizmet Şartları",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
