import { signOut } from 'next-auth/client';

export const logOut = (router: any) => {
  signOut();
  console.log(router);
  router.push('/home/recruiter');
};
