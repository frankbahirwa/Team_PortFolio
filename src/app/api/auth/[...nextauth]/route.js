import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const { email, password } = credentials ?? {};
        console.log("🛠️ Credentials received:", email, password);

        try {
            const res = await axios.post("http://localhost:3000/api/user/login", {
              email,
              password,
            });
        
            if (res.status !== 200) return null;
        
            const user = res.data.user;
            return {
              id: user._id,
              email: user.email,
              username: user.username || "User",
            };
          } catch (error) {
            console.error("❌ Login failed:", error);
            return null;
          } // If no match, return null to trigger 401 Unauthorized


          
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT session strategy
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
