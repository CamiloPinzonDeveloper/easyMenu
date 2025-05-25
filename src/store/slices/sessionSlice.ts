import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
  id: string;
  displayName: string;
  avatarUrl?: string | undefined;
  phone?: string | undefined;
  email: string | undefined;
}

interface SessionState {
  isAuthenticated: boolean;
  user: UserProfile | null;
}

const initialState: SessionState = {
  isAuthenticated: false,
  user: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
    clearSession: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    initializeSession: (state, action: PayloadAction<SessionState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { setSession, clearSession, initializeSession } = sessionSlice.actions;
export default sessionSlice.reducer;
