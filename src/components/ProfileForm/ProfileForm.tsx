'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useUserProfile } from '@/hooks/useUserProfile';
import { updateUserProfile } from '../../store/slices/userProfileSlice';

import { IProfile } from '@/types/types';

import styles from './ProfileForm.module.scss';

const initialValues: IProfile = {
  id: '',
  created_at: '',
  display_name: '',
  email: '',
  phone: '',
  address: '',
};

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [defaultValues, setDefaultValues] = useState(initialValues);
  const router = useRouter();
  const session = useAppSelector((state: RootState) => state.session);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session.isAuthenticated === false) {
      router.push('/login');
    }
  }, [session, router]);

  const { profile, loading, error } = useUserProfile(session?.user?.id || null);

  useEffect(() => {
    setDefaultValues({
      id: profile?.id || '',
      created_at: profile?.created_at || '',
      display_name: profile?.display_name || '',
      email: profile?.email || 'No especificado',
      phone: profile?.phone || 'No especificado',
      address: profile?.address || 'No especificado',
    });
  }, [profile]);

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDefaultValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setIsEditing(true);
  };

  const handleUpdateProfile = () => {
    if (!profile) return;
    dispatch(
      updateUserProfile({
        userId: profile.id,
        updatedData: {
          display_name: defaultValues.display_name,
          phone: defaultValues.phone,
          address: defaultValues.address,
        },
      })
    );
  };

  return (
    <div>
      {profile ? (
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="display_name" className={styles.label}>
              Nombre de usuario:
            </label>
            <input
              type="text"
              id="display_name"
              name="display_name"
              className={styles.input}
              value={defaultValues.display_name}
              onChange={onChangeHandler}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={defaultValues.email}
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              value={defaultValues.phone}
              onChange={onChangeHandler}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Dirección:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={styles.input}
              value={defaultValues.address}
              onChange={onChangeHandler}
            />
          </div>
          <input
            type="button"
            value="Actualizar"
            className={styles.button}
            disabled={!isEditing}
            onClick={handleUpdateProfile}
          />
        </form>
      ) : (
        <p className={styles.noProfile}>No se encontraron datos del perfil.</p>
      )}
    </div>
  );
};

export default ProfileForm;
