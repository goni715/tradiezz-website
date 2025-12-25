/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PaginationControls() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const page = Number(searchParams.get('page') ?? 1);
    const limit = Number(searchParams.get('limit') ?? 10);

    const updateParams = (updates: Record<string, string | number | null>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            value === null
                ? params.delete(key)
                : params.set(key, String(value));
        });

        router.replace(`${pathname}?${params.toString()}`);
    };
    

  return (
    <div className="flex items-center gap-4">
      <button onClick={() => updateParams({ page: page - 1 })} disabled={page <= 1}>
        Prev
      </button>

      <span>Page {page}</span>

      <button onClick={() => updateParams({ page: page + 1 })}>
        Next
      </button>

      <select
        value={limit}
        onChange={(e) => updateParams({ limit: e.target.value, page: 1 })}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}
