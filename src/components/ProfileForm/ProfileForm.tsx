'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useUserProfile } from '@/hooks/useUserProfile';
import { updateUserProfile } from '../../store/slices/userProfileSlice';

import { IProfile } from '@/types/types';

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
        <form>
          <div>
            <label htmlFor="display_name">Nombre de usuario:</label>
            <input
              type="text"
              id="display_name"
              name="display_name"
              value={defaultValues.display_name}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Correo electr&oacute;nico:</label>
            <input type="email" id="email" name="email" value={defaultValues.email} readOnly />
          </div>
          <div>
            <label htmlFor="phone">Tel&eacute;fono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={defaultValues.phone}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="address">Direcci&oacute;n:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={defaultValues.address}
              onChange={onChangeHandler}
            />
          </div>
          <input
            type="button"
            value="Actualizar"
            disabled={!isEditing}
            onClick={handleUpdateProfile}
          />
        </form>
      ) : (
        <p>No se encontraron datos del perfil.</p>
      )}
    </div>
  );
};

export default ProfileForm;
