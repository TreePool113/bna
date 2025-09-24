
import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.users.findUnique({
          where: { email: credentials.email },
        })

        if (!user) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        // Explicitly type the returned user object
        return {
          id: String(user.user_id),
          name: user.full_name,
          email: user.email,
        } satisfies User
      },
    }),
  ],
  session: {
    strategy: "jwt", // dùng JWT lưu session
  },
  secret: process.env.NEXTAUTH_SECRET,
} as NextAuthOptions)

export { handler as GET, handler as POST }
