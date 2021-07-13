import jwt from 'next-auth/jwt';
import jwtToken from 'jsonwebtoken';

const secret: any = process.env.JWT_SECRET;
const jwtAud = process.env.JWT_AUD;

var PUB = `
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+vxkvC9Go6Nf06azqWwcsWqDdivg
GwBNK7OF58iJwqD2Rp0S5RIijn43mEnoZQ4hvAZNlnO7D58dtDu5Ff3Liw==
-----END PUBLIC KEY-----`;

var PRIV = `
-----BEGIN EC PARAMETERS-----
BggqhkjOPQMBBw==
-----END EC PARAMETERS-----
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEII/Iz4QEC5Gebf5feeFC6vVclJizSlPDCjrftUjBeaYroAoGCCqGSM49
AwEHoUQDQgAE+vxkvC9Go6Nf06azqWwcsWqDdivgGwBNK7OF58iJwqD2Rp0S5RIi
jn43mEnoZQ4hvAZNlnO7D58dtDu5Ff3Liw==
-----END EC PRIVATE KEY-----`;

export default async (req: any, res: any) => {
  const token: any = await jwt.getToken({ req, secret });
  console.log(token);
  let jwtNewToken;

  var decoded: any = jwtToken.decode(token.accessToken, { complete: true });
  console.log(decoded);

  const { header, payload } = decoded;

  if (token) {
    jwtNewToken = jwtToken.sign(
      {
        ...payload,
        aud: jwtAud,
      },
      PRIV,
      {
        algorithm: 'RS256',
        keyid: header.kid,
      }
    );
  }

  console.log('JSON Web Token', jwtToken);
  res.send({
    token: jwtNewToken ? jwtNewToken : 'User not Authenticated',
  });
};

/*
  email: token.email,
        name: token.name,
        sub: token.sub,
        iss: secret,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60,
        aud: secret,
        iat: token.iat,
        azp: 'KXNyjlo046tqQcMAJtpnOvTl2cLNYDcc',
        gty: 'client-credentials',
*/
