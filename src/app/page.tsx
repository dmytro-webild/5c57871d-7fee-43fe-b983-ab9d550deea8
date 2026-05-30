"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";

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
              text: "Başlayın",              href: "/contact"}}
          />
        </div>

        <div id="home" data-section="home">
          <HeroBillboardGallery
            background={{
              variant: "animated-grid"}}
            title="Dropshipping ve Shopify İçin Kazanan Ürünleri Bulun"
            description="Storelister ile satılacak kazandıran ürünleri keşfedin. Günlük güncellenen en yeni dropshipping ürünleri, nişler ve mağaza örnekleriyle rakiplerinizin önüne geçin."
            tag="Trendler"
            tagAnimation="opacity"
            buttons={[
              {
                text: "Bugün Başlayın",                href: "/contact"},
            ]}
            buttonAnimation="opacity"
            mediaItems={[
              {
                imageSrc: "http://img.b2bpic.net/free-photo/conceptual-3d-render-credit-debit-cards-futuristic-platform_187299-47941.jpg",                imageAlt: "E-ticaret ürün listeleri arayüzü"},
              {
                imageSrc: "http://img.b2bpic.net/free-photo/shop-now-sale-mobile_23-2152020728.jpg",                imageAlt: "Çeşitli ürün kategorilerini gösteren e-ticaret uygulaması"},
              {
                imageSrc: "http://img.b2bpic.net/free-photo/executive-manager-shwoing-marketing-graphs-freelancer-woman-analyzing-company-strategy-working-partnership-project-startup-office-marketing-team-brainstorming-business-ideas_482257-43876.jpg",                imageAlt: "Ürün araştırma platformu analiz panosu"},
              {
                imageSrc: "http://img.b2bpic.net/free-photo/mother-daughter-casual-adorable-heppiness-life-concept_53876-31608.jpg",                imageAlt: "Shopify mağazalarına göz atma arayüzü"},
              {
                imageSrc: "http://img.b2bpic.net/free-photo/empty-high-end-office-workspace-with-advanced-technology-enhance-efficiency_482257-119656.jpg",                imageAlt: "Günlük güncellenen ürün fırsatları"},
              {
                imageSrc: "http://img.b2bpic.net/free-photo/robot-supported-shipping-boxes_1048-3529.jpg",                imageAlt: "Yapay zeka destekli ürün kategorizasyonu"},
            ]}
            mediaAnimation="opacity"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoText="STORELISTER"
            leftLink={{
              text: "Gizlilik Politikası",              href: "#"}}
            rightLink={{
              text: "Hizmet Şartları",              href: "#"}}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
