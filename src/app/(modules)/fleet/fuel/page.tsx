"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Printer, Share2 } from "lucide-react"
import { useEffect, useRef } from "react"

export default function FuelCostDashboard() {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Fuel cost</h1>
        <p className="text-gray-500 text-sm mb-4">
          The bar graphs depict monthly fuel costs, with each bar representing the cost for a specific month. The
          varying heights of the bars highlight fluctuations and trends, making it easy to compare high and low-cost
          months over the observed period.
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" className="bg-gray-900 text-white hover:bg-gray-800">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" className="bg-gray-900 text-white hover:bg-gray-800">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" className="bg-gray-900 text-white hover:bg-gray-800">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MonthCard month="January" />
        <MonthCard month="February" />
        <MonthCard month="March" />
        <MonthCard month="April" />
        <MonthCard month="May" />
        <MonthCard month="June" />
        <MonthCard month="July" />
        <MonthCard month="August" />
      </div>
    </div>
  )
}

function MonthCard({ month }: { month: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height

    // Draw bars
    const barWidth = width / 5
    const spacing = (width - barWidth * 4) / 5

    // Generate random heights for the bars
    const getRandomHeight = () => Math.random() * 0.7 + 0.3 // Between 0.3 and 1.0
    const heights = [getRandomHeight(), getRandomHeight(), getRandomHeight(), getRandomHeight()]

    // Draw each bar
    for (let i = 0; i < 4; i++) {
      const x = spacing + i * (barWidth + spacing)
      const barHeight = heights[i] * height * 0.8
      const y = height - barHeight

      // Create gradient
      const gradient = ctx.createLinearGradient(x, y, x, height)
      gradient.addColorStop(0, "rgba(79, 70, 229, 0.9)") // Indigo color
      gradient.addColorStop(1, "rgba(79, 70, 229, 0.1)")

      // Draw bar with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, barWidth, barHeight)
    }

    // Draw y-axis labels
    ctx.fillStyle = "#6b7280"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "right"

    const labels = ["$0", "$25", "$50", "$75", "$100"]
    const labelSpacing = height / (labels.length - 1)

    for (let i = 0; i < labels.length; i++) {
      const y = height - i * labelSpacing
      ctx.fillText(labels[i], spacing - 2, y + 3)
    }
  }, [month])

  return (
    <Card className="border border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500">Fuel cost</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-4">{month}</h3>
        <div className="h-40 w-full relative">
          <canvas ref={canvasRef} width={200} height={160} className="w-full h-full"></canvas>
        </div>
        <p className="text-xs text-gray-500 mt-2">Current margin: {month} Spendings</p>
      </CardContent>
    </Card>
  )
}
