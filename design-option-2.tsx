import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Users } from "lucide-react"

export default function DesignOption2() {
  return (
    <div className="min-h-screen bg-[#1A603D] flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center space-y-4 bg-white">
          {/* Logo with Icon */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-[#1A603D] rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Tim's List</h1>
          </div>

          <CardTitle className="text-xl text-gray-700">Your Local Food Guide</CardTitle>
          <CardDescription className="text-gray-600">
            Discover hidden gems and must-try restaurants handpicked by Tim, your trusted local food expert.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 bg-white">
          <div className="space-y-3">
            <Input type="email" placeholder="your@email.com" className="w-full h-11 border-gray-200" />
            <Button className="w-full h-11 bg-[#1A603D] hover:bg-[#0f4a2a] text-white">Join Tim's List</Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-[#1A603D]" />
              <span>Local restaurant discoveries</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Star className="w-4 h-4 text-[#1A603D]" />
              <span>Expert reviews and ratings</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Users className="w-4 h-4 text-[#1A603D]" />
              <span>Exclusive dining events</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center">Free newsletter • No spam • Unsubscribe anytime</p>
        </CardContent>
      </Card>
    </div>
  )
}
