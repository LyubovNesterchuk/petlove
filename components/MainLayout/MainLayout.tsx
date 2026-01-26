'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { useLoaderStore } from '@/lib/store/useLoaderStore';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const startLoading = useLoaderStore(state => state.startLoading);
  const setProgress = useLoaderStore(state => state.setProgress);

  useEffect(() => {
    startLoading();
    setProgress(0);

    const timeout = setTimeout(() => {
      setProgress(100);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [pathname, startLoading, setProgress]);

  return (
    <>
      <GlobalLoader />
      {children}
    </>
  );
}