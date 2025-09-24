"use client";
import SigninForm from "@/components/signin-form";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handlelogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await signIn("credentials", {
            redirect: false,   // ⚠️ tránh redirect mặc định sang /api/auth/signin
            email,
            password,
            });
        if (res?.error) {
      console.log("Đăng nhập lỗi:", res.error);
    } else {
      console.log("Đăng nhập thành công!");
      // 👉 có thể redirect user về dashboard
      window.location.href = "/";
    }
  };
      
    return <SigninForm
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        onSubmit={handlelogin}
    />;
}