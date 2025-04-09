import type { Metadata } from "next"
import MobileHeader from "@/components/mobile-header"
import GroupChatDetail from "@/components/group-chat-detail"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 群聊",
  description: "矿山安全监控系统群聊",
}

interface GroupChatDetailPageProps {
  params: {
    groupId: string
  }
}

export default function GroupChatDetailPage({ params }: GroupChatDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="群聊" />
      <main className="flex-1 pb-16">
        <GroupChatDetail groupId={params.groupId} />
      </main>
    </div>
  )
}
