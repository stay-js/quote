import type { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { TbAlertCircle, TbRefresh } from 'react-icons/tb';

const Home: NextPage = () => {
  const { data, isLoading, isError, refetch } = useQuery(['quote'], () =>
    fetch('https://api.quotable.io/random').then((res) => res.json()),
  );

  return (
    <>
      <Head>
        <title>Stay - Quote</title>
      </Head>

      <main className="flex h-screen flex-col p-4">
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

        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-900"
          onClick={() => refetch()}
        >
          <TbRefresh size={18} />
          <span className="font-semibold">New quote</span>
        </button>
      </main>
    </>
  );
};

export default Home;
