'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

import { generateUniqueId } from '@/utils/IdGenerator';

import styles from './Register.module.scss';

type FormFields = {
  businessName: string;
  email: string;
  password: string;
  confirmPassword: string;
  description: string;
  logo: File | string;
  color_background: string;
  color_primary: string;
  color_secondary: string;
  color_price: string;
  color_button: string;
  color_button_text: string;
};

const defaultFormFields: FormFields = {
  businessName: '',
  email: '',
  password: '',
  confirmPassword: '',
  description: '',
  logo: '',
  color_background: '#FFFFFF',
  color_primary: '#FFFFFF',
  color_secondary: '#FFFFFF',
  color_price: '#FFFFFF',
  color_button: '#FFFFFF',
  color_button_text: '#FFFFFF',
};

const RegisterPage = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const {
    businessName,
    email,
    password,
    confirmPassword,
    description,
    logo,
    color_background,
    color_primary,
    color_secondary,
    color_price,
    color_button,
    color_button_text,
  } = formFields;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [step, setStep] = useState(1);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = event.target as HTMLInputElement;

    if (type === 'file' && files && files.length > 0) {
      setFormFields((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormFields((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadLogo = async (file: File, userId: string) => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error('El usuario no está autenticado: ' + error?.message);
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/${generateUniqueId()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('public-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) {
      throw new Error('Error al subir el archivo: ' + uploadError.message);
    }

    const { data } = supabase.storage.from('public-images').getPublicUrl(fileName);

    if (!data?.publicUrl) {
      throw new Error('No se pudo obtener la URL pública del logo');
    }

    return data.publicUrl;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { business_name: businessName } },
    });

    if (signUpError) {
      setErrorMessage(signUpError.message);
      return;
    }

    const userId = signUpData.user?.id;
    let logoURL = '';
    if (userId && logo && logo instanceof File) {
      try {
        logoURL = await uploadLogo(logo, userId);
      } catch (error) {
        setErrorMessage('Error al subir el logo: ' + (error as Error).message);
        return;
      }
    } else if (!userId) {
      setErrorMessage('Error: Usuario no definido');
      return;
    }

    const { error: insertError } = await supabase.from('restaurants').insert({
      owner_id: userId,
      business_name: businessName,
      description,
      logo: logoURL,
      color_background,
      color_primary,
      color_secondary,
      color_price,
      color_button,
      color_button_text,
      created_at: new Date(),
    });

    if (insertError) {
      setErrorMessage('Error al guardar datos del negocio: ' + insertError.message);
      return;
    }

    setSuccessMessage('Cuenta creada exitosamente');
    setFormFields(defaultFormFields);
  };

  function PrevStep(): void {
    setStep(1);
  }

  function NextStep(): void {
    setStep(2);
  }

  return (
    <div className={styles.registerContainer}>
      <h1>Crear cuenta de Establecimiento</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div
          className={`${styles.registerForm__stage} ${step === 1 ? styles.visible : styles.hidden}`}
        >
          <label>Nombre del establecimiento</label>
          <input
            name="businessName"
            type="text"
            value={businessName}
            onChange={handleFormChange}
            required
            placeholder="Escribe el nombre del establecimiento"
            disabled={step !== 1}
          />

          <label>Correo electrónico</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleFormChange}
            required
            placeholder="Escribe tu correo electrónico"
            disabled={step !== 1}
          />

          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleFormChange}
            required
            placeholder="Escribe tu contraseña"
            disabled={step !== 1}
          />

          <label>Confirmar contraseña</label>
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleFormChange}
            required
            placeholder="Confirma tu contraseña"
            disabled={step !== 1}
          />

          <button onClick={NextStep} disabled={step !== 1}>
            Siguiente
          </button>
        </div>
        <div
          className={`${styles.registerForm__stage} ${step === 2 ? styles.visible : styles.hidden}`}
        >
          <label>Descripción</label>
          <textarea
            name="description"
            rows={2}
            value={description || ''}
            onChange={handleFormChange}
            required
            placeholder="Escribe una breve descripción"
            disabled={step !== 2}
          />
          <label>Logo</label>
          <input
            name="logo"
            type="file"
            accept="image/*"
            onChange={handleFormChange}
            required
            placeholder="Sube un logo"
            disabled={step !== 2}
          />
          <label>Color de fondo</label>
          <input
            name="color_background"
            type="color"
            value={color_background}
            onChange={handleFormChange}
            required
            placeholder="Escribe el color de fondo"
            disabled={step !== 2}
          />
          <label>Color primario</label>
          <input
            name="color_primary"
            type="color"
            value={color_primary}
            onChange={handleFormChange}
            required
            placeholder="Escribe el color primario"
            disabled={step !== 2}
          />
          <label>Color secundario</label>
          <input
            name="color_secondary"
            type="color"
            value={color_secondary}
            onChange={handleFormChange}
            required
            placeholder="Escribe el color secundario"
            disabled={step !== 2}
          />
          <label>Color precio</label>
          <input
            name="color_price"
            type="color"
            value={color_price}
            onChange={handleFormChange}
            required
            placeholder="Escribe el color precio"
            disabled={step !== 2}
          />
          <label>Color botón</label>
          <input
            name="color_button"
            type="color"
            value={color_button}
            onChange={handleFormChange}
            required
            placeholder="Escribe el color del botón"
            disabled={step !== 2}
          />
          <label>Color texto botón</label>
          <input
            name="color_button_text"
            type="color"
            value={color_button_text}
            onChange={handleFormChange}
            required
            placeholder="Escribe el color del texto del botón"
            disabled={step !== 2}
          />
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          <button onClick={PrevStep} disabled={step !== 2}>
            Anterior
          </button>
          <button type="submit" className={styles.submitButton}>
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
