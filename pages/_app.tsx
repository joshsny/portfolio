import 'styles/global.css';

import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';

const interVariable = Inter();

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <main className={interVariable.className}>
            <Component {...pageProps} />
            <Analytics />
          </main>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
