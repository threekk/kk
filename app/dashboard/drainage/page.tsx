import type { Metadata } from "next"
import DrainageSystem from "@/components/drainage-system"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 排水系统",
  description: "矿山安全监控系统排水系统",
}

export default function DrainagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="排水系统" />
      <main className="flex-1 p-4 pb-20">
        <DrainageSystem />
      </main>
      <MobileNavbar />
    </div>
  )
}
