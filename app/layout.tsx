import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Rajdhani } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const rajdhani = Rajdhani({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-rajdhani' });

export const metadata: Metadata = {
    title: 'FCHS Esports | Forsyth Central High School',
    description: 'The official website of the Forsyth Central High School Esports Club. Competing in Mario, Super Smash Bros, and Zelda.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${bebasNeue.variable} ${rajdhani.variable} font-sans`}>{children}</body>
        </html>
    );
}
