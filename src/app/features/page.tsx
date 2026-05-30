"use client";

import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";

export default function FeaturesPage() {
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
              "Dizinimizde binlerce gerçek Shopify mağazası bulunmaktadır.",              "Markalı e-ticaret dükkanları, niş butikler ve aktif dropshipping operasyonları.",              "Ürün sayfalarına göz atın ve fiyatları karşılaştırın.",              "İlgilendiğiniz nişte neyin işe yaradığını görün.",              "Yapay zeka iş akışımız her ürünü tek tek kategorize eder.",              "Kategori seçin ve göz atmaya başlayın. Tahmin yürütme yok, rastgele sonuç yok."],
          }}
          title="Ürünleri İstediğiniz Nişte Bulun, Dijital Ürünler Dahil"
          description="Dijital ürünlerden güzelliğe, elektronikten modaya, evcil hayvan malzemelerine kadar hangi nişi araştırıyorsanız, yapay zeka iş akışımız listelediğimiz her ürünü tek tek kategorize ediyor. Kategori seç ve göz atmaya başla."
          tag="Özellikler"
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
