import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import DocumentsList from "@/components/documents-list"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 文档",
  description: "矿山安全监控系统文档",
}

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="文档" />
      <main className="flex-1 p-4 pb-20">
        <DocumentsList />
      </main>
      <MobileNavbar />
    </div>
  )
}
