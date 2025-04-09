import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import DepartmentDetail from "@/components/department-detail"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 部门详情",
  description: "矿山安全监控系统部门详情",
}

interface DepartmentDetailPageProps {
  params: {
    departmentId: string
  }
}

export default function DepartmentDetailPage({ params }: DepartmentDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="部门详情" />
      <main className="flex-1 p-4 pb-20">
        <DepartmentDetail departmentId={params.departmentId} />
      </main>
      <MobileNavbar />
    </div>
  )
}
