import { Analytics } from '@vercel/analytics/react';
import { ReactQueryWrapper } from '@components/ReactQueryWrapper';

import '@styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className="antialiased">
    <body className="overflow-x-hidden bg-zinc-900 text-white">
      <Analytics />

      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </body>
  </html>
);

export default RootLayout;
