import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import AnnouncementDetail from "@/components/announcement-detail"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 公告详情",
  description: "矿山安全监控系统公告详情",
}

interface AnnouncementDetailPageProps {
  params: {
    announcementId: string
  }
}

export default function AnnouncementDetailPage({ params }: AnnouncementDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="公告详情" />
      <main className="flex-1 p-4 pb-20">
        <AnnouncementDetail announcementId={params.announcementId} />
      </main>
      <MobileNavbar />
    </div>
  )
}
