import styles from './Pagination.module.css';

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ page, totalPages, onChange }: Props) => {
  if (totalPages <= 1) return null;

  const pages = [1, 2, 3].filter(p => p <= totalPages);

  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 1}
        onClick={() => onChange(1)}
        className={styles.circle}
      >
        {'<<'}
      </button>

      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={styles.circle}
      >
        {'<'}
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`${styles.circle} ${
            page === p ? styles.active : ''
          }`}
        >
          {p}
        </button>
      ))}

      {totalPages > 3 && <span className={styles.dots}>…</span>}

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={styles.circle}
      >
        {'>'}
      </button>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(totalPages)}
        className={styles.circle}
      >
        {'>>'}
      </button>
    </div>
  );
};

// 'use client';

// import { useRouter, useSearchParams } from 'next/navigation';
// import styles from './Pagination.module.css';

// type Props = {
//   page: number;
//   totalPages: number;
// };

// export const Pagination = ({ page, totalPages }: Props) => {
//   const router = useRouter();
//   const params = useSearchParams();

//   const goTo = (p: number) => {
//     const sp = new URLSearchParams(params.toString());
//     sp.set('page', String(p));
//     router.push(`/notices?${sp}`);
//   };

//   return (
//     <div className={styles.pagination}>
//       <button disabled={page === 1} onClick={() => goTo(1)}>
//         {'<<'}
//       </button>

//       <button disabled={page === 1} onClick={() => goTo(page - 1)}>
//         {'<'}
//       </button>

//       <span>{page}</span>

//       <button
//         disabled={page === totalPages}
//         onClick={() => goTo(page + 1)}
//       >
//         {'>'}
//       </button>

//       <button
//         disabled={page === totalPages}
//         onClick={() => goTo(totalPages)}
//       >
//         {'>>'}
//       </button>
//     </div>
//   );
// };