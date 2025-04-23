import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About PROAUTOSPA</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Professional automotive detailing with a passion for perfection
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-gray-500">
            Founded in 2021, PROAUTOSPA began with a simple mission: to provide exceptional automotive detailing
            services that exceed customer expectations. What started as a small operation has grown into a trusted name
            in the automotive care industry.
          </p>
          <p className="text-gray-500">
            Our founder, Michael Johnson, has always been passionate about cars and believed that proper detailing is
            not just about cleaning—it's about preservation, protection, and pride in ownership. This philosophy
            continues to guide our approach today.
          </p>
          <p className="text-gray-500">
            Over the years, we've expanded our services and refined our techniques, but our commitment to quality and
            customer satisfaction remains unchanged. We take pride in transforming vehicles and delivering results that
            make our customers smile.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Detail Pro team" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-black text-white p-8 rounded-lg mb-16">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <p className="mx-auto max-w-[700px]">The principles that guide everything we do</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-white text-black">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Excellence</h3>
            <p className="text-gray-300">
              We strive for perfection in every detail, using the best products and techniques.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-white text-black">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Customer Focus</h3>
            <p className="text-gray-300">
              Your satisfaction is our priority. We listen, adapt, and deliver what you need.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-white text-black">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Integrity</h3>
            <p className="text-gray-300">
              We're honest, transparent, and committed to doing what's right for your vehicle.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-white text-black">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Reliability</h3>
            <p className="text-gray-300">Count on us to deliver consistent quality and service, every time.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
          <p className="mx-auto max-w-[700px] text-gray-500">
            The skilled professionals behind our exceptional service
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative w-40 h-40 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=400" alt="Michael Johnson" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-lg">Michael Johnson</h3>
            <p className="text-gray-500">Founder & Master Detailer</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative w-40 h-40 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=400" alt="Sarah Williams" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-lg">Sarah Williams</h3>
            <p className="text-gray-500">Ceramic Coating Specialist</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative w-40 h-40 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=400" alt="David Chen" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-lg">David Chen</h3>
            <p className="text-gray-500">Paint Correction Expert</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl font-bold">Ready to Experience the PROAUTOSPA Difference?</h2>
          <p className="mx-auto max-w-[700px] text-gray-500">
            Book your appointment today and see why our customers keep coming back
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/booking">
            <Button className="bg-black text-white hover:bg-gray-800">
              Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
