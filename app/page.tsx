import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-8 md:px-6">
      <div className="flex w-full max-w-2xl flex-col items-center space-y-6">
        {/* Logo/Avatar */}
        <div className="relative h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-300">P</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-1 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vote for Priscilla!</h1>
          <p className="text-base text-gray-600">Join the campaign to elect Priscilla as D Block Hall Senator</p>
        </div>

        {/* Giveaway Card */}
        <Card className="w-full bg-purple-50 border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Win ₦3,000!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <CardDescription className="text-sm">
              Register, invite your D Block friends, and win ₦3,000 when they join our campaign WhatsApp group!
            </CardDescription>
            <Link href="/register">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Join Now
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Leaderboard Card */}
        <Card className="w-full bg-purple-50 border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <CardDescription className="text-sm">
              See who's bringing the most supporters to Priscilla's campaign!
            </CardDescription>
            <Link href="/leaderboard">
              <Button className="w-full bg-pink-600 hover:bg-pink-700">
                View Leaderboard
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Button variant="outline" className="flex-1">
            <Link href="/about">About Priscilla</Link>
          </Button>
          <Button variant="default" className="flex-1 bg-gray-900 hover:bg-gray-800">
            <Link href="/login">Already Registered? Login</Link>
          </Button>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <Link href="/how-it-works" className="hover:text-purple-600 hover:underline">
            How It Works
          </Link>
          <Link href="/admin" className="hover:text-purple-600 hover:underline">
            Admin
          </Link>
          <Link href="/help" className="hover:text-purple-600 hover:underline">
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  )
}
