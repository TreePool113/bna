"use client";
import SignupForm from "@/components/signup-form";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password }),
    });
    const data = await res.json();
    console.log("Server response:", data);
  };

  return (
    <SignupForm
      name={name} setName={setName}
      email={email} setEmail={setEmail}
      phone={phone} setPhone={setPhone}
      password={password} setPassword={setPassword}
      onSubmit={handleRegister}
    />
  );
}
