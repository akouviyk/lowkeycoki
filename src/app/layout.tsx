import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lowkey Coki | Beach Hookah Lounge',
  description:
    'Sunsets · Beach · Beats & Clouds at Coki Beach. Premium hookah experience with live DJs.',
  openGraph: {
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
