import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck, AlertTriangle, UserCog } from "lucide-react"

export default function PersonnelStats() {
  // Mock data for demonstration
  const stats = [
    {
      title: "井下总人数",
      value: 87,
      icon: <Users className="h-5 w-5 text-blue-600" />,
      description: "当前井下所有人员",
    },
    {
      title: "领导人数",
      value: 5,
      icon: <UserCheck className="h-5 w-5 text-green-600" />,
      description: "当前井下领导人员",
    },
    {
      title: "特种作业人数",
      value: 23,
      icon: <UserCog className="h-5 w-5 text-orange-600" />,
      description: "当前井下特种作业人员",
    },
    {
      title: "超员人数",
      value: 0,
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      description: "超出安全限制人数",
      alert: true,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">{stat.title}</h3>
              {stat.icon}
            </div>
            <div className={`text-2xl font-bold ${stat.alert && stat.value > 0 ? "text-red-600" : ""}`}>
              {stat.value}
            </div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
