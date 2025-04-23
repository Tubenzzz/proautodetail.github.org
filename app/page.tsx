import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Shield, Star, Timer } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Premium Auto Detailing Services
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Professional detailing that transforms your vehicle. From quick washes to ceramic coating, we deliver
                  excellence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/booking">
                  <Button className="bg-white text-black hover:bg-gray-200">
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[600px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Luxury car being detailed"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Detailing Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our range of professional detailing services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-black text-white">
                <Timer className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Quick Detail</h3>
              <p className="text-gray-500 text-center">
                Express service for those who need a quick refresh. Includes exterior wash, tire shine, and interior
                vacuum.
              </p>
              <Link href="/booking?service=quick-detail">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Book Now
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-black text-white">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Premium Detail</h3>
              <p className="text-gray-500 text-center">
                Comprehensive interior and exterior detailing. Includes clay bar treatment, polish, and interior deep
                clean.
              </p>
              <Link href="/booking?service=premium-detail">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Book Now
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-black text-white">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Ceramic Coating</h3>
              <p className="text-gray-500 text-center">
                Long-lasting protection with premium ceramic coating. Includes paint correction and full detail.
              </p>
              <Link href="/booking?service=ceramic-coating">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button className="bg-black text-white hover:bg-gray-800">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We deliver excellence in every detail
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col space-y-2">
              <CheckCircle className="h-6 w-6 text-black" />
              <h3 className="text-xl font-bold">Professional Technicians</h3>
              <p className="text-gray-500">
                Our team consists of certified detailing professionals with years of experience.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <CheckCircle className="h-6 w-6 text-black" />
              <h3 className="text-xl font-bold">Premium Products</h3>
              <p className="text-gray-500">We use only the highest quality detailing products and equipment.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <CheckCircle className="h-6 w-6 text-black" />
              <h3 className="text-xl font-bold">Satisfaction Guaranteed</h3>
              <p className="text-gray-500">We're not happy until you're completely satisfied with our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book your appointment today and experience the difference
              </p>
            </div>
            <Link href="/booking">
              <Button className="bg-white text-black hover:bg-gray-200">
                Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
