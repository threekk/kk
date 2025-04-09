"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Video, AlertCircle } from "lucide-react"

export default function VideoMonitoring() {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null)

  // Mock data for demonstration
  const cameras = [
    { id: "cam1", name: "采煤工作面1", location: "采煤工作面", status: "在线" },
    { id: "cam2", name: "采煤工作面2", location: "采煤工作面", status: "在线" },
    { id: "cam3", name: "掘进工作面1", location: "掘进工作面", status: "在线" },
    { id: "cam4", name: "掘进工作面2", location: "掘进工作面", status: "离线" },
    { id: "cam5", name: "运输巷道1", location: "运输巷道", status: "在线" },
    { id: "cam6", name: "运输巷道2", location: "运输巷道", status: "在线" },
    { id: "cam7", name: "回风巷道1", location: "回风巷道", status: "在线" },
    { id: "cam8", name: "机电硐室1", location: "机电硐室", status: "在线" },
    { id: "cam9", name: "水泵房1", location: "水泵房", status: "在线" },
    { id: "cam10", name: "变电所1", location: "变电所", status: "在线" },
    { id: "cam11", name: "主通风机房1", location: "主通风机房", status: "离线" },
    { id: "cam12", name: "主通风机房2", location: "主通风机房", status: "在线" },
  ]

  const areas = ["全部", "采煤工作面", "掘进工作面"]

  const handleSelectCamera = (cameraId: string) => {
    setSelectedCamera(cameraId)
  }

  return (
    <div className="grid gap-4">
      {selectedCamera ? (
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="aspect-video bg-slate-800 rounded-md flex items-center justify-center mb-4">
              {cameras.find((c) => c.id === selectedCamera)?.status === "在线" ? (
                <div className="text-center">
                  <Video className="h-12 w-12 text-slate-500 mx-auto mb-2" />
                  <p className="text-slate-400">正在加载视频流...</p>
                  <p className="text-slate-500 text-sm mt-2">
                    {cameras.find((c) => c.id === selectedCamera)?.name} - 实时监控
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-2" />
                  <p className="text-red-400">摄像头离线</p>
                  <p className="text-slate-500 text-sm mt-2">
                    {cameras.find((c) => c.id === selectedCamera)?.name} - 无法连接
                  </p>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium mb-2">摄像头信息</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">名称：</span>
                  <span>{cameras.find((c) => c.id === selectedCamera)?.name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">位置：</span>
                  <span>{cameras.find((c) => c.id === selectedCamera)?.location}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">状态：</span>
                  <span
                    className={cameras.find((c) => c.id === selectedCamera)?.status === "离线" ? "text-red-500" : ""}
                  >
                    {cameras.find((c) => c.id === selectedCamera)?.status}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <Card className="shadow-sm">
        <CardContent className="p-4">
          <Tabs defaultValue="全部">
            <TabsList className="grid grid-cols-3 mb-3">
              {areas.map((area) => (
                <TabsTrigger key={area} value={area}>
                  {area}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="space-y-2">
              {cameras.map((camera) => (
                <div
                  key={camera.id}
                  className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${
                    selectedCamera === camera.id ? "bg-blue-50 border border-blue-200" : "bg-white border"
                  }`}
                  onClick={() => handleSelectCamera(camera.id)}
                >
                  <div>
                    <div className="font-medium">{camera.name}</div>
                    <div className="text-xs text-muted-foreground">{camera.location}</div>
                  </div>
                  <Badge variant={camera.status === "在线" ? "outline" : "destructive"}>{camera.status}</Badge>
                </div>
              ))}
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
