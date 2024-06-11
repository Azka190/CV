// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';  // Adjust the import path if your styles are in a different location

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
