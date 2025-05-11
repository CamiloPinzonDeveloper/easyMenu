'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Session } from '@supabase/supabase-js';

import { supabase } from '@/lib/supabaseClient';

import styles from './Header.module.scss';
const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container}`}>
        <Link href="/">
          <div className={`${styles.logo}`}>
            <Image
              src="/EasyMenu.svg"
              alt="Easy Menu"
              width={100}
              height={100}
              className={styles.logoImage}
              loading="eager"
              quality={100}
            />
            <p className={styles.logoText}>
              <span className={styles.logoText1}>Easy</span>
              <span className={styles.logoText2}>Menu</span>
            </p>
          </div>
        </Link>

        <button className={styles.toggle} onClick={handleMenuToggle}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/caracteristicas">Características</Link>
            </li>
            {session ? (
              <>
                <li>
                  <Link href="/perfil">Perfil</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className={styles.logoutButton}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">Iniciar sesión</Link>
                </li>
                <li>
                  <Link href="/registro">Registrarse</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
