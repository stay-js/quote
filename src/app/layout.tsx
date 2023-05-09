import { Analytics } from '@vercel/analytics/react';
import { ReactQueryWrapper } from '@components/ReactQueryWrapper';

import '@styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="antialiased">
      <body className="overflow-x-hidden bg-zinc-900 text-white">
        <Analytics />

        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
