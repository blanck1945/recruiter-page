import { getSession } from 'next-auth/client';

interface indexSessionProps {
  session: any;
}

const index = ({ session }: indexSessionProps) => {
  console.log(session);
  return (
    <div>
      <h2>User Session</h2>
    </div>
  );
};

export default index;

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}
