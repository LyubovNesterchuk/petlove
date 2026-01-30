import { redirect } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import { LoginForm } from '@/components/LoginForm/LoginForm';


export default function LoginPage() {
      const isAuth = useAuthStore((s) => s.isAuthenticated);

  if (isAuth) {
    redirect('/profile');
  }
  return (
    <main>
      <LoginForm />
    </main>
  );
}