'use client'

import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/#villas", label: "Villas" },
    { href: "/experiences", label: "Experiences" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="mobile-nav-button md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-white">
        <nav className="flex flex-col space-y-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-[var(--secondary-color)] transition-colors uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-dm-mono)', letterSpacing: '0.5px' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
} 