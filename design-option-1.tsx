import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DesignOption1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center space-y-4 bg-white">
          {/* Clean Typography Logo */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#1A603D]">Tim's List</h1>
            <div className="w-12 h-0.5 bg-[#1A603D] mx-auto"></div>
          </div>

          <CardTitle className="text-xl text-gray-700">Curated Restaurant Discoveries</CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            Join thousands who trust Tim's expert recommendations for exceptional dining experiences in your city.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 bg-white">
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-12 border-gray-200 focus:border-[#1A603D]"
            />
            <Button className="w-full h-12 bg-[#1A603D] hover:bg-[#0f4a2a] text-white font-medium">
              Get Weekly Recommendations
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="space-y-1">
              <div className="text-[#1A603D] font-semibold">5K+</div>
              <div className="text-gray-500">Subscribers</div>
            </div>
            <div className="space-y-1">
              <div className="text-[#1A603D] font-semibold">Weekly</div>
              <div className="text-gray-500">Updates</div>
            </div>
            <div className="space-y-1">
              <div className="text-[#1A603D] font-semibold">No Spam</div>
              <div className="text-gray-500">Promise</div>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center">Unsubscribe anytime. We respect your inbox.</p>
        </CardContent>
      </Card>
    </div>
  )
}
