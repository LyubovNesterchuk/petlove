'use client';

import styles from './SearchField.module.css';
import { FormEvent } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

export const SearchField = ({
  value,
  onChange,
  onSubmit,
  onClear,
}: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
      />

      <button type="submit" className={styles.searchBtn}>
        🔍
      </button>

      {value && (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={onClear}
        >
          ✕
        </button>
      )}
    </form>
  );
};