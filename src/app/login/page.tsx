'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

import FormInput from '@/components/formInput/formInput';
import MessageBox from '@/components/messageBox/messageBox';
import Button from '@/components/button/button';

import styles from './Login.module.scss';

type FormFields = {
  email: string;
  password: string;
};

const defaultFormFields: FormFields = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        console.log('Sesión activa:', session);
        // Redirigir a la página de dashboard o donde desees
        //router.push('/dashboard');
      } else {
        console.warn('No hay sesión activa');
      }
    });
  }, []);

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setErrorMessage(signInError.message);
      return;
    }

    setSuccessMessage('Iniciaste sesión correctamente');
    router.push('/dashboard');
  };

  return (
    <div className={`container`}>
      <h1>Ingresa a tu cuenta</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Correo electrónico"
          name="email"
          type="email"
          required={true}
          placeholder="Escribe tu correo electrónico"
          value={email}
          handleFormChange={handleFormChange}
        />

        <FormInput
          label="Contraseña"
          name="password"
          type="password"
          required={true}
          placeholder="Escribe tu contraseña"
          value={password}
          handleFormChange={handleFormChange}
        />

        {<MessageBox errorMessage={errorMessage} successMessage={successMessage} />}

        <Button type="submit" kind="cta" buttonText="Iniciar sesión" />
      </form>
      <div className={`${styles.registerContainer}`}>
        <p>
          No tienes una cuenta? <a href="/register">Registrate</a>
        </p>
        <p>
          Olvidaste tu contraseña? <a href="/recuperacion">Recuperar contraseña</a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
