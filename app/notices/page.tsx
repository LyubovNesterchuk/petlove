
import { headers } from 'next/headers';
import { Title } from '@/components/Title/Title';
import { NoticesFilters } from '@/components/NoticesFilters/NoticesFilters';
import { NoticesList } from '@/components/NoticesList/NoticesList';
import { NoticesPagination } from '@/components/NoticesPagination/NoticesPagination';
import styles from './NoticePage.module.css';

type PageProps = {
  searchParams: Promise<Record<string, string | undefined>>;
};

export default async function NoticesPage({ searchParams }: PageProps) {
  // ✅ await searchParams (Next 14)
  const params = await searchParams;

  const page = Number(params.page ?? 1);
  const perPage = Number(params.perPage ?? 6);

  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) query.set(key, value);
  });

  query.set('page', String(page));
  query.set('perPage', String(perPage));

  // ✅ await headers() (Next 14)
  const headersList = await headers();
  const host = headersList.get('host');

  if (!host) {
    throw new Error('Host header is missing');
  }

  const protocol =
    process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const url = `${protocol}://${host}/api/notices?${query.toString()}`;

  const res = await fetch(url, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch notices');
  }

  const data = await res.json();
  /*
    data = {
      page,
      perPage,
      totalPages,
      results
    }
  */

  return (
    <section className={styles.wrapper}>
      <Title text="Find your favorite pet" />

      <NoticesFilters />

      <NoticesList notices={data.results} />

      {data.totalPages > 1 && (
        <NoticesPagination
          page={data.page}
          totalPages={data.totalPages}
          query={query.toString()}
        />
      )}
    </section>
  );
}
