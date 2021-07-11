// utils/auth0.js
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  secret: process.env.AUTH0_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
});

/*AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://recruiters-free.us.auth0.com'
# Your Auth0 application's Client ID
AUTH0_CLIENT_ID_REVERSE='le1G4BiKN7QtznNv9nNWLC6mLrzsNAK9---'
# Your Auth0 application's Client Secret
AUTH0_CLIENT_SECRET=lt12F3hwMcaBKOUSjRSxJ7dejf4Pox0-rPH7T7JV6vS4LSt_KvKsYzQnPmt1amVr
#
AUTH_DOMAIN=recruiters-free.us.auth0.com
# Your Auth0 application's Client ID
AUTH0_CLIENT_ID=1G4BiKN7QtznNv9nNWLC6mLrzsNAK9
#
NEXTAUTH_URL=http://localhost:3000*/
