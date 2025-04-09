"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplet, AlertTriangle, Activity } from "lucide-react"

export default function DrainageSystem() {
  const [selectedPump, setSelectedPump] = useState<string | null>("pump1")

  // Mock data for demonstration
  const pumps = [
    {
      id: "pump1",
      name: "主排水泵1",
      location: "水泵房",
      status: "运行",
      flow: 120,
      pressure: 2.5,
      power: 75,
      waterLevel: "正常",
    },
    {
      id: "pump2",
      name: "主排水泵2",
      location: "水泵房",
      status: "运行",
      flow: 115,
      pressure: 2.4,
      power: 72,
      waterLevel: "正常",
    },
    {
      id: "pump3",
      name: "辅助排水泵1",
      location: "采煤工作面",
      status: "运行",
      flow: 45,
      pressure: 1.2,
      power: 30,
      waterLevel: "正常",
    },
    {
      id: "pump4",
      name: "辅助排水泵2",
      location: "掘进工作面",
      status: "故障",
      flow: 0,
      pressure: 0,
      power: 0,
      waterLevel: "偏高",
    },
  ]

  const handleSelectPump = (pumpId: string) => {
    setSelectedPump(pumpId)
  }

  return (
    <div className="grid gap-4">
      {selectedPump && (
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">{pumps.find((p) => p.id === selectedPump)?.name}</h3>
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
                        <span>{pumps.find((p) => p.id === selectedPump)?.name}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">位置：</span>
                        <span>{pumps.find((p) => p.id === selectedPump)?.location}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">状态：</span>
                        <span
                          className={
                            pumps.find((p) => p.id === selectedPump)?.status === "运行"
                              ? "text-green-500"
                              : pumps.find((p) => p.id === selectedPump)?.status === "停止"
                                ? "text-yellow-500"
                                : "text-red-500"
                          }
                        >
                          {pumps.find((p) => p.id === selectedPump)?.status}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">水位：</span>
                        <span
                          className={
                            pumps.find((p) => p.id === selectedPump)?.waterLevel === "偏高" ? "text-red-500" : ""
                          }
                        >
                          {pumps.find((p) => p.id === selectedPump)?.waterLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">运行参数</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">流量：</span>
                        <span>
                          {pumps.find((p) => p.id === selectedPump)?.status === "运行"
                            ? `${pumps.find((p) => p.id === selectedPump)?.flow}m³/h`
                            : "-"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">压力：</span>
                        <span>
                          {pumps.find((p) => p.id === selectedPump)?.status === "运行"
                            ? `${pumps.find((p) => p.id === selectedPump)?.pressure}MPa`
                            : "-"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">功率：</span>
                        <span>
                          {pumps.find((p) => p.id === selectedPump)?.status === "运行"
                            ? `${pumps.find((p) => p.id === selectedPump)?.power}kW`
                            : "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-md p-4 flex items-center justify-center">
                    {pumps.find((p) => p.id === selectedPump)?.status === "故障" ? (
                      <div className="text-center">
                        <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                        <p className="text-red-600">设备故障</p>
                        <p className="text-slate-500 text-xs mt-1">请检查设备或联系维修人员</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Activity className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-slate-600">设备运行正常</p>
                        <p className="text-slate-500 text-xs mt-1">实时监测水泵运行状态</p>
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
                      <p className="text-slate-500 text-xs mt-1">显示流量、压力和功率的历史变化趋势</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-xs text-muted-foreground">平均流量</div>
                      <div className="text-lg font-bold mt-1">
                        {pumps.find((p) => p.id === selectedPump)?.status !== "故障"
                          ? `${pumps.find((p) => p.id === selectedPump)?.flow}m³/h`
                          : "-"}
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-xs text-muted-foreground">平均压力</div>
                      <div className="text-lg font-bold mt-1">
                        {pumps.find((p) => p.id === selectedPump)?.status !== "故障"
                          ? `${pumps.find((p) => p.id === selectedPump)?.pressure}MPa`
                          : "-"}
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-xs text-muted-foreground">平均功率</div>
                      <div className="text-lg font-bold mt-1">
                        {pumps.find((p) => p.id === selectedPump)?.status !== "故障"
                          ? `${pumps.find((p) => p.id === selectedPump)?.power}kW`
                          : "-"}
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
          <h3 className="font-medium mb-3">水泵列表</h3>
          <div className="grid grid-cols-2 gap-3">
            {pumps.map((pump) => (
              <div
                key={pump.id}
                className={`p-3 rounded-md cursor-pointer border ${
                  selectedPump === pump.id ? "bg-blue-50 border-blue-200" : "bg-white"
                }`}
                onClick={() => handleSelectPump(pump.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Droplet className="h-4 w-4 text-blue-600 mr-1" />
                    <h4 className="text-sm font-medium">{pump.name}</h4>
                  </div>
                  <Badge
                    variant={pump.status === "运行" ? "outline" : pump.status === "停止" ? "secondary" : "destructive"}
                  >
                    {pump.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{pump.location}</p>
                <div className="text-xs">
                  <span className="text-muted-foreground">水位: </span>
                  <span className={pump.waterLevel === "偏高" ? "text-red-500" : ""}>{pump.waterLevel}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
