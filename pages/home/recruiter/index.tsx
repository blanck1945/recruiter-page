import Banner from '@components/Organos/Banner';
import Rocket from '@components/Organos/Rocket';
import Wave from '@components/Organos/Wave';
import { RecruiterPageData } from 'data/pages/home/RecruiterPage';
import Layout from 'layout/Layout';
import React, { useEffect, useState } from 'react';
import { LayoutValueEnum } from 'types/Enums';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const index = ({ session }: any) => {
  // Información estatica de las paginas
  const { buttonContent, para, rocket } = RecruiterPageData;
  const [loading, setLoading] = useState<boolean>(true);

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
          <Banner buttonContent={buttonContent} para={para} image={LayoutValueEnum.recruiter} />
          <Wave wave="cut" />
          <Rocket data={rocket} />
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
