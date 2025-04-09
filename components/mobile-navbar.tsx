"use client"

import { usePathname, useRouter } from "next/navigation"
import { Shield, MessageSquare, FileText, User, Settings } from "lucide-react"

export default function MobileNavbar() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { name: "安全监控", href: "/dashboard", icon: <Shield className="h-5 w-5" /> },
    { name: "消息", href: "/dashboard/messages", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "通讯录", href: "/dashboard/contacts", icon: <User className="h-5 w-5" /> },
    { name: "文档", href: "/dashboard/documents", icon: <FileText className="h-5 w-5" /> },
    { name: "设置", href: "/dashboard/settings", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.href}
            className={`flex flex-col items-center py-2 px-3 flex-1 ${
              pathname === item.href || pathname.startsWith(item.href + "/") ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => router.push(item.href)}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
