"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, AlertTriangle, Activity } from "lucide-react"

export default function PowerSystem() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>("device1")

  // Mock data for demonstration
  const devices = [
    {
      id: "device1",
      name: "主变电所",
      location: "地面变电所",
      status: "正常",
      voltage: 10.5,
      current: 420,
      load: 65,
      temperature: 42,
    },
    {
      id: "device2",
      name: "井下变电所1",
      location: "井下-240米",
      status: "正常",
      voltage: 6.3,
      current: 280,
      load: 58,
      temperature: 38,
    },
    {
      id: "device3",
      name: "井下变电所2",
      location: "井下-360米",
      status: "正常",
      voltage: 6.3,
      current: 310,
      load: 62,
      temperature: 40,
    },
    {
      id: "device4",
      name: "采区变电所",
      location: "采煤工作面",
      status: "正常",
      voltage: 1.14,
      current: 180,
      load: 45,
      temperature: 36,
    },
  ]

  const handleSelectDevice = (deviceId: string) => {
    setSelectedDevice(deviceId)
  }

  return (
    <div className="grid gap-4">
      {selectedDevice && (
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">{devices.find((d) => d.id === selectedDevice)?.name}</h3>
            <Tabs defaultValue="parameters">
              <TabsList className="grid grid-cols-2 mb-3">
                <TabsTrigger value="parameters">运行参数</TabsTrigger>
                <TabsTrigger value="history">历史数据</TabsTrigger>
              </TabsList>
              <TabsContent value="parameters">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">基本信息</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">名称：</span>
                        <span>{devices.find((d) => d.id === selectedDevice)?.name}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">位置：</span>
                        <span>{devices.find((d) => d.id === selectedDevice)?.location}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">状态：</span>
                        <span
                          className={
                            devices.find((d) => d.id === selectedDevice)?.status === "正常"
                              ? "text-green-500"
                              : devices.find((d) => d.id === selectedDevice)?.status === "警告"
                                ? "text-yellow-500"
                                : "text-red-500"
                          }
                        >
                          {devices.find((d) => d.id === selectedDevice)?.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">运行参数</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">电压：</span>
                        <span>{devices.find((d) => d.id === selectedDevice)?.voltage}kV</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">电流：</span>
                        <span>{devices.find((d) => d.id === selectedDevice)?.current}A</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">负荷：</span>
                        <span className={devices.find((d) => d.id === selectedDevice)?.load > 80 ? "text-red-500" : ""}>
                          {devices.find((d) => d.id === selectedDevice)?.load}%
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">温度：</span>
                        <span
                          className={
                            devices.find((d) => d.id === selectedDevice)?.temperature > 50 ? "text-red-500" : ""
                          }
                        >
                          {devices.find((d) => d.id === selectedDevice)?.temperature}°C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-md p-4 flex items-center justify-center">
                    {devices.find((d) => d.id === selectedDevice)?.load > 80 ? (
                      <div className="text-center">
                        <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                        <p className="text-yellow-600">负荷较高</p>
                        <p className="text-slate-500 text-xs mt-1">请注意监控设备运行状态</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Activity className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-slate-600">设备运行正常</p>
                        <p className="text-slate-500 text-xs mt-1">实时监测电力设备运行状态</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="history">
                <div className="space-y-4">
                  <div className="bg-slate-100 rounded-md p-4 h-[150px] flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600">历史运行数据</p>
                      <p className="text-slate-500 text-xs mt-1">显示电压、电流和负荷的历史变化趋势</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-xs text-muted-foreground">平均电压</div>
                      <div className="text-lg font-bold mt-1">
                        {devices.find((d) => d.id === selectedDevice)?.voltage}kV
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-xs text-muted-foreground">平均电流</div>
                      <div className="text-lg font-bold mt-1">
                        {devices.find((d) => d.id === selectedDevice)?.current}A
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-xs text-muted-foreground">平均负荷</div>
                      <div className="text-lg font-bold mt-1">
                        {devices.find((d) => d.id === selectedDevice)?.load}%
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">电力设备列表</h3>
          <div className="grid grid-cols-2 gap-3">
            {devices.map((device) => (
              <div
                key={device.id}
                className={`p-3 rounded-md cursor-pointer border ${
                  selectedDevice === device.id ? "bg-blue-50 border-blue-200" : "bg-white"
                }`}
                onClick={() => handleSelectDevice(device.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 text-blue-600 mr-1" />
                    <h4 className="text-sm font-medium">{device.name}</h4>
                  </div>
                  <Badge
                    variant={
                      device.status === "正常" ? "outline" : device.status === "警告" ? "secondary" : "destructive"
                    }
                  >
                    {device.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{device.location}</p>
                <div className="text-xs">
                  <span className="text-muted-foreground">负荷: </span>
                  <span className={device.load > 80 ? "text-red-500" : ""}>{device.load}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
