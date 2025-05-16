import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchUserProfile } from '@/store/slices/userProfileSlice';

export const useUserProfile = (userId: string | null) => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile, loading, error } = useSelector((state: RootState) => state.userProfile);

  useEffect(() => {
    if (userId && !profile) {
      dispatch(fetchUserProfile(userId));
    }
  }, [userId, dispatch, profile]);

  return { profile, loading, error };
};
