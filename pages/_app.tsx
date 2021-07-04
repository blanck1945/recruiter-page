import '@styles/main.scss';
import 'tailwindcss/tailwind.css';
import '@styles/global.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import FormProvider from 'context/formContext';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

// {
//   "client_id": "KXNyjlo046tqQcMAJtpnOvTl2cLNYDcc",
//   "client_secret": "6JRnBghmRszw51j1A0dOBnFsIj3z_GDuW9PRFVJVCwYZktyGDCT2CvFf0-15ak3D",
//   "audience":"https://api.recruiters-freelance.scala.ly/",
//   "grant_type":"client_credentials"
// }

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </UserProvider>
  );
}
