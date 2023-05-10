import type { NextPage } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { TbBrandTwitter } from 'react-icons/tb';
import { z } from 'zod';
import { NewQuoteButton } from '@components/NewQuoteButton';
import { ErrorPage, LoadingPage } from '@components/States';
import { createMetadata } from '@utils/createMetadata';

export const metadata = createMetadata({
  path: '',
  title: 'Stay - Quote',
  description: 'Stay - Quote',
});

const responseSchema = z.object({
  author: z.string(),
  content: z.string(),
});

const fetchData = async () => {
  const res = await fetch('https://api.quotable.io/random', { cache: 'no-cache' });
  if (!res.ok) throw new Error(await res.text());

  return responseSchema.parse(await res.json());
};

const Quote = async () => {
  const data = await fetchData();

  if (!data)
    return (
      <>
        <ErrorPage />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <NewQuoteButton />
        </div>
      </>
    );

  return (
    <>
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

      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <NewQuoteButton />

        <Link
          className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-800"
          href={`https://twitter.com/intent/tweet?text="${data.content}" - ${data.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandTwitter size={18} />
          <span className="font-semibold">Share on Twitter</span>
        </Link>
      </div>
    </>
  );
};

const Page: NextPage = () => (
  <main className="flex h-screen flex-col p-6">
    <Suspense fallback={<LoadingPage />}>
      {/* @ts-expect-error Server Component Temp Fix */}
      <Quote />
    </Suspense>
  </main>
);

export default Page;
