'use strict';

import { useState } from 'react';

import FormInput from '@/components/formInput/formInput';
import MessageBox from '@/components/messageBox/messageBox';

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
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

  const [errorMessage] = useState('');
  const [successMessage] = useState('');

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.loginPage}>
      <h1>Ingresa a tu cuenta</h1>
      <form>
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

        <button type="submit" className={styles.submitButton}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
