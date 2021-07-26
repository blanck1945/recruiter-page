import Banner from '@components/Organos/Banner';
import Rocket from '@components/Organos/Rocket';
import Wave from '@components/Organos/Wave';
import { RecruiterPageData } from 'data/pages/home/RecruiterPage';
import Layout from 'layout/Layout';
import React, { useEffect, useState } from 'react';
import { LayoutValueEnum } from 'types/Enums';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import RecruiterWave from '@components/home/RecruiterWave';
import RecruiterBanner from '@components/home/RecruiterBanner';
import RecruiterInfo from '@components/home/RecruiterInfo';
import RecruiterInfoDos from '@components/home/RecruiterInfoDos';

const index = ({ session }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  console.warn(session);
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      const username = session?.user.name;
      router.push(`/dashboard/${username}/dash`);
    } else {
      setLoading(false);
    }
  });

  return (
    <>
      {loading ? (
        <p>Reedirigiendo usuario</p>
      ) : (
        <Layout value={LayoutValueEnum.recruiter}>
          <RecruiterBanner />
          <RecruiterWave />
          <RecruiterInfo />
          <RecruiterInfoDos />
        </Layout>
      )}
    </>
  );
};

export default index;

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

//<Rocket data={rocket} />
