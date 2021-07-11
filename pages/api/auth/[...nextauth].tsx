import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  session: {
    jwt: true,
  },
  callbacks: {
    /**
     * @param  {object}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @param  {object}  account   Provider account (only available on sign in)
     * @param  {object}  profile   Provider profile (only available on sign in)
     * @param  {boolean} isNewUser True if new user (only available on sign in)
     * @return {object}            JSON Web Token that will be saved
     */
    async jwt(token: any, user: any, account: any, profile: any, isNewUser: any) {
      // Add access_token to the token right after signin
      if (account?.accessToken) {
        token.accessToken = account.token_type + ' ' + account.id_token;
      }
      console.log(token);
      return token;
    },
    /**
     * @param  {object} session      Session object
     * @param  {object} token        User object    (if using database sessions)
     *                               JSON Web Token (if not using database sessions)
     * @return {object}              Session that will be returned to the client
     */
    async session(session: any, token: any) {
      // Add property to session, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse): void | Promise<void> =>
  NextAuth(req, res, options);
