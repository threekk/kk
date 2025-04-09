import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import UserDetail from "@/components/user-detail"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 联系人详情",
  description: "矿山安全监控系统联系人详情",
}

interface UserDetailPageProps {
  params: {
    userId: string
  }
}

export default function UserDetailPage({ params }: UserDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="联系人详情" />
      <main className="flex-1 p-4 pb-20">
        <UserDetail userId={params.userId} />
      </main>
      <MobileNavbar />
    </div>
  )
}
