'use client';

import styles from './Perfil.module.scss';

const Perfil = () => {
  return (
    <div className={styles.perfil}>
      <section className={styles.userDatacontainer}>Información de usuario</section>
      <section className={styles.actionContainer}>Display action component</section>
    </div>
  );
};

export default Perfil;
