import type { Metadata } from "next"
import BroadcastSystem from "@/components/broadcast-system"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 语音广播",
  description: "矿山安全监控系统语音广播",
}

export default function BroadcastPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="语音广播" />
      <main className="flex-1 p-4 pb-20">
        <BroadcastSystem />
      </main>
      <MobileNavbar />
    </div>
  )
}
