import type { NextPage } from 'next';
import { Quote } from '@components/Quote';
import { createMetadata } from '@utils/createMetadata';

export const metadata = createMetadata({
  path: '',
  title: 'Stay - Quote',
  description: 'Stay - Quote',
});

const Page: NextPage = () => (
  <main className="flex h-screen flex-col p-6">
    <Quote />
  </main>
);

export default Page;
