"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    roomNumber: "",
    password: "",
    referralCode: "",
  })

  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    // Clear error when user types
    if (error) setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.roomNumber) {
      setError("Please select a room number")
      return
    }

    // Here you would normally submit the form data to your backend
    console.log("Form submitted:", formData)

    // Redirect to success page (in a real app)
    window.location.href = "/dashboard"
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Join Priscilla's Campaign</CardTitle>
            <CardDescription>Register to support Priscilla for D Block Hall Senator</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
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
                  placeholder="e.g., 08012345678"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-gray-500">Use at least 8 characters with letters and numbers</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="roomNumber">D Block Room Number</Label>
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
                <p className="text-xs text-gray-500">Enter a room number between D-001 and D-032</p>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="referralCode">Referral Code</Label>
                <Input
                  id="referralCode"
                  name="referralCode"
                  placeholder="Enter referral code if you have one"
                  value={formData.referralCode}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                Register
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-500">
              Already registered?{" "}
              <Link href="/login" className="text-purple-600 hover:underline">
                Login here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
