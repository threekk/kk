"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Bell, Shield } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface MobileHeaderProps {
  title: string
}

export default function MobileHeader({ title }: MobileHeaderProps) {
  const router = useRouter()
  const [notificationCount, setNotificationCount] = useState(6)

  const handleLogout = () => {
    // In a real app, you would clear auth tokens here
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex h-14 items-center px-4 justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <SheetHeader className="border-b pb-4 mb-4">
                <SheetTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  矿山安全监控系统
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-2 py-2">
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard")}>
                  安全监控
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/personnel")}>
                  人员定位
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/video")}>
                  视频监控
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/broadcast")}>
                  语音广播
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/ventilation")}>
                  通风系统
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/drainage")}>
                  排水系统
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/power")}>
                  电力系统
                </Button>
              </div>
              <div className="border-t mt-auto pt-4">
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  退出登录
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-lg font-medium">{title}</h1>
        </div>
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                {notificationCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
