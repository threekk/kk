import type { Metadata } from "next"
import DashboardCards from "@/components/dashboard-cards"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 仪表盘",
  description: "矿山安全监控系统仪表盘",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="安全监控概览" />
      <main className="flex-1 p-4 pb-20">
        <DashboardCards />
      </main>
      <MobileNavbar />
    </div>
  )
}
