import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppRouter } from 'types/Enums';
import { signOut, useSession } from 'next-auth/client';

const dash = () => {
  // Next Router
  const router = useRouter();

  const [session, isLoading] = useSession();

  useEffect(() => {
    if (!session?.user?.name) {
      router.push('/');
    }
  });
  return (
    <a href="#" onClick={() => signOut()}>
      {session?.user?.name} Logout
    </a>
  );
};

export default dash;
