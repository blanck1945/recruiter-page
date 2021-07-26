import { useRouter } from 'next/router';
import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppRouter } from 'types/Enums';
import { signOut, useSession } from 'next-auth/client';
import { TwoColumnsDiv } from '@styles/Containers/TwoColumns';
import SideBar from '@components/Dashboard/SideBar';
import CenterScreen from '@components/Dashboard/CenterScreen';

const dash = () => {
  // Next Router
  const router = useRouter();

  // Next-auth session
  const session = useSession();

  return (
    <TwoColumnsDiv>
      {session ? (
        <>
          <SideBar session={session} />
          <CenterScreen />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </TwoColumnsDiv>
  );
};

export default dash;
