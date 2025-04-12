"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Send, Phone } from "lucide-react"

export default function HelpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    roomNumber: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  // This would come from your backend in a real app
  const adminContact = "08012345678"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would normally submit the form data to your backend
    console.log("Help request:", formData)

    // Show success message
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-600">Request Received!</CardTitle>
              <CardDescription>We've received your request for help joining the campaign</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">A campaign admin will add you to the WhatsApp group manually within 24 hours.</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm font-medium mb-1">Need immediate assistance?</p>
                <p className="text-sm text-gray-600 flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2 text-purple-600" />
                  Contact admin directly:{" "}
                  <a href={`tel:${adminContact}`} className="text-purple-600 ml-1">
                    {adminContact}
                  </a>
                </p>
              </div>
              <p className="text-sm text-gray-600">
                If you don't hear from us, please contact @PriscillaAdmin directly.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Need Help Joining?</CardTitle>
            <CardDescription>Submit your details and we'll add you to the campaign manually</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm font-medium mb-1">Need immediate assistance?</p>
              <p className="text-sm text-gray-600 flex items-center">
                <Phone className="h-4 w-4 mr-2 text-purple-600" />
                Contact admin directly:{" "}
                <a href={`tel:${adminContact}`} className="text-purple-600 ml-1">
                  {adminContact}
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your WhatsApp number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="roomNumber">Room Number</Label>
                <select
                  id="roomNumber"
                  name="roomNumber"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.roomNumber}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a room number</option>
                  {Array.from({ length: 32 }, (_, i) => {
                    const roomNumber = `D-${(i + 1).toString().padStart(3, "0")}`
                    return (
                      <option key={roomNumber} value={roomNumber}>
                        {roomNumber}
                      </option>
                    )
                  })}
                </select>
                <p className="text-xs text-gray-500">Must be between D-001 and D-032</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">What issue are you experiencing?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe the issue you're having with joining the campaign"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                <Send className="mr-2 h-4 w-4" />
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
