import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with Email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "aditya@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = { userId: 1, username: "adi" };
        if (user) return user;
        else return null;
      },
    }),
  ],
  // secret: process.env.NEXTAUTH_URL,
});

export { handler as GET, handler as POST };
