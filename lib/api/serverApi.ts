import { cookies } from 'next/headers';
import { nextServer } from './api';
import { User } from '@/types/user';
import { Notice } from '@/types/notice';

// ------------------ Notice ------------------

export interface FetchNoticesResponse {
  notices: Notice[];
  totalPages: number;
}

export const fetchServerNotices = async (
  search: string,
  page = 1,
  perPage = 12,
  tag?: string
): Promise<FetchNoticesResponse> => {
  const cookieStore = await cookies();

  const params: Record<string, string | number> = {
    search,
    page,
    perPage,
  };

  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const { data } = await nextServer.get<FetchNoticesResponse>("/notices", {
    params,
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return data;
};


export const fetchServerNoteById = async (noticeId: string): Promise<Notice> => {
  const cookieStore = await cookies();

  const { data } = await nextServer.get<Notice>(`/notices/${noticeId}`, {
    headers: { Cookie: cookieStore.toString() },
  });

  return data;
};


// -- Auth ------------------

export const checkServerSession = async () => {
  
  const cookieStore = await cookies();
  
  const res = await nextServer.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  
  return res;
};

// ------------------ User ------------------

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();

  const { data } = await nextServer.get<User>("/users/me", {
    headers: { Cookie: cookieStore.toString() },
  });

  return data;
};

export const updateServerMe = async (payload: Partial<User>): Promise<User> => {
  const cookieStore = await cookies();

  const { data } = await nextServer.patch<User>("/users/me", payload, {
    headers: { Cookie: cookieStore.toString() },
  });

  return data;
};