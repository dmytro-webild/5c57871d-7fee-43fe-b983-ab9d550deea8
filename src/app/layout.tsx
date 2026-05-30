import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Storelister - Kazanan Ürünleri Keşfedin',
  description: 'Dropshipping ve Shopify için kazandıran ürünleri bulun. Günlük güncellenen mağaza dizini ve ürün araştırma aracıyla e-ticarette öne geçin.',
  keywords: ["dropshipping, shopify, ürün araştırma, e-ticaret, kazanan ürünler, storelister, niş ürünler, mağaza dizini"],
  openGraph: {
    "title": "Storelister - Kazanan Ürünleri Keşfedin",
    "description": "Dropshipping ve Shopify için kazandıran ürünleri bulun. Günlük güncellenen mağaza dizini ve ürün araştırma aracıyla e-ticarette öne geçin.",
    "url": "https://storelister.com",
    "siteName": "Storelister",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/conceptual-3d-render-credit-debit-cards-futuristic-platform_187299-47941.jpg",
        "alt": "Storelister ürün araştırma panosu"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Storelister - Kazanan Ürünleri Keşfedin",
    "description": "Dropshipping ve Shopify için kazandıran ürünleri bulun. Günlük güncellenen mağaza dizini ve ürün araştırma aracıyla e-ticarette öne geçin.",
    "images": [
      "http://img.b2bpic.net/free-photo/conceptual-3d-render-credit-debit-cards-futuristic-platform_187299-47941.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
