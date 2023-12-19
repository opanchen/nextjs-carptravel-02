import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Carptravel',
  description: "Uncover Carpathian's secrets",
};

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
