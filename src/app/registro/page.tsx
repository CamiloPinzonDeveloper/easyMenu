'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

import FormInput from '@/components/formInput/formInput';
import MessageBox from '@/components/messageBox/messageBox';
import Button from '@/components/button/button';

type FormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: FormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterPage = () => {
  const router = useRouter();

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
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

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { displayName },
        },
      });

      if (signUpError) {
        setErrorMessage(signUpError.message);
        return;
      }

      setSuccessMessage(`Se ha enviado un correo de confirmación a ${email}`);
      setFormFields(defaultFormFields);
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocurrió un error inesperado. Intenta de nuevo.');
    }
  };

  return (
    <div className={`container`}>
      <h1>Crear Tu Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nombre Completo"
          name="displayName"
          type="text"
          value={displayName}
          handleFormChange={handleFormChange}
          required={true}
          placeholder="Escribe tu nombre completo"
        />

        <FormInput
          label="Correo electrónico"
          name="email"
          type="email"
          value={email}
          handleFormChange={handleFormChange}
          required
          placeholder="Escribe tu correo electrónico"
        />

        <FormInput
          label="Contraseña"
          name="password"
          type="password"
          value={password}
          handleFormChange={handleFormChange}
          required
          placeholder="Escribe tu contraseña"
        />

        <FormInput
          label="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleFormChange={handleFormChange}
          required
          placeholder="Confirma tu contraseña"
        />
        {<MessageBox errorMessage={errorMessage} successMessage={successMessage} />}

        <Button type="submit" kind="cta" buttonText="Crear Cuenta" />
      </form>
    </div>
  );
};

export default RegisterPage;
