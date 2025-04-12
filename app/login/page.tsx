"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would normally authenticate the user
    console.log("Login attempt:", formData)

    // Redirect to dashboard (in a real app)
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
            <CardTitle className="text-2xl">Login to Your Account</CardTitle>
            <CardDescription>Access your campaign dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href="/register" className="text-purple-600 hover:underline">
                Register here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
