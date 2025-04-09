import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import MessagesList from "@/components/messages-list"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 消息",
  description: "矿山安全监控系统消息",
}

export default function MessagesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="消息" />
      <main className="flex-1 p-4 pb-20">
        <MessagesList />
      </main>
      <MobileNavbar />
    </div>
  )
}
