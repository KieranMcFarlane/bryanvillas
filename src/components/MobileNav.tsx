'use client'

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet"
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
        <button className="mobile-nav-button md:hidden" aria-label="Open navigation menu">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-white border-r border-gray-200 sheet-content">
        <SheetHeader className="text-left">
          <SheetTitle className="flex items-center gap-3 mb-6">
            <Image
              src="/images/logo-1.png"
              alt="Bryan's Villas Logo"
              width={64}
              height={28}
              className="h-7 w-auto mobile-nav-logo"
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-6 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-[var(--secondary-color)] transition-colors uppercase tracking-wide border-b border-gray-100 pb-3"
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