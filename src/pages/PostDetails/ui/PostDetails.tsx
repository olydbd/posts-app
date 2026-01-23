import { PostCard, useGetPostByIdQuery } from '@entities/post';
import { useGetUserByIdQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { ArrowLeft, User } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';

import styles from './PostDetails.module.scss';

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isError, isLoading } = useGetPostByIdQuery(id ?? skipToken);
  const { data: user } = useGetUserByIdQuery(post?.userId ?? skipToken);
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Loading post...</p>
      </div>
    );
  if (isError || !post)
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Error</p>
      </div>
    );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div onClick={() => navigate(-1)} className={styles.backLink}>
          <ArrowLeft />
          Back
        </div>

        {user && (
          <Link to={`/users/${user.id}`}>
            <div className={styles.userBlock}>
              <div className={styles.userLeft}>
                <div className={styles.avatar}>
                  <User />
                </div>

                <div className={styles.nameBlock}>
                  <h3 className={styles.name}>{user.name}</h3>
                  <p className={styles.username}>@{user.username}</p>
                </div>
              </div>

              <span className={styles.view}>View Profile</span>
            </div>
          </Link>
        )}

        <PostCard {...post} />
      </div>
    </section>
  );
};
