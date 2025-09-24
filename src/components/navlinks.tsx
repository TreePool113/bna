"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export function Links({ isMobile }: { isMobile: boolean }) {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Membership", href: "/membership" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={isMobile ? "flex flex-col space-y-1" : "flex space-x-4"}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            "link px-3 py-2 text-gray-300 hover:text-white rounded-md",
            pathname === item.href && "active bg-gray-700 text-white"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
