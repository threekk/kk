import type { Metadata } from "next"
import VideoMonitoring from "@/components/video-monitoring"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 视频监控",
  description: "矿山安全监控系统视频监控",
}

export default function VideoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="视频监控" />
      <main className="flex-1 p-4 pb-20">
        <VideoMonitoring />
      </main>
      <MobileNavbar />
    </div>
  )
}
