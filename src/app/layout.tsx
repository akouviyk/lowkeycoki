import './globals.css';
import type { Metadata } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd 
  ? 'https://akouviyk.github.io/lowkeycoki'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Lowkey Coki | Beach Hookah Lounge',
  description:
    'Sunsets · Beach · Beats & Clouds at Coki Beach. Premium hookah experience with live DJs.',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Lowkey Coki | Beach Hookah Lounge',
    description: 'Sunsets · Beach · Beats & Clouds at Coki Beach',
    url: baseUrl,
    siteName: 'Lowkey Coki',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lowkey Coki Beach Hookah Lounge',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lowkey Coki | Beach Hookah Lounge',
    description: 'Sunsets · Beach · Beats & Clouds at Coki Beach',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://imagedelivery.net" />
      </head>
      <body>{children}</body>
    </html>
  );
}
