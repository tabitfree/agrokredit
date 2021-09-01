import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
