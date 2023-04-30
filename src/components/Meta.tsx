import Head from 'next/head';

export const Meta: React.FC<{
  path: string;
  title: string;
  desc: string;
}> = ({ path, title, desc }) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <meta name="author" content="Zétény Nagy" />

    <meta
      name="keywords"
      content="quote, random quote, daily quote, quote of the day, quotable, stay, znagy, znagy.hu"
    />

    <meta name="theme-color" content="#18181b" />

    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Stay - Quote" />

    <meta name="twitter:card" content="summary" />
    <meta property="twitter:domain" content="quote.znagy.hu" />

    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <meta name="rating" content="general" />

    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />

    <meta name="description" content={desc} />
    <meta property="og:description" content={desc} />
    <meta name="twitter:description" content={desc} />

    <meta name="url" content={`https://quote.znagy.hu${path}`} />
    <meta property="og:url" content={`https://quote.znagy.hu${path}`} />
    <meta property="twitter:url" content={`https://quote.znagy.hu${path}`} />
  </Head>
);
