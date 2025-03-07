import type { Metadata } from 'next';
import { Inter, Indie_Flower } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navigation/Navbar';

const inter = Inter({ subsets: ['latin'] });
const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie',
});

export const metadata: Metadata = {
  title: 'Khushi Shah - Cybersecurity Professional',
  description: 'Personal website showcasing cybersecurity expertise, projects, and professional journey.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${indie.variable} min-h-screen bg-background`}>
        <Navbar />
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
} 