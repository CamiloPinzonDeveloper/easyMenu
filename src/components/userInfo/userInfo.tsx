'use client';

import Image from 'next/image';

import { IProfile } from '@/types/types';
import Divisor from '../divisor/divisor';

import styles from './UserInfo.module.scss';

const UserInfo = ({ profile }: { profile: IProfile }) => {
  const { display_name, avatar_url, restaurants } = profile;
  const userAvatar = avatar_url ? avatar_url : `/avatar_${Math.random() < 0.5 ? 1 : 2}.webp`;
  return (
    <div className={styles.userInfo}>
      <div className={styles.userData}>
        <div className={styles.avatar}>
          <Image
            src={userAvatar}
            alt={`${display_name} avatar`}
            width={180}
            height={180}
            loading="eager"
            priority
          />
          {!avatar_url && <p>Sube tu avatar</p>}
        </div>
        <h4 className={styles.userName}>{display_name}</h4>
        <Divisor />
        <h3>Comercios</h3>
        {restaurants ? (
          restaurants.map((restaurant) => <p key={restaurant.id}>{restaurant.name}</p>)
        ) : (
          <p>Añade un comercio</p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
