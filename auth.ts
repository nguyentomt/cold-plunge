import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import facebook from "next-auth/providers/facebook"
import FacebookProvider from "next-auth/providers/facebook"

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID!
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET!
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID!
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET!
const AUTH_SECRET = process.env.AUTH_SECRET!

const config = {
    providers: [
        Google({ clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET }),
        FacebookProvider({clientId: FACEBOOK_CLIENT_ID, clientSecret: FACEBOOK_CLIENT_SECRET })
    ],
    secret: AUTH_SECRET,
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl;
            if (pathname === '/middlewareProtected') {
                return !!auth;
            }
            return true;
        }
    }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);



// export const authOptions = {
//     providers: [Google({ clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET })],
//     secret: AUTH_SECRET,
//   }

// const handler = NextAuth(authOptions)
 
// export { handler as GET, handler as POST };