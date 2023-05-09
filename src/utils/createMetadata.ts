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

  title,
  description,

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
    url: `https://quote.znagy.hu${path}`,
    title,
    description,
    locale: 'en-US',
    siteName: 'Stay - Quote',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title,
    description,
  },
});
