import type { Metadata } from 'next';

export const createMetadata = ({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata => ({
  metadataBase: new URL('https://quote.znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords: 'quote, random quote, daily quote, quote of the day, quotable, stay, znagy, znagy.hu',

  themeColor: '#18181b',
  colorScheme: 'dark',

  title,
  description,

  applicationName: 'Stay - Quote',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: `https://quote.znagy.hu${path}`,
    title,
    description,
    siteName: 'Stay - Quote',
    locale: 'en-US',
  },

  twitter: {
    card: 'summary',
    title,
    description,
  },
});
