'use client';

import { useEffect, useState } from 'react';
import styles from './News.module.css';

import { Title } from '@/components/Title/Title';
import { SearchField } from '@/components/SearchField/SearchField';
import { NewsList } from '@/components/NewsList/NewsList';
import { Pagination } from '@/components/Pagination/Pagination';

import { getNews } from '@/services/newsApi';
import { NewsItem } from '@/types/news';

const PER_PAGE = 6;

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // значення інпута (локальне)
  const [searchInput, setSearchInput] = useState('');
  // значення, яке реально відправляється на backend
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchNews() {
      const data = await getNews(page, PER_PAGE, searchQuery);
      setNews(data.results);
      setTotalPages(data.totalPages);
    }

    fetchNews();
  }, [page, searchQuery]);

  const handleSearchSubmit = () => {
    setSearchQuery(searchInput);
    setPage(1); // ❗ reset сторінки при пошуку
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearchQuery('');
    setPage(1);
  };

  return (
    <section className={styles.page}>
      
      <Title text="News" />

      <SearchField
        value={searchInput}
        onChange={setSearchInput}
        onSubmit={handleSearchSubmit}
        onClear={handleClearSearch}
      />

      
      <NewsList news={news} />

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </section>
  );
}
