"use client";

import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";

export default function SocialProofPage() {
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

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Shopify",            "WooCommerce",            "Etsy",            "Amazon FBA",            "eBay",            "AliExpress",            "BigCommerce"]}
          title="İşinizi Büyütmenize Yardımcı Oluyoruz"
          description="E-ticaret ekosistemindeki önemli platformlarla entegrasyonlar ve bilgilerle destekleniyoruz."
          tag="Ortaklar"
          tagAnimation="opacity"
          buttonAnimation="opacity"
          speed={40}
          showCard={true}
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
