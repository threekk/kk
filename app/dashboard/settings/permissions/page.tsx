import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import PermissionsManagement from "@/components/permissions-management"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 权限管理",
  description: "矿山安全监控系统权限管理",
}

export default function PermissionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="权限管理" />
      <main className="flex-1 p-4 pb-20">
        <PermissionsManagement />
      </main>
      <MobileNavbar />
    </div>
  )
}
