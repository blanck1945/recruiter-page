import jwt from 'next-auth/jwt';
import jwtToken from 'jsonwebtoken';

const secret: any = process.env.JWT_SECRET;
const jwtAud = process.env.JWT_AUD;

export default async (req: any, res: any) => {
  const token: any = await jwt.getToken({ req, secret });
  let jwtNewToken;

  var decoded: any = jwtToken.decode(token.accessToken, { complete: true });
  const { header, payload } = decoded;

  if (token) {
    jwtNewToken = jwtToken.sign(
      {
        ...payload,
        aud: jwtAud,
      },
      'ROUTE',
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
