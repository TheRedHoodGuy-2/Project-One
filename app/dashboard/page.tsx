"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Copy, CheckCircle, Users, Trophy } from "lucide-react"

export default function DashboardPage() {
  const [copied, setCopied] = useState(false)
  const userName = "Alex" // This would come from your auth system
  const referralLink = "https://vote-priscilla.vercel.app/register?ref=ALED18"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Welcome, {userName}!</h1>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-green-800">
              Registration successful! Follow the steps below to complete your participation.
            </p>
          </div>
        </div>

        <Tabs defaultValue="referrals">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="referrals">My Referrals</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="referrals">
            <Card>
              <CardHeader>
                <CardTitle>My Referral Stats</CardTitle>
                <CardDescription>Track your campaign progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                    <p className="text-3xl font-bold">0</p>
                    <p className="text-sm text-gray-500">Total Referrals</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <Trophy className="h-6 w-6 mx-auto mb-2 text-pink-500" />
                    <p className="text-3xl font-bold">0</p>
                    <p className="text-sm text-gray-500">Points Earned</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Your Referral Link</p>
                  <div className="flex items-center space-x-2">
                    <Input value={referralLink} readOnly className="bg-gray-50" />
                    <Button size="icon" variant="outline" onClick={copyToClipboard}>
                      {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Share this link with your D Block friends to earn points when they join!
                  </p>
                </div>

                <div>
                  <p className="font-medium mb-2">Your Referrals</p>
                  <div className="text-gray-500 italic">You haven't referred anyone yet.</div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Manually Add Referrals</p>
                  <Button className="w-full">
                    <Link href="/dashboard/add-referrals">Add Friends' Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp">
            <Card>
              <CardHeader>
                <CardTitle>Join Our WhatsApp Group</CardTitle>
                <CardDescription>Connect with Priscilla's campaign team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Click the button below to join our campaign WhatsApp group. You must join the group to be eligible
                    for the ₦3,000 giveaway!
                  </p>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-medium mb-2">Important:</p>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                      <li>Use the same phone number you registered with</li>
                      <li>Introduce yourself in the group when you join</li>
                      <li>Tag @PriscillaAdmin to confirm your participation</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Join WhatsApp Group</Button>

                  <p className="text-xs text-gray-500 text-center">
                    Having trouble? Contact us through the{" "}
                    <Link href="/help" className="text-purple-600 hover:underline">
                      help page
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
