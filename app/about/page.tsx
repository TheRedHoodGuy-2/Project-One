import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Crown, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-2xl">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-100 border-4 border-pink-200 flex items-center justify-center">
              <span className="text-3xl text-pink-500">P</span>
            </div>
            <CardTitle className="text-3xl text-pink-600">Priscilla</CardTitle>
            <CardDescription className="text-lg">Candidate for D Block Hall Senator ✨</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-center">My Vision for D Block</h3>
              <div className="bg-pink-50 p-4 rounded-lg text-center italic">
                <p className="text-gray-700">"A, B, C, D doesn't mean D will always be last! ❤️"</p>
              </div>
              <p className="text-gray-600">
                As your D Block Hall Senator, I'm committed to creating a vibrant, inclusive, and supportive community
                where every queen feels heard, valued, and empowered.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">My platform focuses on three key areas:</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 rounded-lg border">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <Star className="h-4 w-4 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-pink-600">Priority Updates</h4>
                    <p className="text-gray-600">
                      No more being last to receive welfare updates! D Block deserves to be first in line.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Crown className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600">D Block Excellence</h4>
                    <p className="text-gray-600">
                      Dedicated to making D Block the best block in Crystal with improved facilities and events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-pink-600">Welfare Champion</h4>
                    <p className="text-gray-600">
                      Passionate about your welfare and that of our entire block. Your concerns are my priority!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Why Vote for Priscilla?</h3>
              <ul className="space-y-2 pl-5 list-disc text-gray-600">
                <li>Experienced in student leadership roles</li>
                <li>Passionate about creating a supportive community</li>
                <li>Excellent communication and problem-solving skills</li>
                <li>Committed to representing ALL D Block residents</li>
                <li>Dedicated to improving welfare services for D Block</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-pink-600 hover:bg-pink-700">
              <Link href="/register">Join My Campaign</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
