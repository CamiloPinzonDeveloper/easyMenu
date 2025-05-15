'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { supabase } from '@/lib/supabaseClient';
import { RootState } from '@/store';
import { setSession } from '@/store/slices/sessionSlice';

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
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.session.isAuthenticated);

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) router.push('/perfil');
  }, [isAuthenticated, router]);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const {
      data: { user },
      error: signInError,
    } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setErrorMessage(signInError.message);
      return;
    }

    if (user) {
      const { data: existingProfile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (!existingProfile && !profileError) {
        const { error: insertError } = await supabase.from('profiles').insert([
          {
            id: user.id,
            display_name: user.user_metadata?.displayName || '',
            email: user.email,
            created_at: new Date(),
          },
        ]);

        if (insertError) {
          setErrorMessage('Error al crear el perfil: ' + insertError.message);
          return;
        }
      }

      // ✅ Guardar datos en Redux
      dispatch(
        setSession({
          isAuthenticated: true,
          user: {
            id: user.id,
            email: user.email,
            displayName: user.user_metadata?.displayName || '',
            avatarUrl: user.user_metadata?.avatar_url || '',
          },
        })
      );

      setSuccessMessage('Iniciaste sesión correctamente');
      setFormFields(defaultFormFields);
      router.push('/perfil');
    }
  };

  return (
    <div className={`container`}>
      <h1>Ingresa a tu cuenta</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Correo electrónico"
          name="email"
          type="email"
          required
          placeholder="Escribe tu correo electrónico"
          value={email}
          handleFormChange={handleFormChange}
        />

        <FormInput
          label="Contraseña"
          name="password"
          type="password"
          required
          placeholder="Escribe tu contraseña"
          value={password}
          handleFormChange={handleFormChange}
        />

        <MessageBox errorMessage={errorMessage} successMessage={successMessage} />

        <Button type="submit" kind="cta" buttonText="Iniciar sesión" />
      </form>

      <div className={styles.registerContainer}>
        <p>
          No tienes una cuenta? <a href="/register">Regístrate</a>
        </p>
        <p>
          Olvidaste tu contraseña? <a href="/recuperacion">Recuperar contraseña</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
