import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConfirmationPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Booking Confirmed!</h1>
        <p className="text-gray-500">
          Thank you for booking with PROAUTOSPA. We've sent a confirmation email with your appointment details.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg text-left">
          <h2 className="font-semibold text-lg mb-4">What's Next?</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• You'll receive a reminder 24 hours before your appointment</li>
            <li>• Please arrive 10 minutes before your scheduled time</li>
            <li>• Make sure your vehicle is accessible (remove personal items)</li>
            <li>• Our team will call you if there are any changes</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-3">
          <Link href="/">
            <Button className="w-full bg-black text-white hover:bg-gray-800">Return to Home</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="w-full">
              Browse Other Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
