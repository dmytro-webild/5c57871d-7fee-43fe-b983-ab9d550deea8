"use client";

import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import { Sparkles } from "lucide-react";

export default function PricingPage() {
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

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={true}
          carouselMode="buttons"
          plans={[
            {
              id: "basic",              badge: "Başlangıç",              price: "Ücretsiz",              subtitle: "Temel ürün araştırması",              features: [
                "Günlük güncellemeler",                "Sınırlı kategori erişimi",                "50 ürün incelemesi"],
            },
            {
              id: "pro",              badge: "Popüler",              badgeIcon: Sparkles,
              price: "$29/ay",              subtitle: "Profesyonel dropshipper'lar için",              features: [
                "Tüm kategorilere erişim",                "Sınırsız ürün incelemesi",                "Mağaza analizleri",                "Trend ürün bildirimleri"],
            },
            {
              id: "premium",              badge: "İşletme",              price: "$99/ay",              subtitle: "E-ticaret uzmanları için",              features: [
                "Tüm Pro özellikler",                "Özel raporlar",                "Rakip analizi",                "Öncelikli destek"],
            },
          ]}
          title="Fiyatlandırma Planlarımız"
          description="İşletmenizin ihtiyaçlarına uygun bir plan seçin ve e-ticaret potansiyelinizi maksimize edin."
          tag="Fiyatlandırma"
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
