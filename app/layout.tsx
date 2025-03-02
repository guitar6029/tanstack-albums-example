import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import QueryWrapper from '../components/Wrapper/QueryWrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>
          <Header />
          <main className="min-h-screen">{children}</main>
        </QueryWrapper>
      </body>
    </html>
  );
}
