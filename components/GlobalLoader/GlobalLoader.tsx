'use client';

import { useEffect } from 'react';
import { useLoaderStore } from '../../lib/store/useLoaderStore';

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
    }, 300);

    return () => clearInterval(interval);
  }, [isLoading, incrementProgress]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        stopLoading();
      }, 300);
    }
  }, [progress, stopLoading]);

  if (!isLoading) return null;

  return (
    <div className="global-loader">
      <div className="content">
        <span className="percent">{progress}%</span>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}