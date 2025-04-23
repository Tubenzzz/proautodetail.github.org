import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">PROAUTOSPA</h3>
            <p className="text-sm text-gray-300">
              Professional automotive detailing services that transform your vehicle.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services#quick-detail" className="hover:text-white">
                  Quick Detail
                </Link>
              </li>
              <li>
                <Link href="/services#premium-detail" className="hover:text-white">
                  Premium Detail
                </Link>
              </li>
              <li>
                <Link href="/services#ceramic-coating" className="hover:text-white">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/services#paint-correction" className="hover:text-white">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/services#interior-detail" className="hover:text-white">
                  Interior Detail
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Detail Street</li>
              <li>Automotive City, AC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@proautospa.com</li>
              <li>Hours: Mon-Sat 8am-6pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} PROAUTOSPA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
