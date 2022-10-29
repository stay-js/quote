import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Link from 'next/link';
import { TbAlertCircle, TbBrandTwitter, TbRefresh } from 'react-icons/tb';

const Home: NextPage = () => {
  const { data, isLoading, isError, refetch } = useQuery(['quote'], () =>
    fetch('https://api.quotable.io/random').then((res) => res.json()),
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="author" content="stay" />
        <meta
          name="keywords"
          content="stay, Zétény, Nagy, Zétény Nagy, quote, random, random quote, daily quote, quote of the day, api, quotable, react, next, nextjs, react-query"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" key="og_type" />
        <meta property="og:site_name" content="Zétény Nagy" key="site_name" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="znagy.hu" />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />

        <title>Stay - Quote</title>
        <meta property="og:title" content="Stay - Quote" key="title" />
        <meta name="twitter:title" content="Stay - Quote" />

        <meta name="description" content="Random quote app. Stay - Quote<" />
        <meta property="og:description" content="Random quote app. Stay - Quote<" />
        <meta name="twitter:description" content="Random quote app. Stay - Quote<" />

        <meta name="url" content="https://quote.znagy.hu/" />
        <meta property="og:url" content="https://quote.znagy.hu/" />
        <meta property="twitter:url" content="https://quote.znagy.hu/" />
      </Head>

      <main className="flex h-screen flex-col p-6">
        <div className="flex h-full flex-col items-center justify-center">
          {isLoading && (
            <svg className="h-8 w-8 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="stroke-teal-500 opacity-25"
                cx="12"
                cy="12"
                r="10"
                strokeWidth="4"
              />
              <path
                className="fill-teal-500"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}

          {isError && (
            <div className="flex flex-col items-center gap-2">
              <TbAlertCircle size={48} color="red" className="animate-bounce" />
              Something went wrong... Please try again later.
            </div>
          )}

          {data && (
            <figure className="max-w-[75ch] font-medium">
              <blockquote>
                <p className="text-2xl text-neutral-100">{data.content}</p>
              </blockquote>
              <figcaption>
                <cite
                  className="text-lg text-neutral-300 before:content-['-_']"
                  title={data.author}
                >
                  {data.author}
                </cite>
              </figcaption>
            </figure>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <button
            className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-900"
            type="button"
            onClick={() => refetch()}
          >
            <TbRefresh size={18} />
            <span className="font-semibold">New quote</span>
          </button>

          {data && (
            <Link
              className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-900"
              href={`https://twitter.com/intent/tweet?text="${data.content}" - ${data.author}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandTwitter size={18} />
              <span className="font-semibold">Share on Twitter</span>
            </Link>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
