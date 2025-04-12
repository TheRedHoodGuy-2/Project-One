"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Home, Phone } from "lucide-react"

export default function GiveawayClosedPage() {
  // This would come from your backend
  const whatsappLink = "https://chat.whatsapp.com/example"
  const adminContact = "08012345678"

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
              <AlertCircle className="h-10 w-10 text-amber-600" />
            </div>
            <CardTitle className="text-2xl">Giveaway Closed</CardTitle>
            <CardDescription>The ₦3,000 giveaway has already been won</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              The first 5 participants have already completed the challenge, but you can still join Priscilla's
              campaign!
            </p>

            <div className="rounded-lg bg-purple-50 p-4 mb-6">
              <h3 className="font-medium mb-2">Join Our WhatsApp Group</h3>
              <p className="text-sm text-gray-600 mb-4">Stay updated on Priscilla's campaign and future giveaways</p>
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Join WhatsApp Group
              </Button>
            </div>

            <div className="text-sm text-gray-600">
              <h3 className="font-medium mb-2">Need Help?</h3>
              <p className="mb-2">If you can't join the group, contact @PriscillaAdmin or submit your details below:</p>
              <div className="flex items-center justify-center mb-3">
                <Phone className="h-4 w-4 mr-2 text-purple-600" />
                <a href={`tel:${adminContact}`} className="text-purple-600">
                  {adminContact}
                </a>
              </div>
              <Button variant="link" className="text-purple-600 p-0 h-auto">
                <Link href="/help">Get Help Joining</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <Button variant="outline">
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
