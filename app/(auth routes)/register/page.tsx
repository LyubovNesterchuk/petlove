'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { register as registerUser } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import styles from './RegistrationPage.module.css';

type RegistrationFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export default function RegistrationPage() {
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
  } = useForm<RegistrationFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    try {
      const res = await registerUser(data);
      setUser(res);
      router.replace('/profile');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Registration</h1>
        <p className={styles.subtitle}>
          Thank you for your interest in our platform.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            {...register('name')}
            placeholder="Name"
            className={styles.input}
          />
          <p className={styles.error}>{errors.name?.message}</p>

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

          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm password"
            className={styles.input}
          />
          <p className={styles.error}>{errors.confirmPassword?.message}</p>

          <button type="submit" className={styles.button}>
            REGISTRATION
          </button>
        </form>

        <p className={styles.footer}>
          Already have an account?{' '}
          <span onClick={() => router.push('/login')}>Log in</span>
        </p>
      </div>
    </main>
  );
}