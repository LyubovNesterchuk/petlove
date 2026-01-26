'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLoaderStore } from '@/lib/store/useLoaderStore';
import styles from '@/components/GlobalLoader/GlobalLoader.module.css';

export default function GlobalLoader() {
  const {
    isLoading,
    progress,
    incrementProgress,
    stopLoading,
  } = useLoaderStore();

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      incrementProgress();
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, incrementProgress]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        stopLoading();
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [progress, stopLoading]);

  if (!isLoading) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.content}>
        {progress < 100 ? (
          <>
            <span className={styles.percent}>{progress}%</span>
            <div className={styles.progressbar}>
              <div 
                className={styles.progress} 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </>
        ) : (
          <Link href="/" className={styles.logo}>
            petl
            <svg className={styles.heart} width="23" height="23">
              <use href="/sprite.svg#icon-heart" />
            </svg>
            ove
          </Link>
        )}
      </div>
    </div>
  );
}