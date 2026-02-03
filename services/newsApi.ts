import { NewsResponse } from '@/types/news';

const BASE_URL = 'https://petlove.b.goit.study/api';

export async function getNews(
  page: number,
  perPage: number,
 search?: string
): Promise<NewsResponse> {
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
  });
  if (search) {
    params.append('search', search);
  }
  const response = await fetch(
    `${BASE_URL}/news?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}


