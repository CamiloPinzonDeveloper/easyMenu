'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store/';

import Header from '@components/header/header';
import Footer from '@components/footer/footer';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Header />
        <main>{children}</main>
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default Layout;
