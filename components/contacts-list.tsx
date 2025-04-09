"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Phone, Mail, ChevronRight } from "lucide-react"

export default function ContactsList() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for departments
  const departments = [
    { id: "dept1", name: "安全生产部", count: 12 },
    { id: "dept2", name: "采矿工程部", count: 28 },
    { id: "dept3", name: "机电运输部", count: 15 },
    { id: "dept4", name: "通风部", count: 8 },
    { id: "dept5", name: "地测部", count: 6 },
    { id: "dept6", name: "调度室", count: 10 },
    { id: "dept7", name: "综合管理部", count: 14 },
    { id: "dept8", name: "财务部", count: 5 },
  ]

  // Mock data for contacts
  const contacts = [
    { id: "user1", name: "张三", position: "安全主管", department: "安全生产部", phone: "13800138001", avatar: "ZS" },
    { id: "user2", name: "李四", position: "采矿工程师", department: "采矿工程部", phone: "13800138002", avatar: "LS" },
    { id: "user3", name: "王五", position: "机电工程师", department: "机电运输部", phone: "13800138003", avatar: "WW" },
    { id: "user4", name: "赵六", position: "通风工程师", department: "通风部", phone: "13800138004", avatar: "ZL" },
    { id: "user5", name: "钱七", position: "测量工程师", department: "地测部", phone: "13800138005", avatar: "QQ" },
    { id: "user6", name: "孙八", position: "调度员", department: "调度室", phone: "13800138006", avatar: "SB" },
    { id: "user7", name: "周九", position: "人事主管", department: "综合管理部", phone: "13800138007", avatar: "ZJ" },
    { id: "user8", name: "吴十", position: "财务主管", department: "财务部", phone: "13800138008", avatar: "WS" },
    { id: "user9", name: "郑十一", position: "安全员", department: "安全生产部", phone: "13800138009", avatar: "ZSY" },
    {
      id: "user10",
      name: "王十二",
      position: "采煤队长",
      department: "采矿工程部",
      phone: "13800138010",
      avatar: "WSE",
    },
  ]

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.includes(searchQuery) ||
      contact.position.includes(searchQuery) ||
      contact.department.includes(searchQuery),
  )

  return (
    <div className="grid gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="搜索联系人"
          className="pl-10 h-12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="departments">
        <TabsList className="grid grid-cols-2 mb-3">
          <TabsTrigger value="departments">组织架构</TabsTrigger>
          <TabsTrigger value="contacts">联系人</TabsTrigger>
        </TabsList>

        <TabsContent value="departments">
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => {}}
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{dept.name}</div>
                        <div className="text-xs text-gray-500">{dept.count}人</div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => {}}
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 font-medium">
                        {contact.avatar}
                      </div>
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-xs text-gray-500">
                          {contact.position} | {contact.department}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-blue-50 text-blue-600">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-full bg-green-50 text-green-600">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
