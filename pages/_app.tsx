import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Averta from '@next/font/local';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useState } from 'react';

const font = Averta({
  src: '../public/AvertaDemoPE-Regular.otf',
  variable: '--Averta',
});

// const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY;

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <main className={`${font.variable} font-averta`}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </SessionContextProvider>
  );
}
