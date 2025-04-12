import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Thank You!</CardTitle>
            <CardDescription>Your invitations have been submitted successfully</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              Make sure your friends accept the invitation and join the WhatsApp group to complete your entry for the
              ₦3,000 giveaway!
            </p>
            <p className="text-sm text-gray-600 mb-6">
              The first 5 people to successfully invite 3 D-Block friends will win ₦3,000 each.
            </p>
            <div className="rounded-lg bg-purple-50 p-4 text-left">
              <h3 className="font-medium mb-2">Next Steps:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">1.</span>
                  <span>Remind your friends to join the WhatsApp group</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">2.</span>
                  <span>Tag your friends and @PriscillaAdmin in the group when all 3 have joined</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">3.</span>
                  <span>Winners will be announced within 24 hours</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
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
