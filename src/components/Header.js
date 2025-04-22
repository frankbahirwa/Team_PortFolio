"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "AI Match", href: "/hire" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          DevTeam<span className="text-black">AI</span>
        </Link>
        <nav className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-gray-600 hover:text-blue-600 transition font-medium",
                pathname === link.href && "text-blue-600 font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
