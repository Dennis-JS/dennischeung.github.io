'use client';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=' bg-slate-800 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-800'>
        <div id='__next'>
          <div>
            <div className=' pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'></div>
            <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
              <div className='lg:flex lg:justify-between lg:gap-4'>
                <Nav />
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}