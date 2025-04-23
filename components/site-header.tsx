"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 bg-black rounded-full flex items-center justify-center">
            <Image src="/images/logo.png" alt="PROAUTOSPA Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-xl font-bold ml-2">PROAUTOSPA</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/booking">
            <Button className="bg-black text-white hover:bg-gray-800">Book Appointment</Button>
          </Link>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center mt-4">
              <div className="relative h-12 w-12 bg-black rounded-full flex items-center justify-center">
                <Image src="/images/logo.png" alt="PROAUTOSPA Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-xl font-bold ml-2">PROAUTOSPA</span>
            </div>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-black text-white hover:bg-gray-800 mt-4">Book Appointment</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
