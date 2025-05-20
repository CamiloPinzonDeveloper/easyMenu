'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store'; // Adjust the path if your store file is elsewhere

import { supabase } from '@/lib/supabaseClient';
import { updateAvatar } from '@/store/slices/userProfileSlice';

import styles from './AvatarUploader.module.scss';

const AvatarUploader = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { profile } = useSelector((state: RootState) => state.userProfile);

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ResizeAndConvertToWebp = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        if (!e.target?.result) return reject('Error al leer la imagen');

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const size = 200;
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');
          if (!ctx) return reject('No se pudo crear el contexto del canvas');

          ctx.drawImage(img, 0, 0, size, size);
          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
              else reject('No se pudo convertir la imagen');
            },
            'image/webp',
            0.9
          );
        };

        img.src = e.target.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !profile) return;

    try {
      setLoading(true);
      setError('');
      setPreviewImage(URL.createObjectURL(file));

      const webpBlob = await ResizeAndConvertToWebp(file);
      const fileName = `${profile.id}-avatar.webp`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, webpBlob, {
          upsert: true,
          cacheControl: '3600',
          contentType: 'image/webp',
        });

      if (uploadError) throw new Error(uploadError.message);

      const {
        data: { publicUrl },
      } = supabase.storage.from('avatars').getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', profile.id);

      if (dbError) throw new Error(dbError.message);

      dispatch(updateAvatar(publicUrl));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.avatarUploader}>
      <div>
        {previewImage || profile?.avatar_url ? (
          <Image
            src={previewImage || profile?.avatar_url || ''}
            alt="Avatar"
            width={200}
            height={200}
            className="rounded-full"
          />
        ) : (
          <div style={{ width: 200, height: 200, background: '#ccc' }} />
        )}
      </div>

      <button onClick={() => fileInputRef.current?.click()} disabled={loading}>
        {loading ? 'Subiendo...' : 'Subir avatar'}
      </button>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AvatarUploader;
