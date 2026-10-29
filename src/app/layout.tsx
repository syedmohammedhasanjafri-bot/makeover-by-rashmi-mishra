import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Makeover by Rashmi Mishra | Luxury Bridal Lookbook & Academy Admissions Portal',
  description:
    'Celebrity Bridal Makeup Artist & Academy Founder Rashmi Mishra in Kurla, Mumbai. Explore bespoke traditional, Maharashtrian regal, and reception dewy bridal looks, or enroll in our 30-Day Masterclass & Nail Art Diplomas (November & December 2026 Batches).',
  keywords: [
    'Makeover by Rashmi Mishra',
    'Bridal Makeup Artist Kurla Mumbai',
    'Celebrity Makeup Artist Mumbai',
    'Maharashtrian Bridal Makeup Nauvari',
    'Dewy Reception Makeup Mumbai',
    'Bridal Makeup Academy Kurla',
    'Nail Art Diploma Mumbai',
    'Makeup Masterclass Mumbai 2026',
    'Rashmi Mishra Makeup',
  ],
  authors: [{ name: 'Rashmi Mishra' }],
  metadataBase: new URL('https://makeoverbyrashmimishra.com'),
  openGraph: {
    title: 'Makeover by Rashmi Mishra | Timeless Bridal Glamour & Artistry Education',
    description:
      'Led by International Certified Artist Rashmi Mishra — Kurla, Mumbai. 5+ Years Industry Experience, 10.1K+ Community. Bridal Lookbook & 2026 Academy Admissions.',
    url: 'https://makeoverbyrashmimishra.com',
    siteName: 'Makeover by Rashmi Mishra',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#FDFBF7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#FDFBF7] text-[#1C1917] antialiased selection:bg-[#1C1917] selection:text-[#FDFBF7] min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
