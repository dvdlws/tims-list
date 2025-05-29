import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DesignOption3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-xl border border-gray-100">
        <CardHeader className="text-center space-y-6 bg-gradient-to-r from-white to-green-50/30">
          {/* Minimal Logo */}
          <div className="space-y-3">
            <div className="inline-block">
              <h1 className="text-4xl font-light text-gray-800">Tim's</h1>
              <h2 className="text-2xl font-bold text-[#1A603D] -mt-2">LIST</h2>
            </div>
          </div>

          <div className="space-y-3">
            <CardTitle className="text-2xl text-gray-700 font-light">Restaurant Recommendations</CardTitle>
            <CardDescription className="text-gray-600 text-base max-w-sm mx-auto">
              Weekly curated dining experiences from someone who's tried them all.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 bg-white">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <Input
                type="email"
                placeholder="tim@example.com"
                className="w-full h-12 border-gray-200 focus:border-[#1A603D] focus:ring-[#1A603D]"
              />
            </div>
            <Button className="w-full h-12 bg-[#1A603D] hover:bg-[#0f4a2a] text-white text-base">
              Subscribe to Tim's List
            </Button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              Join <span className="font-semibold text-[#1A603D]">2,847</span> food lovers
            </p>
            <p className="text-xs text-gray-400">One email per week • Always free • Easy unsubscribe</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
