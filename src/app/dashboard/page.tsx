'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { checkSession } from '@/utils/checkSession';

const Dasboard = () => {
  const router = useRouter();

  useEffect(() => {
    checkSession().then((session) => {
      if (!session) {
        router.push('/login');
      }
    });
  }, [router]);

  return <h1>Dashboard</h1>;
};

export default Dasboard;
