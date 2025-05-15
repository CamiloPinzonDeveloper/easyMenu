'use client';

//import { useState, useEffect } from 'react';
//import { useSession } from '@supabase/auth-helpers-react';
//import { useRouter } from 'next/navigation';

//import UserInfo from '@/components/userInfo/userInfo';
//import { supabase } from '@/lib/supabaseClient';
//import type { IProfile } from './types';

import styles from './Perfil.module.scss';

const Perfil = () => {
  //const router = useRouter();
  //const session = useSession();

  //const [profile, setProfile] = useState<IProfile | null>(null);

  /*useEffect(() => {
    if (session) {
      fetchUserData(session.user.id).then((data) => setProfile(data));
    } else {
      setProfile(null);
      //router.push('/login');
      console.log('No session found, redirecting to login...');
    }
  }, [session]);*/

  /*const fetchUserData = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select(
        `
      full_name,
      phone,
      address,
      avatar_url,
      restaurants (
        id,
        name,
        created_at
      )
    `
      )
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error.message);
      return null;
    }

    return data;
  };*/

  return (
    <div className={styles.perfil}>
      <section className={styles.userDatacontainer}></section>
      <section className={styles.actionContainer}>Display action component</section>
    </div>
  );
};

export default Perfil;
