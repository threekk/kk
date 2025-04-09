"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsProfile from "@/components/settings-profile"
import SettingsSecurity from "@/components/settings-security"
import SettingsNotifications from "@/components/settings-notifications"
import SettingsOther from "@/components/settings-other"

export default function SettingsTabs() {
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList className="grid grid-cols-4 h-auto">
        <TabsTrigger value="profile" className="py-2">
          个人信息
        </TabsTrigger>
        <TabsTrigger value="security" className="py-2">
          账户安全
        </TabsTrigger>
        <TabsTrigger value="notifications" className="py-2">
          通知设置
        </TabsTrigger>
        <TabsTrigger value="other" className="py-2">
          其他设置
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <SettingsProfile />
      </TabsContent>

      <TabsContent value="security">
        <SettingsSecurity />
      </TabsContent>

      <TabsContent value="notifications">
        <SettingsNotifications />
      </TabsContent>

      <TabsContent value="other">
        <SettingsOther />
      </TabsContent>
    </Tabs>
  )
}
