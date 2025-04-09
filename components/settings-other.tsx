"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LogOut, Moon, Trash2, HelpCircle, Info, Languages } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function SettingsOther() {
  const router = useRouter()
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false)
  const [isClearCacheDialogOpen, setIsClearCacheDialogOpen] = useState(false)
  const [settings, setSettings] = useState({
    darkMode: false,
    language: "中文",
    autoLogin: true,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleLogout = () => {
    // In a real app, you would clear auth tokens here
    router.push("/")
  }

  const handleClearCache = () => {
    // In a real app, you would clear the cache here
    setIsClearCacheDialogOpen(false)
  }

  return (
    <>
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium mb-4">其他设置</h3>

          <div className="space-y-4">
            <div className="p-3 bg-white border rounded-lg">
              <h4 className="font-medium mb-3">应用设置</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Moon className="h-5 w-5 text-gray-500 mr-2" />
                    <Label htmlFor="darkMode" className="font-normal">
                      深色模式
                    </Label>
                  </div>
                  <Switch id="darkMode" checked={settings.darkMode} onCheckedChange={() => handleToggle("darkMode")} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Languages className="h-5 w-5 text-gray-500 mr-2" />
                    <Label htmlFor="language" className="font-normal">
                      语言
                    </Label>
                  </div>
                  <div className="text-sm">{settings.language}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <LogOut className="h-5 w-5 text-gray-500 mr-2" />
                    <Label htmlFor="autoLogin" className="font-normal">
                      自动登录
                    </Label>
                  </div>
                  <Switch
                    id="autoLogin"
                    checked={settings.autoLogin}
                    onCheckedChange={() => handleToggle("autoLogin")}
                  />
                </div>
              </div>
            </div>

            <div className="p-3 bg-white border rounded-lg">
              <h4 className="font-medium mb-3">存储与缓存</h4>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setIsClearCacheDialogOpen(true)}
              >
                <Trash2 className="h-5 w-5 text-gray-500 mr-2" />
                清除缓存
              </Button>
            </div>

            <div className="p-3 bg-white border rounded-lg">
              <h4 className="font-medium mb-3">关于</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Info className="h-5 w-5 text-gray-500 mr-2" />
                  关于我们
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="h-5 w-5 text-gray-500 mr-2" />
                  帮助与反馈
                </Button>
                <div className="text-xs text-center text-gray-500 mt-2">版本号: v1.0.3</div>
              </div>
            </div>

            <Button variant="destructive" className="w-full" onClick={() => setIsLogoutDialogOpen(true)}>
              <LogOut className="h-5 w-5 mr-2" />
              退出登录
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Logout Dialog */}
      <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认退出登录</AlertDialogTitle>
            <AlertDialogDescription>您确定要退出登录吗？退出后需要重新输入用户名和密码。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>确认退出</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Clear Cache Dialog */}
      <AlertDialog open={isClearCacheDialogOpen} onOpenChange={setIsClearCacheDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认清除缓存</AlertDialogTitle>
            <AlertDialogDescription>清除缓存将删除应用的临时数据，可能需要重新下载部分资源。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleClearCache}>确认清除</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
