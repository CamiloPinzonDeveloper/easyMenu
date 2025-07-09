import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lexend } from 'next/font/google';

import Providers from '@/components/Providers/Providers';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lexend',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Easy Menu',
  description: 'Menús digitales sencillos para cada mesa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} `}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
export const dynamic = 'force-dynamic'; // This is required for the metadata to be dynamic
export const revalidate = 0; // This is required for the metadata to be dynamic
