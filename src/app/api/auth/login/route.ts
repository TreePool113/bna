import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    // Tìm user theo email
    const user = await prisma.users.findUnique({ where: { email } })
    if (!user) {
      return Response.json({ error: 'Sai email hoặc mật khẩu' }, { status: 400 })
    }

    // So sánh mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return Response.json({ error: 'Sai email hoặc mật khẩu' }, { status: 400 })
    }

    return Response.json({ message: 'Đăng nhập thành công', user })
  } catch (error) {
    return Response.json({ error: 'Lỗi đăng nhập' }, { status: 500 })
  }
}
