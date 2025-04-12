"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Home, Download, Ban, Pencil, UserX, Search, CheckCircle, X, Phone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// Mock data - in a real app this would come from your backend
const roomData = Array.from({ length: 32 }, (_, i) => {
  const roomNumber = `D-${(i + 1).toString().padStart(3, "0")}`
  const occupancy = Math.floor(Math.random() * 5) // 0-4 people
  return {
    id: roomNumber,
    occupancy,
    maxOccupancy: 4,
  }
})

const referralData = [
  { name: "Chioma A.", room: "D-15", referrals: 5, conversionRate: "61%" },
  { name: "Ngozi B.", room: "D-16", referrals: 3, conversionRate: "67%" },
  { name: "Emeka C.", room: "D-07", referrals: 2, conversionRate: "50%" },
  { name: "Oluwaseun D.", room: "D-22", referrals: 2, conversionRate: "40%" },
  { name: "Adebayo E.", room: "D-03", referrals: 1, conversionRate: "33%" },
]

const registrationData = [
  { id: 1, name: "Chioma Adebayo", phone: "08012345678", room: "D-15", status: "verified", referrals: 5 },
  { id: 2, name: "Ngozi Bakare", phone: "08023456789", room: "D-16", status: "verified", referrals: 3 },
  { id: 3, name: "Emeka Chukwu", phone: "08034567890", room: "D-07", status: "verified", referrals: 2 },
  { id: 4, name: "Oluwaseun Dada", phone: "08045678901", room: "D-22", status: "verified", referrals: 2 },
  { id: 5, name: "Adebayo Eze", phone: "08056789012", room: "D-03", status: "verified", referrals: 1 },
  { id: 6, name: "Folake Gbadamosi", phone: "08067890123", room: "D-18", status: "pending", referrals: 0 },
  { id: 7, name: "Hassan Ibrahim", phone: "08078901234", room: "D-24", status: "pending", referrals: 0 },
]

// Mock help requests data
const helpRequestsData = [
  {
    id: 1,
    name: "John Okafor",
    phone: "08012345678",
    room: "D-12",
    message: "I can't join the WhatsApp group. The link isn't working for me.",
    status: "pending",
    date: "2025-04-11",
  },
  {
    id: 2,
    name: "Amina Ibrahim",
    phone: "08023456789",
    room: "D-05",
    message: "I registered but didn't receive my referral link. Can you help?",
    status: "resolved",
    date: "2025-04-10",
  },
  {
    id: 3,
    name: "Tunde Bakare",
    phone: "08034567890",
    room: "D-22",
    message: "My friend used my referral link but I didn't get credit for it.",
    status: "pending",
    date: "2025-04-12",
  },
]

export default function AdminDashboardPage() {
  const [whatsappLink, setWhatsappLink] = useState("https://chat.whatsapp.com/example")
  const [adminContact, setAdminContact] = useState("08012345678")
  const [searchTerm, setSearchTerm] = useState("")
  const [helpSearchTerm, setHelpSearchTerm] = useState("")
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [banModalOpen, setBanModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [roomOccupants, setRoomOccupants] = useState<any[]>([])
  const [roomModalOpen, setRoomModalOpen] = useState(false)
  const [moveUserModalOpen, setMoveUserModalOpen] = useState(false)
  const [helpRequestModalOpen, setHelpRequestModalOpen] = useState(false)
  const [selectedHelpRequest, setSelectedHelpRequest] = useState<any>(null)

  const filteredRegistrations = registrationData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm) ||
      user.room.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredHelpRequests = helpRequestsData.filter(
    (request) =>
      request.name.toLowerCase().includes(helpSearchTerm.toLowerCase()) ||
      request.phone.includes(helpSearchTerm) ||
      request.room.toLowerCase().includes(helpSearchTerm.toLowerCase()) ||
      request.message.toLowerCase().includes(helpSearchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      {/* Admin Header */}
      <header className="border-b bg-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold">Priscilla Campaign Admin</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                View Site
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="flex-1 p-6">
        <div className="grid gap-6">
          {/* Dashboard Stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{registrationData.length}</div>
                <p className="text-xs text-muted-foreground">
                  {registrationData.filter((r) => r.status === "verified").length} verified
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {registrationData.reduce((sum, user) => sum + user.referrals, 0)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {(registrationData.reduce((sum, user) => sum + user.referrals, 0) / registrationData.length).toFixed(
                    1,
                  )}{" "}
                  avg per user
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Room Occupancy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {roomData.reduce((sum, room) => sum + room.occupancy, 0)}/{roomData.length * 4}
                </div>
                <p className="text-xs text-muted-foreground">
                  {roomData.filter((room) => room.occupancy > 0).length} rooms with residents
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Help Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {helpRequestsData.filter((req) => req.status === "pending").length}
                </div>
                <p className="text-xs text-muted-foreground">pending requests</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="rooms">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="rooms">Room Distribution</TabsTrigger>
              <TabsTrigger value="registrations">Registrations</TabsTrigger>
              <TabsTrigger value="help">Help Requests</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Rooms Tab */}
            <TabsContent value="rooms" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Room Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                    {roomData.map((room) => {
                      // Mock data for room occupants - in a real app, this would come from your backend
                      const roomOccupants = registrationData
                        .filter((user) => user.room === room.id)
                        .slice(0, room.occupancy)

                      return (
                        <div
                          key={room.id}
                          className={`p-2 rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow ${
                            room.occupancy === 0
                              ? "bg-gray-100"
                              : room.occupancy < room.maxOccupancy
                                ? "bg-purple-100"
                                : "bg-purple-200"
                          }`}
                          onClick={() => {
                            setSelectedRoom(room)
                            setRoomOccupants(roomOccupants)
                            setRoomModalOpen(true)
                          }}
                          title={`${room.id}: ${room.occupancy}/${room.maxOccupancy} occupants`}
                        >
                          <div className="text-sm font-medium">{room.id}</div>
                          <div className="text-xs">
                            {room.occupancy}/{room.maxOccupancy}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Room Details Modal */}
                  <Dialog open={roomModalOpen} onOpenChange={setRoomModalOpen}>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>{selectedRoom?.id} - Room Details</DialogTitle>
                        <DialogDescription>
                          {selectedRoom?.occupancy}/{selectedRoom?.maxOccupancy} occupants
                        </DialogDescription>
                      </DialogHeader>

                      <div className="py-4">
                        <h3 className="text-sm font-medium mb-2">Room Occupants</h3>
                        {roomOccupants.length > 0 ? (
                          <div className="space-y-3">
                            {roomOccupants.map((occupant) => (
                              <div
                                key={occupant.id}
                                className="flex items-center justify-between p-3 rounded-md border"
                              >
                                <div>
                                  <p className="font-medium">{occupant.name}</p>
                                  <p className="text-sm text-gray-500">{occupant.phone}</p>
                                </div>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      setSelectedUser(occupant)
                                      setMoveUserModalOpen(true)
                                    }}
                                  >
                                    Move
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      setSelectedUser(occupant)
                                      setEditModalOpen(true)
                                      setRoomModalOpen(false)
                                    }}
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      setSelectedUser(occupant)
                                      setBanModalOpen(true)
                                      setRoomModalOpen(false)
                                    }}
                                  >
                                    Ban
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            <p>This room is currently empty</p>
                          </div>
                        )}
                      </div>

                      <DialogFooter>
                        <Button variant="outline" onClick={() => setRoomModalOpen(false)}>
                          Close
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* Move User Modal */}
                  <Dialog open={moveUserModalOpen} onOpenChange={setMoveUserModalOpen}>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Move User to Another Room</DialogTitle>
                        <DialogDescription>Select a new room for {selectedUser?.name}</DialogDescription>
                      </DialogHeader>

                      <div className="py-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-room">New Room</Label>
                          <Select>
                            <SelectTrigger id="new-room">
                              <SelectValue placeholder="Select a room" />
                            </SelectTrigger>
                            <SelectContent>
                              {roomData
                                .filter((room) => room.id !== selectedUser?.room && room.occupancy < room.maxOccupancy)
                                .map((room) => (
                                  <SelectItem key={room.id} value={room.id}>
                                    {room.id} ({room.occupancy}/{room.maxOccupancy})
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <DialogFooter>
                        <Button variant="outline" onClick={() => setMoveUserModalOpen(false)}>
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            // Here you would update the user's room
                            console.log(`Moving ${selectedUser?.name} to new room`)
                            setMoveUserModalOpen(false)
                          }}
                        >
                          Move User
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Referral Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Referrals
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Conversion Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {referralData.map((user, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.room}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.referrals}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.conversionRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Registrations Tab */}
            <TabsContent value="registrations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Registrations</CardTitle>
                  <CardDescription>View, verify, or remove participants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Search by name, phone, or room..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Referrals
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredRegistrations.map((user) => (
                          <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.room}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.referrals}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex space-x-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  title="Edit"
                                  onClick={() => {
                                    setSelectedUser(user)
                                    setEditModalOpen(true)
                                  }}
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  title="Ban"
                                  onClick={() => {
                                    setSelectedUser(user)
                                    setBanModalOpen(true)
                                  }}
                                >
                                  <UserX className="h-4 w-4 text-red-600" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Edit User Modal */}
                  <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit User</DialogTitle>
                        <DialogDescription>Update user information</DialogDescription>
                      </DialogHeader>
                      {selectedUser && (
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-name">Name</Label>
                            <Input id="edit-name" defaultValue={selectedUser.name} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-phone">Phone Number</Label>
                            <Input id="edit-phone" defaultValue={selectedUser.phone} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-room">Room Number</Label>
                            <Input id="edit-room" defaultValue={selectedUser.room} />
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setEditModalOpen(false)}>
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            // Here you would update the user data
                            console.log("Updating user:", selectedUser)
                            setEditModalOpen(false)
                          }}
                        >
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* Ban User Modal */}
                  <Dialog open={banModalOpen} onOpenChange={setBanModalOpen}>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Ban User</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to ban this user? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      {selectedUser && (
                        <div className="py-4">
                          <div className="rounded-lg bg-red-50 p-4 text-sm">
                            <p>
                              <strong>Name:</strong> {selectedUser.name}
                            </p>
                            <p>
                              <strong>Phone:</strong> {selectedUser.phone}
                            </p>
                            <p>
                              <strong>Room:</strong> {selectedUser.room}
                            </p>
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setBanModalOpen(false)}>
                          Cancel
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => {
                            // Here you would ban the user
                            console.log("Banning user:", selectedUser)
                            setBanModalOpen(false)
                          }}
                        >
                          Ban User
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Help Requests Tab */}
            <TabsContent value="help" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Help Requests</CardTitle>
                  <CardDescription>Manage support requests from users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Search help requests..."
                        className="pl-8"
                        value={helpSearchTerm}
                        onChange={(e) => setHelpSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredHelpRequests.map((request) => (
                          <tr key={request.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {request.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.room}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {request.status === "pending" ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Resolved
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setSelectedHelpRequest(request)
                                  setHelpRequestModalOpen(true)
                                }}
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Help Request Modal */}
                  <Dialog open={helpRequestModalOpen} onOpenChange={setHelpRequestModalOpen}>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Help Request</DialogTitle>
                        <DialogDescription>
                          From {selectedHelpRequest?.name} on {selectedHelpRequest?.date}
                        </DialogDescription>
                      </DialogHeader>
                      {selectedHelpRequest && (
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <div>
                                <p className="text-sm font-medium">Contact Information</p>
                                <p className="text-sm text-gray-500">
                                  {selectedHelpRequest.name} • {selectedHelpRequest.phone}
                                </p>
                                <p className="text-sm text-gray-500">Room: {selectedHelpRequest.room}</p>
                              </div>
                              <Button variant="outline" size="sm" className="h-8">
                                <Phone className="h-3 w-3 mr-1" /> Call
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium">Message</p>
                            <div className="rounded-md bg-gray-50 p-3 text-sm">{selectedHelpRequest.message}</div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="response">Response</Label>
                            <Textarea
                              id="response"
                              placeholder="Type your response to the user..."
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setHelpRequestModalOpen(false)}>
                          Cancel
                        </Button>
                        {selectedHelpRequest?.status === "pending" ? (
                          <Button
                            onClick={() => {
                              // Here you would mark the request as resolved
                              console.log("Resolving help request:", selectedHelpRequest)
                              setHelpRequestModalOpen(false)
                            }}
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Resolved
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            onClick={() => {
                              // Here you would mark the request as pending again
                              console.log("Reopening help request:", selectedHelpRequest)
                              setHelpRequestModalOpen(false)
                            }}
                          >
                            <X className="mr-2 h-4 w-4" />
                            Reopen Request
                          </Button>
                        )}
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>WhatsApp Group Settings</CardTitle>
                  <CardDescription>Update the WhatsApp group link for participants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">WhatsApp Group Link</label>
                    <Input
                      value={whatsappLink}
                      onChange={(e) => setWhatsappLink(e.target.value)}
                      placeholder="https://chat.whatsapp.com/..."
                    />
                    <p className="text-xs text-gray-500">
                      This link will be shared with participants after registration
                    </p>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admin Contact Information</CardTitle>
                  <CardDescription>Update the contact information displayed on help pages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Admin Phone Number</label>
                    <Input
                      value={adminContact}
                      onChange={(e) => setAdminContact(e.target.value)}
                      placeholder="e.g., 08012345678"
                    />
                    <p className="text-xs text-gray-500">
                      This number will be displayed on help pages for users to contact
                    </p>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Giveaway Status</CardTitle>
                  <CardDescription>Control the status of the giveaway campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Giveaway Active</h4>
                      <p className="text-sm text-gray-500">
                        When disabled, new QR scans will see the "Giveaway Closed" page
                      </p>
                    </div>
                    <Button variant="destructive">
                      <Ban className="mr-2 h-4 w-4" />
                      End Giveaway
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
