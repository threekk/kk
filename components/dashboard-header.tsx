"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Users, Video, Volume2, Wind, Droplet, Zap, Menu, X } from "lucide-react"

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    // In a real app, you would clear auth tokens here
    router.push("/")
  }

  const navItems = [
    { name: "安全监控", href: "/dashboard", icon: <Shield className="h-5 w-5" /> },
    { name: "人员定位", href: "/dashboard/personnel", icon: <Users className="h-5 w-5" /> },
    { name: "视频监控", href: "/dashboard/video", icon: <Video className="h-5 w-5" /> },
    { name: "语音广播", href: "/dashboard/broadcast", icon: <Volume2 className="h-5 w-5" /> },
    { name: "通风系统", href: "/dashboard/ventilation", icon: <Wind className="h-5 w-5" /> },
    { name: "排水系统", href: "/dashboard/drainage", icon: <Droplet className="h-5 w-5" /> },
    { name: "电力系统", href: "/dashboard/power", icon: <Zap className="h-5 w-5" /> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <div className="flex items-center mr-4">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-lg font-bold">矿山安全监控</span>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-blue-600" : "text-muted-foreground"
              }`}
            >
              {item.icon}
              <span className="ml-1">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="ml-auto">
          <Button variant="outline" size="sm" onClick={handleLogout}>
            退出登录
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="grid gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-blue-600" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
