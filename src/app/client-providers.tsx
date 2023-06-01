'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60,
      refetchOnWindowFocus: false,
    },
  },
});

const ReactQueryWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ReactQueryWrapper>{children}</ReactQueryWrapper>
);
