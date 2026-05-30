"use client";

import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import TextAbout from "@/components/sections/about/TextAbout";

export default function AboutPage() {
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

      <div id="about" data-section="about">
        <TextAbout
          useInvertedBackground={false}
          tag="Hakkımızda"
          tagAnimation="opacity"
          title="Başarılı E-Ticaret Mağazalarını İncele ve Öğrenin"
          buttons={[
            {
              text: "Daha Fazla Keşfet",              href: "/features"},
          ]}
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
