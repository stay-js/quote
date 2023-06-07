import { ClientProviders } from './client-providers';

import '~/styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className="antialiased">
    <body className="overflow-x-hidden bg-zinc-900 text-white">
      <ClientProviders>{children}</ClientProviders>
    </body>
  </html>
);

export default RootLayout;
