import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongoose";
import User from "@/models/User/UserModel";
import bcrypt from "bcryptjs";
import { configDotenv } from "dotenv";
configDotenv();

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({ email: credentials?.email }) as {
                    _id: { toString: () => string },
                    email: string,
                    password: string,
                    fullName: string
                } | null;
                if(!user) return null;
                const isValid = user?.password && (await bcrypt.compare(credentials!.password, user.password));
                if(!isValid) return null;
                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.fullName
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async signIn({ user, account, profile}) {
            if(account?.provider === "google") {
                await connectDB();
                await User.findOneAndUpdate(
                    { email: user.email },
                    { $setOnInsert: { email: user.email, fullName: user.name } },
                    { upsert: true, new: true, setDefaultsOnInsert: true }
                )
            }
            return true;
        },
        async jwt({ token, user }) {
            if(user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if(session.user) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (session.user as any).id = token.id;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};

// Export NextAuth handler for GET and POST
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };