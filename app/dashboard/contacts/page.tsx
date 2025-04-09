import type { Metadata } from "next"
import MobileNavbar from "@/components/mobile-navbar"
import MobileHeader from "@/components/mobile-header"
import ContactsList from "@/components/contacts-list"

export const metadata: Metadata = {
  title: "矿山安全监控系统 - 通讯录",
  description: "矿山安全监控系统通讯录",
}

export default function ContactsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <MobileHeader title="通讯录" />
      <main className="flex-1 p-4 pb-20">
        <ContactsList />
      </main>
      <MobileNavbar />
    </div>
  )
}
