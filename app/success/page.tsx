"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, Check, Share2 } from "lucide-react"

export default function SuccessPage() {
  const [copied, setCopied] = useState(false)

  // This would normally come from your backend after registration
  const referralLink = "https://vote-priscilla.vercel.app/register?ref=USER123"
  const whatsappLink = "https://chat.whatsapp.com/example"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-600">Registration Successful!</CardTitle>
            <CardDescription>
              You're now part of Priscilla's campaign. Complete these steps to win ₦3,000!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Join WhatsApp Group */}
            <div className="space-y-3 rounded-lg bg-gray-50 p-4">
              <h3 className="font-medium">Step 1: Join the WhatsApp Group</h3>
              <p className="text-sm text-gray-600">Click the button below to join our campaign WhatsApp group:</p>
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Join WhatsApp Group
              </Button>
            </div>

            {/* Step 2: Invite Friends */}
            <div className="space-y-3 rounded-lg bg-gray-50 p-4">
              <h3 className="font-medium">Step 2: Invite 3 D-Block Friends</h3>
              <p className="text-sm text-gray-600">Share your unique referral link with 3 friends from D-Block:</p>
              <div className="flex items-center space-x-2">
                <Input value={referralLink} readOnly className="bg-white" />
                <Button size="icon" variant="outline" onClick={() => copyToClipboard(referralLink)}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  const text = `Join Priscilla's campaign for D Block Hall Senator and win ₦3,000! Register here: ${referralLink}`
                  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
                }}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share via WhatsApp
              </Button>
            </div>

            {/* Alternative: Manual Entry */}
            <div className="space-y-3">
              <h3 className="font-medium">Alternative: Enter Your Friends' Details</h3>
              <p className="text-sm text-gray-600">You can also manually enter your friends' details:</p>
              <Button variant="outline" className="w-full">
                <Link href="/invite">Enter Friends' Details</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-500">
              Need help? Contact <span className="font-medium">@PriscillaAdmin</span> in the WhatsApp group
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
