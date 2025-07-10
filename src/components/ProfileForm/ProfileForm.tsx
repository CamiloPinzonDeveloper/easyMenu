'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useUserProfile } from '@/hooks/useUserProfile';
import { updateUserProfile } from '../../store/slices/userProfileSlice';
import FormInput from '../formInput/formInput';
import Button from '../button/button';

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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <FormInput
            label="Nombre de usuario:"
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            handleFormChange={onChangeHandler}
            name="display_name"
            value={defaultValues.display_name}
            required
          />
          <FormInput
            label="Correo electrónico:"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            handleFormChange={onChangeHandler}
            name="email"
            value={defaultValues.email}
            required
          />
          <FormInput
            label="Teléfono:"
            type="tel"
            placeholder="Ingresa tu número de teléfono"
            handleFormChange={onChangeHandler}
            name="phone"
            value={defaultValues.phone}
            required
          />
          <FormInput
            label="Dirección:"
            type="text"
            placeholder="Ingresa tu dirección"
            handleFormChange={onChangeHandler}
            name="address"
            value={defaultValues.address}
            required
          />
          <Button
            kind="cta"
            type="submit"
            disabled={!isEditing}
            handleClick={handleUpdateProfile}
            buttonText="Actualizar Perfil"
          />
        </form>
      ) : (
        <p className={styles.noProfile}>No se encontraron datos del perfil.</p>
      )}
    </div>
  );
};

export default ProfileForm;
