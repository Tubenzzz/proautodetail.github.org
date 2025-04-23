"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const SERVICES = [
  {
    id: "quick-detail",
    name: "Quick Detail",
    description: "Express service for those who need a quick refresh.",
    price: "$49.99",
    duration: "1 hour",
  },
  {
    id: "premium-detail",
    name: "Premium Detail",
    description: "Comprehensive interior and exterior detailing.",
    price: "$149.99",
    duration: "3 hours",
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    description: "Long-lasting protection with premium ceramic coating.",
    price: "$599.99",
    duration: "1-2 days",
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    description: "Remove swirls, scratches, and imperfections from your paint.",
    price: "$299.99",
    duration: "1 day",
  },
  {
    id: "interior-detail",
    name: "Interior Detail",
    description: "Deep clean and condition your vehicle's interior.",
    price: "$99.99",
    duration: "2 hours",
  },
]

const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

const YEARS = Array.from({ length: 2024 - 1990 + 1 }, (_, i) => (1990 + i).toString())

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const initialService = searchParams.get("service") || ""

  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [service, setService] = useState<string>(initialService)
  const [vehicleYear, setVehicleYear] = useState<string | undefined>(undefined)
  const [vehicleMake, setVehicleMake] = useState("")
  const [vehicleModel, setVehicleModel] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real application, you would send this data to your backend
    console.log({
      service,
      date,
      time,
      vehicleYear,
      vehicleMake,
      vehicleModel,
      name,
      email,
      phone,
    })

    toast({
      title: "Appointment Booked!",
      description: `Your appointment has been scheduled with PROAUTOSPA for ${format(date!, "PPP")} at ${time}.`,
    })

    // Redirect to confirmation page
    router.push("/booking/confirmation")
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Appointment</h1>
          <p className="text-gray-500 md:text-xl">Schedule your detailing service in just a few steps</p>
        </div>

        <div className="flex justify-between mb-8">
          <div className={`flex flex-col items-center ${step >= 1 ? "text-black" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
            >
              1
            </div>
            <span className="text-sm mt-2">Service</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 2 ? "bg-black" : "bg-gray-200"}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 2 ? "text-black" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
            >
              2
            </div>
            <span className="text-sm mt-2">Schedule</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 3 ? "bg-black" : "bg-gray-200"}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 3 ? "text-black" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
            >
              3
            </div>
            <span className="text-sm mt-2">Vehicle</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 4 ? "bg-black" : "bg-gray-200"}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 4 ? "text-black" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 4 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
            >
              4
            </div>
            <span className="text-sm mt-2">Contact</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Select a Service</CardTitle>
                <CardDescription>Choose the detailing service you need</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={service} onValueChange={setService} className="space-y-4">
                  {SERVICES.map((svc) => (
                    <div key={svc.id} className="flex items-start space-x-3">
                      <RadioGroupItem value={svc.id} id={svc.id} className="mt-1" />
                      <Label htmlFor={svc.id} className="flex flex-col cursor-pointer">
                        <span className="font-medium">
                          {svc.name} - {svc.price}
                        </span>
                        <span className="text-sm text-gray-500">{svc.description}</span>
                        <span className="text-sm text-gray-500">Duration: {svc.duration}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!service}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose when you'd like your appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            // Disable dates in the past and Sundays
                            const today = new Date()
                            today.setHours(0, 0, 0, 0)
                            return date < today || date.getDay() === 0
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_SLOTS.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!date || !time}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
                <CardDescription>Tell us about your vehicle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-year">Vehicle Year</Label>
                    <Select value={vehicleYear} onValueChange={setVehicleYear}>
                      <SelectTrigger id="vehicle-year">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {YEARS.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle-make">Vehicle Make</Label>
                    <Input
                      id="vehicle-make"
                      placeholder="e.g., Toyota, Honda, BMW"
                      value={vehicleMake}
                      onChange={(e) => setVehicleMake(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle-model">Vehicle Model</Label>
                    <Input
                      id="vehicle-model"
                      placeholder="e.g., Camry, Civic, 3 Series"
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!vehicleYear || !vehicleMake || !vehicleModel}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>How can we reach you?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!name || !email || !phone}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  )
}
