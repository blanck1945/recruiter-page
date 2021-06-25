import '@styles/main.scss';
import 'tailwindcss/tailwind.css';
import '@styles/global.css';
import { AppProps } from 'next/app';
import Layout from 'layout/Layout';
import { useRouter } from 'next/router';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
