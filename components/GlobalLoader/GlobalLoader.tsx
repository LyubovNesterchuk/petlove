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

  // Розрахунок кругового прогресу для mobile (200px)
  const radiusMobile = 92;
  const circumferenceMobile = 2 * Math.PI * radiusMobile;
  const offsetMobile = circumferenceMobile - (progress / 100) * circumferenceMobile;

  // Розрахунок для tablet/desktop (427px)
  const radiusTablet = 205.5;
  const circumferenceTablet = 2 * Math.PI * radiusTablet;
  const offsetTablet = circumferenceTablet - (progress / 100) * circumferenceTablet;

  return (
    <div className={styles.loader}>
      <div className={styles.content}>
        {progress < 100 ? (
          <div className={styles.circleWrapper}>
            {/* Mobile SVG */}
            <svg className={`${styles.circleSvg} ${styles.circleMobile}`} width="200" height="200" viewBox="0 0 200 200">
              <circle
                className={styles.circleBackground}
                cx="100"
                cy="100"
                r={radiusMobile}
              />
              <circle
                className={styles.circleProgress}
                cx="100"
                cy="100"
                r={radiusMobile}
                strokeDasharray={circumferenceMobile}
                strokeDashoffset={offsetMobile}
              />
            </svg>
            {/* Tablet/Desktop SVG */}
            <svg className={`${styles.circleSvg} ${styles.circleTablet}`} width="427" height="427" viewBox="0 0 427 427">
              <circle
                className={styles.circleBackground}
                cx="213.5"
                cy="213.5"
                r={radiusTablet}
              />
              <circle
                className={styles.circleProgress}
                cx="213.5"
                cy="213.5"
                r={radiusTablet}
                strokeDasharray={circumferenceTablet}
                strokeDashoffset={offsetTablet}
              />
            </svg>
            <span className={styles.percent}>{progress}%</span>
          </div>
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

