import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

// This would normally come from your backend
const leaderboardData = [
  { name: "Chioma A.", roomNumber: "D-15", referrals: 5, points: 15, verified: true },
  { name: "Ngozi B.", roomNumber: "D-16", referrals: 3, points: 9, verified: true },
  { name: "Emeka C.", roomNumber: "D-07", referrals: 2, points: 6, verified: true },
  { name: "Oluwaseun D.", roomNumber: "D-22", referrals: 2, points: 6, verified: true },
  { name: "Adebayo E.", roomNumber: "D-03", referrals: 1, points: 3, verified: true },
]

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-2xl">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Campaign Leaderboard</CardTitle>
            <CardDescription>Top supporters in Priscilla's campaign for D Block Senator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {leaderboardData.map((user, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  index === 0
                    ? "bg-yellow-50 border border-yellow-200"
                    : index === 1
                      ? "bg-gray-50 border border-gray-200"
                      : index === 2
                        ? "bg-amber-50 border border-amber-200"
                        : "bg-white border"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      index === 0
                        ? "bg-yellow-100 text-yellow-600"
                        : index === 1
                          ? "bg-gray-100 text-gray-600"
                          : index === 2
                            ? "bg-amber-100 text-amber-600"
                            : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {index === 0 ? <span className="text-yellow-600 font-bold">1</span> : index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">
                      {user.roomNumber} • {user.referrals} verified referrals
                    </p>
                  </div>
                </div>
                <div className="text-lg font-bold">{user.points} pts</div>
              </div>
            ))}

            <div className="mt-6 rounded-lg bg-purple-50 p-4 text-center">
              <h3 className="font-medium text-lg">Prize: ₦3,000</h3>
              <p className="text-sm text-gray-600 mt-1">Winner will be announced after the campaign period ends</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
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
