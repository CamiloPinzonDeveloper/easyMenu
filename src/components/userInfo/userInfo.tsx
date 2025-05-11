'use client';

import Image from 'next/image';

import styles from './UserInfo.module.scss';

const UserInfo = () => {
  const userAvatar = `/avatar_${Math.random() < 0.5 ? 1 : 2}.webp`;
  return (
    <div className={styles.userInfo}>
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
    </div>
  );
};

export default UserInfo;
