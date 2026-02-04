'use client';

import { useRouter } from 'next/navigation';
import { Pagination } from '../Pagination/Pagination';

interface Props {
  page: number;
  totalPages: number;
  query: string; 
}

export const NoticesPagination = ({ page, totalPages, query }: Props) => {
  const router = useRouter();

  const handleChange = (newPage: number) => {
    const params = new URLSearchParams(query);
    params.set('page', String(newPage));

    router.push(`/notices?${params.toString()}`);
  };

  return (
    <Pagination
      page={page}
      totalPages={totalPages}
      onChange={handleChange}
    />
  );
};

// 'use client';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { Pagination } from '../Pagination/Pagination';

// interface Props {
//   page: number;
//   totalPages: number;
//   query: string;
// }

// export const NoticesPagination = ({ page, totalPages, query }: Props) => {
//   const router = useRouter();
//   const [currentPage, setCurrentPage] = useState(page);

//   const handleChange = (newPage: number) => {
//     setCurrentPage(newPage);
//     router.push(`/notices?${query}&page=${newPage}`);
//   };

//   return <Pagination page={currentPage} totalPages={totalPages} onChange={handleChange} />;
// };