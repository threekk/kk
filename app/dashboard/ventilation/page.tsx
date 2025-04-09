import type { Metadata } from "next"
import VentilationSystem from "@/components/ventilation-system"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 通风系统",
  description: "矿山安全监控系统通风系统",
}

export default function VentilationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="通风系统" />
      <main className="flex-1 p-4 pb-20">
        <VentilationSystem />
      </main>
      <MobileNavbar />
    </div>
  )
}
