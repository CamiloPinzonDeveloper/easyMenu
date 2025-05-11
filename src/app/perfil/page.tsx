'use client';

import UserInfo from '@/components/userInfo/userInfo';

import styles from './Perfil.module.scss';

const Perfil = () => {
  return (
    <div className={styles.perfil}>
      <section className={styles.userDatacontainer}>
        <UserInfo />
      </section>
      <section className={styles.actionContainer}>Display action component</section>
    </div>
  );
};

export default Perfil;
