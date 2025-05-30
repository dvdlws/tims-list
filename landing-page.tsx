import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-full shadow-xl border border-gray-100">
        <CardHeader className="text-center space-y-6 bg-gradient-to-r from-white to-green-50/30">
          <div className="space-y-3">
            <div className="inline-block">
              <h1 className="text-4xl font-light text-gray-800">Tim's</h1>
              <h2 className="text-2xl font-bold text-[#1A603D] -mt-2">LIST</h2>
            </div>
          </div>

          <div className="space-y-3">
            <CardDescription className="text-gray-600 text-base max-w-sm mx-auto">
              Discover hidden gems and must-try restaurants with the best deals in this weekly newsletter
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 bg-white">
          <div className="max-w-md mx-auto space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <Input
                type="email"
                placeholder="your@email.com"
                className="w-full h-12 border-gray-200 focus:border-[#1A603D] focus:ring-[#1A603D]"
              />
            </div>
            <Button className="w-full h-12 bg-[#1A603D] hover:bg-[#0f4a2a] text-white text-base">
              Join Tim's List For Free
            </Button>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-2 h-2 bg-[#1A603D] rounded-full"></div>
                <span>Weekly restaurant deals and special offers</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-2 h-2 bg-[#1A603D] rounded-full"></div>
                <span>Curated deals at local restaurants</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-2 h-2 bg-[#1A603D] rounded-full"></div>
                <span>Save money while discovering new favorites</span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              Join <span className="font-semibold text-[#1A603D]">2,847</span> local food lovers
            </p>
            <p className="text-xs text-gray-400">Weekly discoveries • Always local • Never spam</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}