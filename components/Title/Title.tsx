import styles from './Title.module.css';

interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return <h1 className={styles.title}>{text}</h1>;
};