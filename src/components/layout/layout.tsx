import Header from '@components/header/header';
import Footer from '@components/footer/footer';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-gray-100">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
