import type { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { TbAlertCircle, TbBrandTwitter, TbRefresh } from 'react-icons/tb';
import { Meta } from '@components/Meta';

const validateData = (data: unknown): data is { author: string; content: string } => {
  if (!data) return false;

  return (
    typeof data === 'object' &&
    'author' in data &&
    'content' in data &&
    typeof data.author === 'string' &&
    typeof data.content === 'string'
  );
};

const Page: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading, isError, refetch } = useQuery(['quote'], () =>
    fetch('https://api.quotable.io/random').then(async (res) => {
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    }),
  );

  return (
    <>
      <Meta path="/" title="Stay - Quote" description="Stay - Quote" />

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

          {!isError && validateData(data) ? (
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
          ) : (
            !isLoading && (
              <div className="flex flex-col items-center gap-2">
                <TbAlertCircle size={48} color="red" className="animate-bounce" />
                Something went wrong... Please try again later.
              </div>
            )
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <button
            className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-800"
            type="button"
            onClick={() => void refetch()}
          >
            <TbRefresh size={18} />
            <span className="font-semibold">New quote</span>
          </button>

          {validateData(data) && (
            <Link
              className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-800"
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

export default Page;
