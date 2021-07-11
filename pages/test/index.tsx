import { signIn, signOut, useSession } from 'next-auth/client';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Page() {
  const [session, loading] = useSession();

  console.log(session);
  useEffect(() => {
    console.log(window);
    const nextSession = Cookies.get('next-auth.session-token');
    console.log(nextSession);
  }, []);
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn('auth0')}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <a href="/api/jwt">Log decoded Token</a>
        </>
      )}
    </>
  );
}
