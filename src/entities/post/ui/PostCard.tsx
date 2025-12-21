import styles from './PostCard.module.scss';

interface PostCardProps {
  title: string;
  description: string;
}

export const PostCard = ({ title, description }: PostCardProps) => {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
