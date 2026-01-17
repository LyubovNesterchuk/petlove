import { Notice } from "@/types/notice";
import { nextServer } from "./api";
import { User } from "@/types/user";


export interface FetchNoticesResponse {
  notices: Notice[];
  totalPages: number;
};

export const fetchNotes = async (
  search: string,
  page = 1,
  perPage = 12,
  tag?: string
): Promise<FetchNoticesResponse> => {
  const params: Record<string, string | number> = {
    search,
    page,
    perPage,
  };

  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const { data } = await nextServer.get<FetchNoticesResponse>("/notices", { params });
  return data;
};

export const fetchNoteById = async (noticeId: string): Promise<Notice> => {
  const { data } = await nextServer.get<Notice>(`/notices/${noticeId}`);
  return data;
};

// export const createNotice = async (newNotice: NewNotice): Promise<Notice> => {
//   const { data } = await nextServer.post<Notice>("/notices", newNotice);
//   return data;
// };

// export const updateNotice = async (
//   noticeId: string,
//   updatedNotice: Partial<NewNotice>
// ): Promise<Notice> => {
//   const { data } = await nextServer.patch<Notice>(`/notices/${noticeId}`, updatedNotice);
//   return data;
// };

export const deleteNotice = async (noticeId: string): Promise<Notice> => {
  const { data } = await nextServer.delete<Notice>(`/notices/${noticeId}`);
  return data;
};


// ----------------------------------------------------------------------------

export type RegisterRequest = { 
  email: string;
  password: string;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>('/auth/register', data);
  return res.data;
};



export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>('/auth/login', data);
  return res.data;
};



type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};



export const getMe = async () => {
  const { data } = await nextServer.get<User>('/users/me');
  return data;
};



export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};



export type UpdateUserRequest = {
  username?: string;
  email?: string;
  avatar?: string;
};

export const updateMe = async (payload: UpdateUserRequest): Promise<User> => {
  const { data } = await nextServer.patch<User>("/users/me", payload);
  return data;
};