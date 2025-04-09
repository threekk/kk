"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Volume2, PhoneCall, PhoneOff } from "lucide-react"

export default function BroadcastSystem() {
  const [selectedTerminal, setSelectedTerminal] = useState<string | null>(null)

  // Mock data for demonstration
  const terminals = [
    { id: "term1", number: "001", name: "采煤工作面1", location: "采煤工作面", registered: true, calling: false },
    { id: "term2", number: "002", name: "采煤工作面2", location: "采煤工作面", registered: true, calling: false },
    { id: "term3", number: "003", name: "掘进工作面1", location: "掘进工作面", registered: true, calling: false },
    { id: "term4", number: "004", name: "掘进工作面2", location: "掘进工作面", registered: false, calling: false },
    { id: "term5", number: "005", name: "运输巷道1", location: "运输巷道", registered: true, calling: false },
    { id: "term6", number: "006", name: "运输巷道2", location: "运输巷道", registered: true, calling: false },
    { id: "term7", number: "007", name: "回风巷道1", location: "回风巷道", registered: true, calling: false },
    { id: "term8", number: "008", name: "机电硐室1", location: "机电硐室", registered: true, calling: false },
  ]

  const areas = ["全部", "采煤工作面", "掘进工作面"]

  const handleSelectTerminal = (terminalId: string) => {
    setSelectedTerminal(terminalId)
  }

  return (
    <div className="grid gap-4">
      {selectedTerminal && (
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">广播控制</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">终端信息</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">终端号码：</span>
                    <span>{terminals.find((t) => t.id === selectedTerminal)?.number}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">终端名称：</span>
                    <span>{terminals.find((t) => t.id === selectedTerminal)?.name}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">位置：</span>
                    <span>{terminals.find((t) => t.id === selectedTerminal)?.location}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">注册状态：</span>
                    <span
                      className={terminals.find((t) => t.id === selectedTerminal)?.registered ? "" : "text-red-500"}
                    >
                      {terminals.find((t) => t.id === selectedTerminal)?.registered ? "已注册" : "未注册"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">广播操作</h4>
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <Volume2 className="h-4 w-4 mr-2" />
                    开始广播
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <PhoneOff className="h-4 w-4 mr-2" />
                    结束广播
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 rounded-md p-4 flex items-center justify-center">
                <div className="text-center">
                  <Volume2 className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-600">广播状态: 空闲</p>
                  <p className="text-slate-500 text-xs mt-1">选择"开始广播"按钮开始语音广播</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
              {terminals.map((terminal) => (
                <div
                  key={terminal.id}
                  className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${
                    selectedTerminal === terminal.id ? "bg-blue-50 border border-blue-200" : "bg-white border"
                  }`}
                  onClick={() => handleSelectTerminal(terminal.id)}
                >
                  <div>
                    <div className="font-medium">{terminal.name}</div>
                    <div className="text-xs text-muted-foreground">终端号: {terminal.number}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={terminal.registered ? "outline" : "destructive"}>
                      {terminal.registered ? "已注册" : "未注册"}
                    </Badge>
                    <Button variant="ghost" size="icon" disabled={!terminal.registered} className="h-8 w-8">
                      <PhoneCall className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
