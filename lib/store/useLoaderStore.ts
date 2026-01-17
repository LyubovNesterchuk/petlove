import { create } from 'zustand';

type LoaderState = {
  isLoading: boolean;
  progress: number;
  startLoading: () => void;
  stopLoading: () => void;
  incrementProgress: () => void;
  setProgress: (value: number) => void;
};

export const useLoaderStore = create<LoaderState>((set, get) => ({
  isLoading: false,
  progress: 0,

  startLoading: () =>
    set({
      isLoading: true,
      progress: 0,
    }),

  stopLoading: () =>
    set({
      isLoading: false,
    }),

  setProgress: value =>
    set({
      progress: value,
    }),

  incrementProgress: () => {
    const current = get().progress;

    if (current >= 90) return;

    set({
      progress:
        current + Math.floor(Math.random() * 10) + 1,
    });
  },
}));