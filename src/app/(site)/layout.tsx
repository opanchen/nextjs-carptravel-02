import type { Metadata } from 'next';

import { AppBar } from '@/components/layout';

import { fetchMetadata } from '@/sanity/requests/fetchMetadata';
import { fetchSections } from '@/sanity/requests/fetchSections';
import { getStaticData } from '@/utils/helpers';

import '../globals.css';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = await fetchSections();
  const { sections: sectionsStatic } = await getStaticData();

  const navLinks =
    sections?.filter(({ name }) => name !== 'hero') ||
    sectionsStatic?.filter(({ name }) => name !== 'hero');

  return (
    <html lang="en">
      <body className="app relative">
        <AppBar links={navLinks} />
        <main className="font-inter">{children}</main>
      </body>
    </html>
  );
}
