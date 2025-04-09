import type { Metadata } from "next"
import MobileHeader from "@/components/mobile-header"
import ChatDetail from "@/components/chat-detail"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 聊天",
  description: "矿山安全监控系统聊天",
}

interface ChatDetailPageProps {
  params: {
    chatId: string
  }
}

export default function ChatDetailPage({ params }: ChatDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="聊天" />
      <main className="flex-1 pb-16">
        <ChatDetail chatId={params.chatId} />
      </main>
    </div>
  )
}
