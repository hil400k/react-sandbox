import { Link, Outlet } from 'react-router-dom';
import React from 'react';

import styles from './Root.module.scss';

const Root = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={`link ${styles['nav-item']}`} to='/'>Home</Link>
        <Link className={`link ${styles['nav-item']}`} to='/blank'>Blank</Link>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
