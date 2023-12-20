import type { Metadata } from 'next';

import { fetchMetadata } from '@/sanity/requests/fetchMetadata';
import { getStaticData } from '@/utils/helpers';

import { Inter, Karantina } from 'next/font/google';

import '../globals.css';

const inter = Inter({
  weight: ['100', '200', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const karantina = Karantina({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-karantina',
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const dynamic = await fetchMetadata();

  const {
    meta: { title, description, keywords, manifest, openGraph, icons },
  } = await getStaticData();

  return {
    title: dynamic?.title || title,
    description: dynamic?.description || description,
    keywords: dynamic?.keywords || keywords,
    manifest,
    metadataBase: new URL(baseUrl),
    openGraph: { ...openGraph, url: baseUrl },
    icons,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${karantina.className} ${inter.className} app`}>
        {children}
      </body>
    </html>
  );
}
