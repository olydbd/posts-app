import styles from './AboutProject.module.scss';

export const AboutProject = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About project</h2>
      <p className={styles.description}>
        This is a React + TypeScript + Vite application for viewing posts and comments.
      </p>
    </div>
  );
};
