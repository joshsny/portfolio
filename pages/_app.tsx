import 'styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { useAnalytics } from 'lib/analytics';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: process.env.NODE_ENV === 'development' ? 0 : 2,
          cacheTime: 1000 * 60 * 60 * 24
        }
      }
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-left'} />
    </QueryClientProvider>
  );
}
