import { useGetUserByIdQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query/react';
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CheckSquare,
  FileText,
  Globe,
  ImageIcon,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react';
import { Link, NavLink, Outlet, useParams } from 'react-router';

import styles from './UserDetails.module.scss';

export const UserDetails = () => {
  const { id } = useParams();
  const { data: user, isError, isLoading } = useGetUserByIdQuery(id ?? skipToken);

  if (isLoading) {
    return <p className={styles.state}>Loading...</p>;
  }

  if (isError || !user) {
    return <p className={styles.state}>Error</p>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link to="/users" className={styles.backLink}>
          <ArrowLeft />
          Back to Users
        </Link>

        <article className={styles.card}>
          <div className={styles.cover} />

          <div className={styles.content}>
            <header className={styles.header}>
              <div className={styles.avatar}>
                <User />
              </div>

              <div className={styles.nameBlock}>
                <h3 className={styles.name}>{user.name}</h3>
                <p className={styles.username}>@{user.username}</p>
              </div>

              <button type="button" className={styles.follow}>
                Follow
              </button>
            </header>

            <section className={styles.contacts}>
              <div className={styles.contact}>
                <div className={styles.icon}>
                  <Mail />
                </div>
                <div>
                  <p className={styles.label}>Email</p>
                  <p className={styles.value}>{user.email}</p>
                </div>
              </div>

              <div className={styles.contact}>
                <div className={styles.icon}>
                  <Phone />
                </div>
                <div>
                  <p className={styles.label}>Phone</p>
                  <p className={styles.value}>{user.phone}</p>
                </div>
              </div>

              <div className={styles.contact}>
                <div className={styles.icon}>
                  <Globe />
                </div>
                <div>
                  <p className={styles.label}>Website</p>
                  <a href="#" className={styles.link}>
                    {user.website}
                  </a>
                </div>
              </div>

              <div className={styles.contact}>
                <div className={styles.icon}>
                  <MapPin />
                </div>
                <div>
                  <p className={styles.label}>Address</p>
                  <p className={styles.value}>
                    {user.address.street}, {user.address.city}
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.company}>
              <h4 className={styles.companyTitle}>
                <Building2 />
                Company
              </h4>

              <div className={styles.companyItem}>
                <Briefcase />
                <p>{user.company.name}</p>
              </div>

              <p className={styles.companyQuote}>“{user.company.catchPhrase}”</p>

              <p className={styles.companyBs}>
                <span>Specializing in:</span> {user.company.bs}
              </p>
            </section>
          </div>
        </article>

        <nav className={styles.tabs}>
          <NavLink
            to={`/users/${user.id}/posts`}
            className={({ isActive }) => (isActive ? styles.tabActive : styles.tab)}
          >
            <FileText className={styles.tabIcon} />
            Posts
          </NavLink>

          <NavLink
            to={`/users/${user.id}/albums`}
            className={({ isActive }) => (isActive ? styles.tabActive : styles.tab)}
          >
            <ImageIcon className={styles.tabIcon} />
            Albums
          </NavLink>

          <NavLink
            to={`/users/${user.id}/todos`}
            className={({ isActive }) => (isActive ? styles.tabActive : styles.tab)}
          >
            <CheckSquare className={styles.tabIcon} />
            Todos
          </NavLink>
        </nav>

        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
