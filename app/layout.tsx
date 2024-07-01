import '@/styles/globals.css';
import { Metadata } from 'next';
import Averta from '@next/font/local';
import { ThemeProvider } from './ThemeProvider';

const font = Averta({
  src: '../public/AvertaDemoPE-Regular.otf',
  variable: '--Averta',
});

export const metadata: Metadata = {
  title: 'Nucleus - Home',
  description: 'Nucleus is all in one app for your public api',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.variable} font-averta scroll-smooth`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
