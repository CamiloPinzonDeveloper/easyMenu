'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './Register.module.scss';

type FormFields = {
  businessName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: FormFields = {
  businessName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterPage = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { businessName, email, password, confirmPassword } = formFields;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { business_name: businessName },
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage('Cuenta creada exitosamente');
      setFormFields(defaultFormFields);
    }
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={styles.registerContainer}>
      <h1>Crear cuenta de extablecimiento</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <label>Nombre del establecimiento</label>
        <input
          name="businessName"
          type="text"
          value={businessName}
          onChange={handleFormChange}
          required
          placeholder="Escribe el nombre del establecimiento"
        />

        <label>Correo electrónico</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleFormChange}
          required
          placeholder="Escribe tu correo electrónico"
        />

        <label>Contraseña</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleFormChange}
          required
          placeholder="Escribe tu contraseña"
        />

        <label>Confirmar contraseña</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleFormChange}
          required
          placeholder="Confirma tu contraseña"
        />

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}

        <button type="submit" className={styles.submitButton}>
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
