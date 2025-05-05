'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/supabaseClient';

import FormInput from '@/components/formInput/formInput';
import Button from '@/components/button/button';
import MessageBox from '@/components/messageBox/messageBox';

const ResetPasswordPage = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage('Contraseña actualizada con éxito. Redirigiendo...');
      setTimeout(() => router.push('/login'), 3000);
    }
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target as HTMLInputElement;
    setNewPassword(value.value);
  };

  return (
    <div className={`container`}>
      <h1>Restablecer Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="password"
          label="Ingrese su nueva contraseña"
          name="password"
          placeholder="Nueva contraseña"
          value={newPassword}
          handleFormChange={handleFormChange}
          required
        />
        <Button type="submit" kind="cta" buttonText="Reset Password" />
        <MessageBox errorMessage={errorMessage} successMessage={successMessage} />
      </form>
    </div>
  );
};

export default ResetPasswordPage;
