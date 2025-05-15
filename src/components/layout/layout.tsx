'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/';

import Header from '@components/header/header';
import Footer from '@components/footer/footer';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
