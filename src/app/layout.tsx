import { Analytics } from '@vercel/analytics/react';

import '@styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className="antialiased">
    <body className="overflow-x-hidden bg-zinc-900 text-white">
      <Analytics />

      {children}
    </body>
  </html>
);

export default RootLayout;
