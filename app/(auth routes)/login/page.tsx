'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {PetBlock} from  "@/components/PetBlock/PetBlock"
import { login } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import styles from './LoginPage.module.css';

type LoginFormValues = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

export default function LoginPage() {
  const router = useRouter();
  const isAuth = useAuthStore(s => s.isAuthenticated);
  const setUser = useAuthStore(s => s.setUser);

  useEffect(() => {
    if (isAuth) router.replace('/profile');
  }, [isAuth, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await login(data);
      setUser(res);
      router.replace('/profile');
    } catch {
      alert('Invalid email or password');
    }
  };

  return (
    <main className={styles.page}>
      <PetBlock />
      <div className={styles.card}>
        <h1 className={styles.title}>Log in</h1>
        <p className={styles.subtitle}>
          Welcome! Please enter your credentials
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            {...register('email')}
            placeholder="Email"
            className={styles.input}
          />
          <p className={styles.error}>{errors.email?.message}</p>

          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className={styles.input}
          />
          <p className={styles.error}>{errors.password?.message}</p>

          <button type="submit" className={styles.button}>
            LOG IN
          </button>
        </form>

        <p className={styles.footer}>
          Don’t have an account?{' '}
          <span onClick={() => router.push('/register')}>
            Register
          </span>
        </p>
      </div>
    </main>
  );
}