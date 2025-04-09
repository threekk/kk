import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Video, Volume2, Wind, Droplet, Zap, AlertTriangle } from "lucide-react"

export default function DashboardCards() {
  // Mock data for demonstration
  const securityData = {
    batteryAlerts: 2,
    batteryTotal: 24,
    no2Alerts: 0,
    no2Total: 12,
    windSpeedAlerts: 1,
    windSpeedTotal: 8,
    negPressureAlerts: 0,
    negPressureTotal: 6,
    oxygenAlerts: 0,
    oxygenTotal: 10,
    coAlerts: 3,
    coTotal: 15,
    mainFanAlerts: 0,
    mainFanTotal: 4,
  }

  const personnelData = {
    leaders: 5,
    total: 87,
    specialWorkers: 23,
    overCapacity: 0,
  }

  const cards = [
    {
      title: "安全监控",
      icon: <Shield className="h-6 w-6" />,
      href: "/dashboard",
      alerts:
        securityData.batteryAlerts +
        securityData.no2Alerts +
        securityData.windSpeedAlerts +
        securityData.negPressureAlerts +
        securityData.oxygenAlerts +
        securityData.coAlerts +
        securityData.mainFanAlerts,
      content: (
        <div className="grid grid-cols-2 gap-3">
          <div className="flex justify-between">
            <span>电池电量:</span>
            <span className={securityData.batteryAlerts > 0 ? "text-red-500 font-bold" : ""}>
              {securityData.batteryAlerts}/{securityData.batteryTotal}
            </span>
          </div>
          <div className="flex justify-between">
            <span>二氧化氮:</span>
            <span className={securityData.no2Alerts > 0 ? "text-red-500 font-bold" : ""}>
              {securityData.no2Alerts}/{securityData.no2Total}
            </span>
          </div>
          <div className="flex justify-between">
            <span>风速:</span>
            <span className={securityData.windSpeedAlerts > 0 ? "text-red-500 font-bold" : ""}>
              {securityData.windSpeedAlerts}/{securityData.windSpeedTotal}
            </span>
          </div>
          <div className="flex justify-between">
            <span>负压:</span>
            <span className={securityData.negPressureAlerts > 0 ? "text-red-500 font-bold" : ""}>
              {securityData.negPressureAlerts}/{securityData.negPressureTotal}
            </span>
          </div>
          <div className="flex justify-between">
            <span>氧气:</span>
            <span className={securityData.oxygenAlerts > 0 ? "text-red-500 font-bold" : ""}>
              {securityData.oxygenAlerts}/{securityData.oxygenTotal}
            </span>
          </div>
          <div className="flex justify-between">
            <span>一氧化碳:</span>
            <span className={securityData.coAlerts > 0 ? "text-red-500 font-bold" : ""}>
              {securityData.coAlerts}/{securityData.coTotal}
            </span>
          </div>
          <div className="flex justify-between">
            <span>主扇开停:</span>
            <span className={securityData.mainFanAlerts > 0 ? "text-red-500 font-bold" : ""}>
              {securityData.mainFanAlerts}/{securityData.mainFanTotal}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "人员定位",
      icon: <Users className="h-6 w-6" />,
      href: "/dashboard/personnel",
      alerts: personnelData.overCapacity,
      content: (
        <div className="grid grid-cols-2 gap-3">
          <div className="flex justify-between">
            <span>领导人数:</span>
            <span>{personnelData.leaders}</span>
          </div>
          <div className="flex justify-between">
            <span>井下总人数:</span>
            <span>{personnelData.total}</span>
          </div>
          <div className="flex justify-between">
            <span>特种作业人数:</span>
            <span>{personnelData.specialWorkers}</span>
          </div>
          <div className="flex justify-between">
            <span>超员人数:</span>
            <span className={personnelData.overCapacity > 0 ? "text-red-500 font-bold" : ""}>
              {personnelData.overCapacity}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "视频监控",
      icon: <Video className="h-6 w-6" />,
      href: "/dashboard/video",
      alerts: 1,
      content: (
        <div className="text-sm">
          <p>在线摄像头: 18/20</p>
          <p className="text-red-500 font-bold">离线摄像头: 2</p>
          <p className="mt-2">点击查看实时监控画面</p>
        </div>
      ),
    },
    {
      title: "语音广播",
      icon: <Volume2 className="h-6 w-6" />,
      href: "/dashboard/broadcast",
      alerts: 2,
      content: (
        <div className="text-sm">
          <p>已注册终端: 12/14</p>
          <p className="text-red-500 font-bold">未注册终端: 2</p>
          <p>当前呼叫状态: 无</p>
        </div>
      ),
    },
    {
      title: "通风系统",
      icon: <Wind className="h-6 w-6" />,
      href: "/dashboard/ventilation",
      alerts: 0,
      content: (
        <div className="text-sm">
          <p>运行风机: 4/4</p>
          <p>平均风量: 1200m³/min</p>
          <p>平均风压: 1800Pa</p>
        </div>
      ),
    },
    {
      title: "排水系统",
      icon: <Droplet className="h-6 w-6" />,
      href: "/dashboard/drainage",
      alerts: 1,
      content: (
        <div className="text-sm">
          <p>运行水泵: 3/4</p>
          <p className="text-red-500 font-bold">异常设备: 1</p>
          <p>当前水位: 正常</p>
        </div>
      ),
    },
    {
      title: "电力系统",
      icon: <Zap className="h-6 w-6" />,
      href: "/dashboard/power",
      alerts: 0,
      content: (
        <div className="text-sm">
          <p>变电设备: 6/6 正常</p>
          <p>当前负荷: 65%</p>
          <p>电压状态: 稳定</p>
        </div>
      ),
    },
  ]

  return (
    <div className="grid gap-4">
      {cards.map((card) => (
        <Link href={card.href} key={card.title} className="block">
          <Card className="transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="mr-2 text-blue-600">{card.icon}</div>
                  <h2 className="text-lg font-medium">{card.title}</h2>
                </div>
                {card.alerts > 0 && (
                  <div className="flex items-center text-red-500">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    <span className="text-sm font-bold">{card.alerts}</span>
                  </div>
                )}
              </div>
              {card.content}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
