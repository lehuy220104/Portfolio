import React from 'react';
import Header from './Header';
import Snow from "./Snow";
import SnowImg1 from '../assets/snow1.png';
import SnowImg2 from '../assets/snow2.png';
import SnowImg3 from '../assets/snow3.png';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Snow imageSrcs={[SnowImg1, SnowImg2, SnowImg3]} density={0.00006} maxFlakes={50} />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;