'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

import FormInput from '@/components/formInput/formInput';
import MessageBox from '@/components/messageBox/messageBox';
import Button from '@/components/button/button';

import styles from './Recuperacion.module.scss';

const RecuperacionPage = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setErrorMessage('Error: ' + error.message);
    } else {
      setSuccessMessage('Revisa tu correo para continuar con el cambio de contraseña.');
    }
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target as HTMLInputElement;
    setEmail(value.value);
  };

  return (
    <div className={`container ${styles.recuperacion}`}>
      <h1>¿Olvidaste tu contraseña?</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={email}
          label="Email"
          type="email"
          name="email"
          required
          handleFormChange={handleFormChange}
          placeholder="Email"
        />
        <Button type="submit" kind="cta" buttonText="Enviar" />
        {<MessageBox errorMessage={errorMessage} successMessage={successMessage} />}
      </form>
    </div>
  );
};

export default RecuperacionPage;
