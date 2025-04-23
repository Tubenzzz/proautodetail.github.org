import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Sparkles, Timer, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Detailing Services</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Professional detailing services tailored to your vehicle's needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card id="quick-detail" className="flex flex-col">
          <CardHeader>
            <div className="p-2 w-fit rounded-full bg-gray-100 mb-2">
              <Timer className="h-5 w-5" />
            </div>
            <CardTitle>Quick Detail</CardTitle>
            <CardDescription>Express service for those who need a quick refresh</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Quick Detail Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Includes:</h3>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Exterior hand wash</li>
                <li>• Wheel cleaning</li>
                <li>• Tire shine</li>
                <li>• Interior vacuum</li>
                <li>• Dashboard and console wipe-down</li>
                <li>• Window cleaning</li>
              </ul>
              <p className="font-medium mt-4">Duration: 1 hour</p>
              <p className="font-medium">Price: $49.99</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/booking?service=quick-detail" className="w-full">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card id="premium-detail" className="flex flex-col">
          <CardHeader>
            <div className="p-2 w-fit rounded-full bg-gray-100 mb-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <CardTitle>Premium Detail</CardTitle>
            <CardDescription>Comprehensive interior and exterior detailing</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Premium Detail Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Includes:</h3>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Everything in Quick Detail</li>
                <li>• Clay bar treatment</li>
                <li>• Paint polish</li>
                <li>• Wax application</li>
                <li>• Deep interior cleaning</li>
                <li>• Leather/vinyl conditioning</li>
                <li>• Engine bay cleaning</li>
                <li>• Trunk cleaning</li>
              </ul>
              <p className="font-medium mt-4">Duration: 3 hours</p>
              <p className="font-medium">Price: $149.99</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/booking?service=premium-detail" className="w-full">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card id="ceramic-coating" className="flex flex-col">
          <CardHeader>
            <div className="p-2 w-fit rounded-full bg-gray-100 mb-2">
              <Shield className="h-5 w-5" />
            </div>
            <CardTitle>Ceramic Coating</CardTitle>
            <CardDescription>Long-lasting protection with premium ceramic coating</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ceramic Coating Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Includes:</h3>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Full paint correction</li>
                <li>• Surface preparation</li>
                <li>• Professional ceramic coating application</li>
                <li>• Complete interior detail</li>
                <li>• Glass treatment</li>
                <li>• Wheel faces ceramic coated</li>
                <li>• 2-year warranty</li>
              </ul>
              <p className="font-medium mt-4">Duration: 1-2 days</p>
              <p className="font-medium">Price: $599.99</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/booking?service=ceramic-coating" className="w-full">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card id="paint-correction" className="flex flex-col">
          <CardHeader>
            <div className="p-2 w-fit rounded-full bg-gray-100 mb-2">
              <Zap className="h-5 w-5" />
            </div>
            <CardTitle>Paint Correction</CardTitle>
            <CardDescription>Remove swirls, scratches, and imperfections</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Paint Correction Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Includes:</h3>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Paint decontamination</li>
                <li>• Multi-stage machine polishing</li>
                <li>• Swirl and scratch removal</li>
                <li>• Paint enhancement</li>
                <li>• Sealant application</li>
                <li>• Exterior detail</li>
              </ul>
              <p className="font-medium mt-4">Duration: 1 day</p>
              <p className="font-medium">Price: $299.99</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/booking?service=paint-correction" className="w-full">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card id="interior-detail" className="flex flex-col">
          <CardHeader>
            <div className="p-2 w-fit rounded-full bg-gray-100 mb-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <CardTitle>Interior Detail</CardTitle>
            <CardDescription>Deep clean and condition your vehicle's interior</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Interior Detail Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Includes:</h3>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Complete interior vacuum</li>
                <li>• Steam cleaning of carpets and upholstery</li>
                <li>• Leather/vinyl cleaning and conditioning</li>
                <li>• Dashboard and console detailing</li>
                <li>• Air vent cleaning</li>
                <li>• Interior glass cleaning</li>
                <li>• Trunk cleaning</li>
              </ul>
              <p className="font-medium mt-4">Duration: 2 hours</p>
              <p className="font-medium">Price: $99.99</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/booking?service=interior-detail" className="w-full">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 bg-black text-white p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Custom Detailing Packages</h2>
            <p>
              Need a custom solution for your vehicle? We offer personalized detailing packages tailored to your
              specific needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Fleet services available
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Exotic and luxury vehicle specialists
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Maintenance plans available
              </li>
            </ul>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200">Contact Us</Button>
            </Link>
          </div>
          <div className="relative h-64 rounded-md overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="Custom Detailing" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
