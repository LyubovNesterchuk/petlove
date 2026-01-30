'use client';

import { redirect } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import { RegistrationForm } from '@/components/RegistrationForm/RegistrationForm';



export default function RegisterPage() {
  const isAuth = useAuthStore((s) => s.isAuthenticated);

  if (isAuth) {
    redirect('/profile');
  }

  return (
    <main>
      <RegistrationForm />
    </main>
  );
}