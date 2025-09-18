import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const NotFound: React.FC<LayoutProps> = () => {
  return (
    <div>
        <Header />
        <h1>404 - Page Not Found</h1>
        <Footer />
    </div>
  );
};

export default NotFound;