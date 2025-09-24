import mysql from "mysql2/promise";

export async function connectDb() {
  const connection = await mysql.createConnection({
    host: "localhost",   // mặc định của XAMPP
    user: "root",        // user mặc định XAMPP
    password: "",        // mật khẩu mặc định rỗng
    database: "basketball_training", // tên DB bạn tạo trong phpMyAdmin
  });
  return connection;
}
