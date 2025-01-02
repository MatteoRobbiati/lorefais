// pages/_app.js
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import FontAwesome CSS here
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
