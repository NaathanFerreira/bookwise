import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          // configuration to provide an refresh token
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, profile, session, trigger }) {
      if (account?.access_token && account.refresh_token) {
        token.access_token = account.access_token
        token.refresh_token = account.refresh_token
      }
      return token
    },
    async session({ session, token }) {
      const userId = token.sub
      return {
        ...session,
        userId,
      }
    },
  },
}
export default NextAuth(authOptions)
