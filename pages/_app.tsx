import '@styles/main.scss';
import 'tailwindcss/tailwind.css';
import '@styles/global.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import FormProvider from 'context/formContext';
import Meta from '@components/utils/Meta';
import { Provider as NextAuthProvider } from 'next-auth/client';
import JobsProvider from 'context/jobContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/base/theme';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <JobsProvider>
          <FormProvider>
            <Meta />
            <Component {...pageProps} />
          </FormProvider>
        </JobsProvider>
      </ThemeProvider>
    </NextAuthProvider>
  );
}
