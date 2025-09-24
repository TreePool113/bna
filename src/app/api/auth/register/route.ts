import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, phone, password } = await req.json()

    // Kiểm tra email đã tồn tại chưa
    const existingUser = await prisma.users.findUnique({ where: { email } })
    if (existingUser) {
      return Response.json({ error: 'Email đã tồn tại' }, { status: 400 })
    }

    // Mã hóa password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Tạo user mới
    const user = await prisma.users.create({
      data: {
        full_name: name,          // map "name" từ frontend vào "full_name" trong DB
        email,
        phone,
        password: hashedPassword,
        role: 'student',             // mặc định role = "student"
        created_at: new Date()    // tự động set thời gian hiện tại
      }
    })

    return Response.json({ message: 'Đăng ký thành công', user })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Lỗi đăng ký' }, { status: 500 })
  }
}
