'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { useUserProfile } from '@/hooks/useUserProfile';

import styles from './Perfil.module.scss';

const Perfil = () => {
  const session = useSelector((state: RootState) => state.session);
  const { profile, loading, error } = useUserProfile(session.user?.id || null);

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.perfil}>
      <div>
        <h1>Perfil</h1>
        <p>Nombre: {profile?.display_name || '-'}</p>
        <p>Email: {profile?.email || '-'}</p>
        {/* etc. */}
      </div>
    </div>
  );
};

export default Perfil;
