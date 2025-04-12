"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, UserPlus } from "lucide-react"

export default function InvitePage() {
  const [friends, setFriends] = useState([
    { name: "", phoneNumber: "", roomNumber: "" },
    { name: "", phoneNumber: "", roomNumber: "" },
    { name: "", phoneNumber: "", roomNumber: "" },
  ])

  const [errors, setErrors] = useState<string[]>(["", "", ""])

  const handleChange = (index: number, field: string, value: string) => {
    const newFriends = [...friends]
    newFriends[index] = { ...newFriends[index], [field]: value }
    setFriends(newFriends)

    // Clear error when user types
    if (errors[index]) {
      const newErrors = [...errors]
      newErrors[index] = ""
      setErrors(newErrors)
    }
  }

  const validateFriend = (index: number) => {
    const friend = friends[index]
    const roomRegex = /^D-([1-9]|[1-2][0-9]|3[0-2])$/

    if (!roomRegex.test(friend.roomNumber)) {
      const newErrors = [...errors]
      newErrors[index] = "Room number must be between D-1 and D-32"
      setErrors(newErrors)
      return false
    }

    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all friends
    let isValid = true
    for (let i = 0; i < friends.length; i++) {
      if (!validateFriend(i)) {
        isValid = false
      }
    }

    if (isValid) {
      // Here you would normally submit the form data to your backend
      console.log("Invited friends:", friends)

      // Redirect to thank you page (in a real app)
      window.location.href = "/thank-you"
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-md">
        <Link href="/success" className="inline-flex items-center text-sm text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to success page
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Invite Your Friends</CardTitle>
            <CardDescription>
              Enter the details of 3 friends from D-Block to invite them to Priscilla's campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {friends.map((friend, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg">
                  <h3 className="font-medium">Friend {index + 1}</h3>

                  <div className="space-y-2">
                    <Label htmlFor={`name-${index}`}>Full Name</Label>
                    <Input
                      id={`name-${index}`}
                      value={friend.name}
                      onChange={(e) => handleChange(index, "name", e.target.value)}
                      placeholder="Enter friend's name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`phone-${index}`}>Phone Number</Label>
                    <Input
                      id={`phone-${index}`}
                      value={friend.phoneNumber}
                      onChange={(e) => handleChange(index, "phoneNumber", e.target.value)}
                      placeholder="Enter friend's WhatsApp number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`room-${index}`}>Room Number</Label>
                    <Input
                      id={`room-${index}`}
                      value={friend.roomNumber}
                      onChange={(e) => handleChange(index, "roomNumber", e.target.value)}
                      placeholder="e.g., D-12"
                      required
                    />
                    <p className="text-xs text-gray-500">Must be between D-1 and D-32</p>
                    {errors[index] && <p className="text-sm text-red-500">{errors[index]}</p>}
                  </div>
                </div>
              ))}

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                <UserPlus className="mr-2 h-4 w-4" />
                Submit Invitations
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-500">Remember: Only D-Block residents are eligible for the campaign</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
