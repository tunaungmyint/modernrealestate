import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>အိမ်ခြံမြေဝတ်ဘ်ဆိုဒ်</title>
      </Head>
      <Box maxW={1280} m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
