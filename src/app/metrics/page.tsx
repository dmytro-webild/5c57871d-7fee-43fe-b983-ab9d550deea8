"use client";

import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";

export default function MetricsPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Anasayfa", id: "/" },
            { name: "Hakkımızda", id: "/about" },
            { name: "Özellikler", id: "/features" },
            { name: "Metrikler", id: "/metrics" },
            { name: "Yorumlar", id: "/testimonials" },
            { name: "Sosyal Kanıt", id: "/social-proof" },
            { name: "Fiyatlandırma", id: "/pricing" },
            { name: "Blog", id: "/blog" },
            { name: "Ürünler", id: "/products" },
            { name: "İletişim", id: "/contact" }
          ]}
          brandName="Storelister"
          button={{
            text: "Başlayın",            href: "/contact"}}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            {
              id: "m1",              value: "50M+",              title: "Kütüphanemizdeki Ürün",              description: "Geniş ürün yelpazemizle keşfedecek sınırsız fırsatlar.",              imageSrc: "http://img.b2bpic.net/free-photo/design-creative-inspirational-unique-special_53876-13821.jpg",              imageAlt: "Ürün kütüphanesi simgesi"},
            {
              id: "m2",              value: "1M+",              title: "Takip Edilen Mağaza",              description: "Binlerce başarılı mağazayı takip edin ve onlardan ilham alın.",              imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-shopping-discount_23-2152027084.jpg",              imageAlt: "Takip edilen mağaza simgesi"},
            {
              id: "m3",              value: "5.000+",              title: "Her Gün Eklenen Yeni Mağaza",              description: "Sürekli güncellenen veritabanımızla en yeni fırsatları kaçırmayın.",              imageSrc: "http://img.b2bpic.net/free-vector/cute-flat-elements_1212-63.jpg",              imageAlt: "Yeni mağaza ekleme simgesi"},
          ]}
          title="Veriler Kendi Adına Konuşuyor"
          description="Her gün büyüyen bir ürün araştırma kütüphanesi oluşturduk. İşte şu an geldiğimiz nokta."
          tag="Veriler"
          tagAnimation="opacity"
          buttonAnimation="opacity"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="STORELISTER"
          leftLink={{
            text: "Gizlilik Politikası",            href: "#"}}
          rightLink={{
            text: "Hizmet Şartları",            href: "#"}}
        />
      </div>
    </>
  );
}
