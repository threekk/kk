import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import DocumentUpload from "@/components/document-upload"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 上传文档",
  description: "矿山安全监控系统上传文档",
}

export default function DocumentUploadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="上传文档" />
      <main className="flex-1 p-4 pb-20">
        <DocumentUpload />
      </main>
      <MobileNavbar />
    </div>
  )
}
