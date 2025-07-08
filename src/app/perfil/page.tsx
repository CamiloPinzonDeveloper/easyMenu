'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';

import { useUserProfile } from '@/hooks/useUserProfile';
import UserInfo from '@/components/userInfo/userInfo';
import TabLayOut from '@/components/TabLayOut/TabLayOut';

import styles from './Perfil.module.scss';

const Perfil = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const session = useSelector((state: RootState) => state.session);

  useEffect(() => {
    if (session.isAuthenticated === false) {
      router.push('/login');
    }
  }, [session, router]);

  const { profile, loading, error } = useUserProfile(session?.user?.id || null);

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.perfil}>
      <div className={styles.userInfoContainer}>
        {profile && <UserInfo profile={profile} goToTab={setActiveTab} />}
      </div>
      <div className={styles.actionContainer}>
        <TabLayOut customActiveTab={activeTab} setCustomActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Perfil;
