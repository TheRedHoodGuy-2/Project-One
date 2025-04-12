"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send } from "lucide-react"

export default function ForgotPasswordPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would normally send a reset link or code to the user's phone
    console.log("Password reset requested for:", phoneNumber)

    // Show success message
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-600">Reset Link Sent!</CardTitle>
              <CardDescription>We've sent a password reset link to your phone number</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">Please check your SMS messages for instructions on how to reset your password.</p>
              <p className="text-sm text-gray-600">
                If you don't receive the message within 5 minutes, please try again or contact support.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">
                <Link href="/login" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Login
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
        <Link href="/login" className="inline-flex items-center text-sm text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to login
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Forgot Password</CardTitle>
            <CardDescription>Enter your phone number to reset your password</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="e.g., 08012345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500">Enter the phone number you used during registration</p>
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                <Send className="mr-2 h-4 w-4" />
                Send Reset Link
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
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
