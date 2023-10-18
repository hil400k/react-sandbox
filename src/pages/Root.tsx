import { Link, NavLink, Outlet } from 'react-router-dom';
import React from 'react';

import styles from './Root.module.scss';

const Root = () => {
  const isActiveClassName = ({ isActive }: { isActive : boolean }) => isActive ? styles.active : undefined;

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink className={isActiveClassName} to='/'>CV</NavLink>
        <NavLink className={isActiveClassName} to='/blank'>Blog</NavLink>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
