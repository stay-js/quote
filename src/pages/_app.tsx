import type { AppType } from 'next/dist/shared/lib/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';

import '@styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60,
      refetchOnWindowFocus: false,
    },
  },
});

const App: AppType = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <Analytics />
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
