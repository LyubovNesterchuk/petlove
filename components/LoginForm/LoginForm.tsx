'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/utils/validation';
import { login } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { showError } from '@/utils/notifications';

type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await login(data);
      setUser(res);
      router.push('/profile');
    } catch (error: unknown) {
        if (error instanceof Error) {
            showError(error.message);
        } else {
            showError('Login failed');
        }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input
        type="password"
        {...register('password')}
        placeholder="Password"
      />
      <p>{errors.password?.message}</p>

      <button type="submit">Log in</button>
    </form>
  );
};