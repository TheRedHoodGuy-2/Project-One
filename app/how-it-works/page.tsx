import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 md:px-6">
      <div className="w-full max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">How to Participate</CardTitle>
            <CardDescription>Join Priscilla's ₦3,000 Giveaway and Support Her Crystal Hall Campaign!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center mb-4">
              <p className="text-lg">
                Hey D-Block! Want to win ₦3,000 and help Priscilla become your Block D hall senator? Join our fun QR
                code treasure hunt! The first 5 residents to complete the steps below win big. Here's how:
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-2">
                    1
                  </span>
                  Find the QR Code
                </h3>
                <ul className="space-y-2 pl-8 list-disc text-gray-600">
                  <li>
                    Look for our campaign volunteer in D-Block's common area (e.g., lounge) from 5-8 PM on [insert
                    date]. They'll have the QR code ready!
                  </li>
                  <li>Can't make it? Check posters around D-Block (hallways, notice boards) for the same QR code.</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-2">
                    2
                  </span>
                  Scan and Register
                </h3>
                <ul className="space-y-2 pl-8 list-disc text-gray-600">
                  <li>Scan the QR code with your phone—it takes you to a quick form.</li>
                  <li>
                    Enter your:
                    <ul className="pl-6 mt-1 space-y-1 list-disc">
                      <li>Full name</li>
                      <li>Phone number (the one you'll use for WhatsApp/Telegram)</li>
                      <li>Room number (e.g., D-204)</li>
                    </ul>
                  </li>
                  <li>
                    Submit, and you'll get:
                    <ul className="pl-6 mt-1 space-y-1 list-disc">
                      <li>A link to join Priscilla's campaign group chat.</li>
                      <li>A unique referral link to share with friends.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-2">
                    3
                  </span>
                  Invite Three D-Block Friends
                </h3>
                <ul className="space-y-2 pl-8 list-disc text-gray-600">
                  <li>Join the group chat using the link.</li>
                  <li>
                    Invite 3 D-Block residents to join the group chat. You have two ways to do this:
                    <ul className="pl-6 mt-1 space-y-3">
                      <li>
                        <strong>Option 1: Referral Link (Recommended):</strong>
                        <ul className="pl-6 mt-1 space-y-1 list-disc">
                          <li>Share your unique referral link with your friends.</li>
                          <li>
                            They'll click it, register with their name, phone number, and room number, then join the
                            group chat.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Option 2: Manual Entry:</strong>
                        <ul className="pl-6 mt-1 space-y-1 list-disc">
                          <li>
                            On the same website, enter the name, phone number, and room number of each friend you
                            invite.
                          </li>
                          <li>Then, add them to the group chat yourself (make sure they accept!).</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Your invites only count if your friends are D-Block residents and join the group chat.</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-2">
                    4
                  </span>
                  Tag to Show Off
                </h3>
                <ul className="space-y-2 pl-8 list-disc text-gray-600">
                  <li>
                    Once your 3 friends are in the group chat, tag them (@Friend1, @Friend2, @Friend3) and an admin
                    (@PriscillaAdmin) to let us know you're done!
                  </li>
                  <li>
                    Note: We'll verify your invites using the website data, so make sure your friends register (via link
                    or your entry).
                  </li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-2">
                    5
                  </span>
                  Win ₦3,000!
                </h3>
                <ul className="space-y-2 pl-8 list-disc text-gray-600">
                  <li>The first 5 people whose 3 D-Block friends register and join the group chat win ₦3,000 each!</li>
                  <li>We'll check room numbers and group chat members to confirm everything's legit.</li>
                  <li>Winners will be announced in the group chat and on D-Block posters within 24 hours.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">What If the Giveaway's Over?</h3>
              <div className="rounded-lg bg-purple-50 p-4">
                <p className="text-gray-600">
                  If you scan the QR code after the 5 winners are chosen, you'll see a page saying: "Giveaway closed!
                  Join Priscilla's campaign group chat anyway!" with a new link/QR code.
                </p>
                <p className="text-gray-600 mt-2">
                  Still want in? Use the group chat to stay updated on Priscilla's campaign and future giveaways!
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Can't Join? No Worries!</h3>
              <div className="rounded-lg bg-purple-50 p-4">
                <p className="text-gray-600">
                  If the link doesn't work or you have issues, visit the website and submit your name, phone number, and
                  room number in the "Need Help?" form. We'll add you manually within 24 hours.
                </p>
                <p className="text-gray-600 mt-2">
                  Questions? Find our volunteer or message @PriscillaAdmin in the group chat.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Rules:</h3>
              <ul className="space-y-2 pl-8 list-disc text-gray-600">
                <li>Only D-Block (Crystal Hall) residents can participate. Non-residents will be disqualified.</li>
                <li>Use the phone number you registered with to join the group chat.</li>
                <li>False info (e.g., wrong room numbers) means you're out.</li>
                <li>By joining, you're supporting Priscilla's campaign—let's make Block D awesome!</li>
              </ul>
            </div>

            <div className="rounded-lg bg-pink-50 p-4 text-center">
              <h3 className="font-medium text-lg mb-2">More Giveaways Coming!</h3>
              <p className="text-gray-600">
                Even if you don't win this time, stick around in the group chat for campaign updates and more chances to
                win.
              </p>
              <p className="font-medium mt-4">Scan, invite, win—let's get Priscilla elected!</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="/register">Register Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
