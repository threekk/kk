import type { Metadata } from "next"
import PersonnelStats from "@/components/personnel-stats"
import PersonnelChart from "@/components/personnel-chart"
import PersonnelAreaTable from "@/components/personnel-area-table"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 人员定位",
  description: "矿山安全监控系统人员定位",
}

export default function PersonnelPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="人员定位" />
      <main className="flex-1 p-4 pb-20">
        <div className="grid gap-4">
          <PersonnelStats />
          <PersonnelChart />
          <PersonnelAreaTable />
        </div>
      </main>
      <MobileNavbar />
    </div>
  )
}
