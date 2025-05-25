import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionReducer from './slices/sessionSlice';
import userProfileReducer from './slices/userProfileSlice';

const persistConfig = {
  key: 'session',
  storage,
  whitelist: ['isAuthenticated', 'user'],
};

const persistedSessionReducer = persistReducer(persistConfig, sessionReducer);

export const store = configureStore({
  reducer: {
    session: persistedSessionReducer,
    userProfile: userProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
