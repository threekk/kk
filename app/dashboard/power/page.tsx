import type { Metadata } from "next"
import PowerSystem from "@/components/power-system"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 电力系统",
  description: "矿山安全监控系统电力系统",
}

export default function PowerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="电力系统" />
      <main className="flex-1 p-4 pb-20">
        <PowerSystem />
      </main>
      <MobileNavbar />
    </div>
  )
}
