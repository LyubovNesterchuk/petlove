'use client';

import { useEffect } from 'react';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { useLoaderStore } from '@/lib/store/useLoaderStore';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const startLoading = useLoaderStore(state => state.startLoading);
  const setProgress = useLoaderStore(state => state.setProgress);

  useEffect(() => {
    startLoading();



    const timeout = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [startLoading, setProgress]);

  return (
    <>
      <GlobalLoader />
      <main>{children}</main>
    </>
  );
}