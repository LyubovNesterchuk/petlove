export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

export type UserUpdate = {
  name?: string;
  phone?: string;
  avatar?: string;
};

export type UserAuth = {
  email: string;
  password: string;
};