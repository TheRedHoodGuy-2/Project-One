"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AlertCircle } from "lucide-react"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would validate against a secure backend
    if (password === "admin123") {
      window.location.href = "/admin/dashboard"
    } else {
      setError("Invalid password")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-5 w-5 text-red-600" />
          </div>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter the admin password to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
