// pages/_app.js
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import FontAwesome CSS here
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
