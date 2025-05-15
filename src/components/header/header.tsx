'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { clearSession } from '@/store/slices/sessionSlice';

import { supabase } from '@/lib/supabaseClient';

import styles from './Header.module.scss';
const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state: RootState) => state.session.isAuthenticated);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        console.log('Session:', session);
      }
    };
    if (isAuthenticated) {
      checkSession();
    }
  }, [isAuthenticated, router]);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    dispatch(clearSession());
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
            {isAuthenticated ? (
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
