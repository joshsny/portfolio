import NextAuth, { Account, Profile, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,user-read-playback-position,user-top-read,user-read-recently-played'
    })
  ],
  callbacks: {
    jwt: async (params: {
      token: JWT;
      user?: User;
      account?: Account;
      profile?: Profile;
      isNewUser?: boolean;
    }) => {
      console.log(params.user, params.account);
      return params.token;
    }
  }
});
