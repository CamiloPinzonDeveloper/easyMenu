import { supabase } from '@/lib/supabaseClient';

export const checkSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error('Error verificando sesión:', error.message);
    return null;
  }

  return session;
};
