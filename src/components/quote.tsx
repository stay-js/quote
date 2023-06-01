'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { TbBrandTwitter, TbRefresh } from 'react-icons/tb';
import { z } from 'zod';
import { ErrorPage, LoadingPage } from '~/components/states';

const responseSchema = z.object({
  author: z.string(),
  content: z.string(),
});

export const Quote: React.FC = () => {
  const { data, error, isLoading, refetch } = useQuery(['quote'], async () => {
    const res = await fetch('https://api.quotable.io/random');
    if (!res.ok) throw new Error('Failed to fetch quote');

    return responseSchema.parse(await res.json());
  });

  return (
    <>
      {isLoading && <LoadingPage />}
      {error && <ErrorPage />}

      {data && (
        <div className="flex h-full flex-col items-center justify-center">
          <figure className="max-w-[75ch] font-medium">
            <blockquote>
              <p className="text-2xl text-neutral-100">{data.content}</p>
            </blockquote>
            <figcaption>
              <cite className="text-lg text-neutral-300 before:content-['-_']" title={data.author}>
                {data.author}
              </cite>
            </figcaption>
          </figure>
        </div>
      )}

      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <button
          className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-800"
          type="button"
          onClick={() => refetch()}
        >
          <TbRefresh size={18} />
          <span className="font-semibold">New quote</span>
        </button>

        {data && (
          <Link
            className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-800"
            href={encodeURI(
              `https://twitter.com/intent/tweet?text="${data.content}" - ${data.author}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandTwitter size={18} />
            <span className="font-semibold">Share on Twitter</span>
          </Link>
        )}
      </div>
    </>
  );
};
