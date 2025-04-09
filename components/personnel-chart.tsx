"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PersonnelChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock data for demonstration
  const hourlyData = [65, 72, 78, 85, 87, 86, 84, 80, 75, 70, 68, 65]
  const dailyData = [62, 68, 75, 82, 87, 85, 80, 78]
  const weeklyData = [60, 65, 70, 75, 80, 85, 87, 85, 82, 78, 75, 70]

  // Calculate max value for chart scaling
  const maxHourly = Math.max(...hourlyData)
  const maxDaily = Math.max(...dailyData)
  const maxWeekly = Math.max(...weeklyData)

  // Calculate chart height
  const chartHeight = 150

  if (!mounted) {
    return null
  }

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h3 className="text-base font-medium mb-3">人员变化趋势</h3>
        <Tabs defaultValue="hourly">
          <TabsList className="grid w-full grid-cols-3 mb-3">
            <TabsTrigger value="hourly">小时</TabsTrigger>
            <TabsTrigger value="daily">天</TabsTrigger>
            <TabsTrigger value="weekly">周</TabsTrigger>
          </TabsList>
          <TabsContent value="hourly">
            <div className="h-[200px]">
              <div className="flex items-end h-[150px] gap-1">
                {hourlyData.map((value, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-blue-600 rounded-t"
                      style={{ height: `${(value / maxHourly) * chartHeight}px` }}
                    ></div>
                    <span className="text-[10px] mt-1">{index + 8}:00</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">08:00</span>
                <span className="text-xs text-muted-foreground">20:00</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="daily">
            <div className="h-[200px]">
              <div className="flex items-end h-[150px] gap-1">
                {dailyData.map((value, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-green-600 rounded-t"
                      style={{ height: `${(value / maxDaily) * chartHeight}px` }}
                    ></div>
                    <span className="text-[10px] mt-1">{index + 1}日</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">1日</span>
                <span className="text-xs text-muted-foreground">8日</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="weekly">
            <div className="h-[200px]">
              <div className="flex items-end h-[150px] gap-1">
                {weeklyData.map((value, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-purple-600 rounded-t"
                      style={{ height: `${(value / maxWeekly) * chartHeight}px` }}
                    ></div>
                    <span className="text-[10px] mt-1">第{index + 1}周</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">第1周</span>
                <span className="text-xs text-muted-foreground">第12周</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
