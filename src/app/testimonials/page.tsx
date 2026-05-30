"use client";

import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";

export default function TestimonialsPage() {
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              name: "Şefik Gür",              role: "CEO",              company: "sefikgur.com",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/blond-man-surprised_1194-2853.jpg",              imageAlt: "Şefik Gür"},
            {
              id: "2",              name: "Cihan Erden",              role: "Kurucu",              company: "cihanerden33",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/man-by-truck-guy-delivery-uniform_1157-46193.jpg",              imageAlt: "Cihan Erden"},
            {
              id: "3",              name: "Emirhan Sezen",              role: "Pazarlama Direktörü",              company: "emirhansezen.com",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-hand-his-pocket-holding-glass-drink_23-2147861968.jpg",              imageAlt: "Emirhan Sezen"},
            {
              id: "4",              name: "Ayşe Yılmaz",              role: "Mağaza Sahibi",              company: "TrendButik",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/stylish-secretary-posing-table-with-computer_23-2147670278.jpg",              imageAlt: "Ayşe Yılmaz"},
            {
              id: "5",              name: "Can Demir",              role: "Dropshipper",              company: "HızlıDropship",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/bald-man-with-beard-wearing-business-clothes-glasses-smiling-cheerful-showing-pointing-with-fingers-teeth-mouth-dental-health-concept_839833-16033.jpg",              imageAlt: "Can Demir"},
          ]}
          kpiItems={[
            {
              value: "$0'dan $10K'ya çıktı",              label: "Şefik Gür"},
            {
              value: "6 haneli 3 mağaza kurdu",              label: "Cihan Erden"},
            {
              value: "Manuel işten saatler kazandı",              label: "Emirhan Sezen"},
          ]}
          title="Kullanıcılarımız Ne Diyor — StoreLister Yorumları"
          description="Müşterilerimizin Storelister ile elde ettikleri başarıları ve memnuniyetlerini dinleyin."
          tag="Yorumlar"
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
