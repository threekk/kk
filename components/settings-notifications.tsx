"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, MessageSquare, AlertTriangle, Calendar } from "lucide-react"

export default function SettingsNotifications() {
  const [notifications, setNotifications] = useState({
    systemAlerts: true,
    securityAlerts: true,
    maintenanceNotices: true,
    messageNotifications: true,
    documentUpdates: false,
    meetingReminders: true,
    personnelChanges: false,
  })

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h3 className="font-medium mb-4">通知设置</h3>

        <div className="space-y-4">
          <div className="p-3 bg-white border rounded-lg">
            <h4 className="font-medium flex items-center mb-3">
              <Bell className="h-5 w-5 text-blue-600 mr-2" />
              系统通知
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="systemAlerts" className="font-normal">
                    系统预警
                  </Label>
                  <p className="text-xs text-gray-500">接收系统安全预警通知</p>
                </div>
                <Switch
                  id="systemAlerts"
                  checked={notifications.systemAlerts}
                  onCheckedChange={() => handleToggle("systemAlerts")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="securityAlerts" className="font-normal">
                    安全警报
                  </Label>
                  <p className="text-xs text-gray-500">接收安全监控警报通知</p>
                </div>
                <Switch
                  id="securityAlerts"
                  checked={notifications.securityAlerts}
                  onCheckedChange={() => handleToggle("securityAlerts")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="maintenanceNotices" className="font-normal">
                    维护通知
                  </Label>
                  <p className="text-xs text-gray-500">接收系统维护和更新通知</p>
                </div>
                <Switch
                  id="maintenanceNotices"
                  checked={notifications.maintenanceNotices}
                  onCheckedChange={() => handleToggle("maintenanceNotices")}
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border rounded-lg">
            <h4 className="font-medium flex items-center mb-3">
              <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
              消息提醒
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="messageNotifications" className="font-normal">
                    消息通知
                  </Label>
                  <p className="text-xs text-gray-500">接收新消息和群聊通知</p>
                </div>
                <Switch
                  id="messageNotifications"
                  checked={notifications.messageNotifications}
                  onCheckedChange={() => handleToggle("messageNotifications")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="documentUpdates" className="font-normal">
                    文档更新
                  </Label>
                  <p className="text-xs text-gray-500">接收文档更新和分享通知</p>
                </div>
                <Switch
                  id="documentUpdates"
                  checked={notifications.documentUpdates}
                  onCheckedChange={() => handleToggle("documentUpdates")}
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border rounded-lg">
            <h4 className="font-medium flex items-center mb-3">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              其他通知
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="meetingReminders" className="font-normal">
                    会议提醒
                  </Label>
                  <p className="text-xs text-gray-500">接收会议和活动提醒</p>
                </div>
                <Switch
                  id="meetingReminders"
                  checked={notifications.meetingReminders}
                  onCheckedChange={() => handleToggle("meetingReminders")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="personnelChanges" className="font-normal">
                    人员变动
                  </Label>
                  <p className="text-xs text-gray-500">接收人员变动和岗位调整通知</p>
                </div>
                <Switch
                  id="personnelChanges"
                  checked={notifications.personnelChanges}
                  onCheckedChange={() => handleToggle("personnelChanges")}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
            <div className="text-sm text-blue-700">安全相关的重要警报将始终发送，无法关闭。</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
