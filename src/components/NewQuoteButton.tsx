'use client';

import { useRouter } from 'next/navigation';
import { TbRefresh } from 'react-icons/tb';

export const NewQuoteButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className="flex w-fit items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-zinc-800"
      type="button"
      onClick={() => router.refresh()}
    >
      <TbRefresh size={18} />
      <span className="font-semibold">New quote</span>
    </button>
  );
};
