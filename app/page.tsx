import DesignOption1 from "../design-option-1"
import DesignOption2 from "../design-option-2"
import DesignOption3 from "../design-option-3"
import Component from "../restaurant-newsletter"

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Tim's List - Design Options</h1>
        <p className="text-gray-600">Three different approaches for scalable branding</p>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Option 1: Clean & Professional</h2>
          <DesignOption1 />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Option 2: Bold & Community-Focused</h2>
          <DesignOption2 />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Option 3: Editorial & Premium</h2>
          <DesignOption3 />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Restaurant Newsletter</h2>
          <Component />
        </div>
      </div>
    </div>
  )
}
