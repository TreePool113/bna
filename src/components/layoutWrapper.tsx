"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/login", "/register"]; // các trang không cần navbar/footer

  if (noLayoutRoutes.includes(pathname)) {
    // 👉 Trang login/register: chỉ render content
    return <>{children}</>;
  }

  // 👉 Các trang khác: có Navbar + Footer
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
