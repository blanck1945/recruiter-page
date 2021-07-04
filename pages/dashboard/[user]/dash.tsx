import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppRouter } from 'types/Enums';

const dash = () => {
  // Next Router
  const router = useRouter();

  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  });
  return <a href={AppRouter.pathLogout}>{user?.name} Logout</a>;
};

export default dash;
