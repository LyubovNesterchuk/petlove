'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';

import { registrationSchema } from '@/utils/validation';
import { register as registerUser } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { showError } from '@/utils/notifications';

type RegisterFormValues = InferType<typeof registrationSchema>;

export const RegistrationForm = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const res = await registerUser(data);
      setUser(res);
      router.push('/profile');
    } catch (error: unknown) {
      if (error instanceof Error) {
        showError(error.message);
      } else {
        showError('Registration failed');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <p>{errors.name?.message}</p>

      <input {...register('email')} />
      <p>{errors.email?.message}</p>

      <input type="password" {...register('password')} />
      <p>{errors.password?.message}</p>

      <input type="password" {...register('confirmPassword')} />
      <p>{errors.confirmPassword?.message}</p>

      <button type="submit">Registration</button>
    </form>
  );
};