"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wind, Video, AlertTriangle, Activity } from "lucide-react"

export default function VentilationSystem() {
  const [selectedFan, setSelectedFan] = useState<string | null>("fan1")

  // Mock data for demonstration
  const fans = [
    {
      id: "fan1",
      name: "主通风机1",
      location: "主通风机房",
      status: "运行",
      airflow: 1250,
      pressure: 1850,
      speed: 980,
      hasCamera: true,
    },
    {
      id: "fan2",
      name: "主通风机2",
      location: "主通风机房",
      status: "运行",
      airflow: 1180,
      pressure: 1780,
      speed: 950,
      hasCamera: true,
    },
    {
      id: "fan3",
      name: "局部通风机1",
      location: "采煤工作面",
      status: "运行",
      airflow: 450,
      pressure: 650,
      speed: 580,
      hasCamera: false,
    },
    {
      id: "fan4",
      name: "局部通风机2",
      location: "掘进工作面",
      status: "停止",
      airflow: 0,
      pressure: 0,
      speed: 0,
      hasCamera: false,
    },
  ]

  const handleSelectFan = (fanId: string) => {
    setSelectedFan(fanId)
  }

  return (
    <div className="grid gap-4">
      {selectedFan && (
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">{fans.find((f) => f.id === selectedFan)?.name}</h3>
            <Tabs defaultValue="parameters">
              <TabsList className="grid grid-cols-2 mb-3">
                <TabsTrigger value="parameters">运行参数</TabsTrigger>
                {fans.find((f) => f.id === selectedFan)?.hasCamera && <TabsTrigger value="video">视频监控</TabsTrigger>}
              </TabsList>
              <TabsContent value="parameters">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">基本信息</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">名称：</span>
                        <span>{fans.find((f) => f.id === selectedFan)?.name}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">位置：</span>
                        <span>{fans.find((f) => f.id === selectedFan)?.location}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">状态：</span>
                        <span
                          className={
                            fans.find((f) => f.id === selectedFan)?.status === "停止"
                              ? "text-red-500"
                              : "text-green-500"
                          }
                        >
                          {fans.find((f) => f.id === selectedFan)?.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">运行参数</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">风量：</span>
                        <span>
                          {fans.find((f) => f.id === selectedFan)?.status === "运行"
                            ? `${fans.find((f) => f.id === selectedFan)?.airflow}m³/min`
                            : "-"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">风压：</span>
                        <span>
                          {fans.find((f) => f.id === selectedFan)?.status === "运行"
                            ? `${fans.find((f) => f.id === selectedFan)?.pressure}Pa`
                            : "-"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">转速：</span>
                        <span>
                          {fans.find((f) => f.id === selectedFan)?.status === "运行"
                            ? `${fans.find((f) => f.id === selectedFan)?.speed}rpm`
                            : "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-md p-4 flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600">风机运行趋势图</p>
                      <p className="text-slate-500 text-xs mt-1">显示风量、风压和转速的历史变化趋势</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="video">
                <div className="aspect-video bg-slate-800 rounded-md flex items-center justify-center">
                  {fans.find((f) => f.id === selectedFan)?.status === "运行" ? (
                    <div className="text-center">
                      <Video className="h-12 w-12 text-slate-500 mx-auto mb-2" />
                      <p className="text-slate-400">正在加载视频流...</p>
                      <p className="text-slate-500 text-sm mt-2">
                        {fans.find((f) => f.id === selectedFan)?.name} - 实时监控
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-2" />
                      <p className="text-red-400">风机已停止运行</p>
                      <p className="text-slate-500 text-sm mt-2">
                        {fans.find((f) => f.id === selectedFan)?.name} - 无法连接
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">风机列表</h3>
          <div className="grid grid-cols-2 gap-3">
            {fans.map((fan) => (
              <div
                key={fan.id}
                className={`p-3 rounded-md cursor-pointer border ${
                  selectedFan === fan.id ? "bg-blue-50 border-blue-200" : "bg-white"
                }`}
                onClick={() => handleSelectFan(fan.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Wind className="h-4 w-4 text-blue-600 mr-1" />
                    <h4 className="text-sm font-medium">{fan.name}</h4>
                  </div>
                  <Badge variant={fan.status === "运行" ? "outline" : "secondary"}>{fan.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{fan.location}</p>
                <div className="text-xs">
                  <span className="text-muted-foreground">风量: </span>
                  <span>{fan.status === "运行" ? `${fan.airflow}m³/min` : "-"}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
