import type { AppType } from 'next/dist/shared/lib/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';

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
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
