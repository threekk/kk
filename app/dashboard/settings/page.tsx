import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import SettingsTabs from "@/components/settings-tabs"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 系统设置",
  description: "矿山安全监控系统系统设置",
}

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="系统设置" />
      <main className="flex-1 p-4 pb-20">
        <SettingsTabs />
      </main>
      <MobileNavbar />
    </div>
  )
}
