'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
//import { useRouter } from 'next/navigation';

import FormInput from '@/components/formInput/formInput';
import MessageBox from '@/components/messageBox/messageBox';
import Button from '@/components/button/button';

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
  //const router = useRouter();

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { businessName, email, password, confirmPassword } = formFields;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormFields((prev) => ({ ...prev, [name]: value }));
    /*if (type === 'file' && files && files.length > 0) {
      setFormFields((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormFields((prev) => ({ ...prev, [name]: value }));
    }*/
  };

  /*const uploadLogo = async (file: File, userId: string) => {
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
  };*/

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { business_name: businessName } },
    });

    if (signUpError) {
      setErrorMessage(signUpError.message);
      return;
    }
    /*let logoURL = '';
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
    }*/

    setSuccessMessage('Se ha enviado un correo de confirmación a ' + email);
    setFormFields(defaultFormFields);
    setTimeout(() => {
      //router.push('/login');
      console.log('ir a login');
    }, 3000);
  };

  return (
    <div className={`container`}>
      <h1>Crear Tu Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nombre del establecimiento"
          name="businessName"
          type="text"
          value={businessName}
          handleFormChange={handleFormChange}
          required={true}
          placeholder="Escribe el nombre del establecimiento"
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
