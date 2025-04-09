"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageSquare, User, MapPin, Briefcase, Calendar } from "lucide-react"

interface UserDetailProps {
  userId: string
}

export default function UserDetail({ userId }: UserDetailProps) {
  // Mock user data
  const user = {
    id: userId,
    name: "张三",
    position: "安全主管",
    department: "安全生产部",
    phone: "13800138001",
    email: "zhangsan@example.com",
    location: "安全生产部办公室",
    joinDate: "2018-05-15",
    avatar: "ZS",
  }

  return (
    <div className="grid gap-4">
      <Card className="shadow-sm">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
            {user.avatar}
          </div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500 mb-4">
            {user.position} | {user.department}
          </p>

          <div className="grid grid-cols-3 gap-3 w-full">
            <Button variant="outline" className="flex flex-col items-center h-auto py-2">
              <Phone className="h-5 w-5 mb-1" />
              <span className="text-xs">电话</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center h-auto py-2">
              <MessageSquare className="h-5 w-5 mb-1" />
              <span className="text-xs">消息</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center h-auto py-2">
              <Mail className="h-5 w-5 mb-1" />
              <span className="text-xs">邮件</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">联系信息</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">手机</div>
                <div>{user.phone}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">邮箱</div>
                <div>{user.email}</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">工作地点</div>
                <div>{user.location}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">工作信息</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">职位</div>
                <div>{user.position}</div>
              </div>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">部门</div>
                <div>{user.department}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">入职日期</div>
                <div>{user.joinDate}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
