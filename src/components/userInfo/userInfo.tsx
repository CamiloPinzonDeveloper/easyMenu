'use client';

import Image from 'next/image';

import type { IProfile } from '@/app/perfil/types';

import styles from './UserInfo.module.scss';

const UserInfo = ({ profile }: { profile: IProfile }) => {
  const { full_name, phone, address, avatar_url } = profile;
  const userAvatar = avatar_url ? avatar_url : `/avatar_${Math.random() < 0.5 ? 1 : 2}.webp`;
  return (
    <div className={styles.userInfo}>
      <div className={styles.userData}>
        <div className={styles.avatar}>
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={180}
            height={180}
            loading="eager"
            priority
          />
        </div>
        <h2 className={styles.userName}>{full_name}</h2>
        <p className={styles.userPhone}>{phone}</p>
        <p className={styles.userAddress}>{address}</p>
      </div>
    </div>
  );
};

export default UserInfo;
