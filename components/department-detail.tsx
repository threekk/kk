"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Phone, Mail } from "lucide-react"
import { useState } from "react"

interface DepartmentDetailProps {
  departmentId: string
}

export default function DepartmentDetail({ departmentId }: DepartmentDetailProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for department
  const department = {
    id: departmentId,
    name: "安全生产部",
    description: "负责矿山安全生产管理、安全检查、安全培训等工作",
    manager: "张三",
    memberCount: 12,
  }

  // Mock data for department members
  const members = [
    {
      id: "user1",
      name: "张三",
      position: "安全主管",
      phone: "13800138001",
      email: "zhangsan@example.com",
      avatar: "ZS",
    },
    {
      id: "user9",
      name: "郑十一",
      position: "安全员",
      phone: "13800138009",
      email: "zheng11@example.com",
      avatar: "ZSY",
    },
    {
      id: "user11",
      name: "刘一",
      position: "安全检查员",
      phone: "13800138011",
      email: "liuyi@example.com",
      avatar: "LY",
    },
    {
      id: "user12",
      name: "陈二",
      position: "安全培训师",
      phone: "13800138012",
      email: "chener@example.com",
      avatar: "CE",
    },
    {
      id: "user13",
      name: "张四",
      position: "安全员",
      phone: "13800138013",
      email: "zhangsi@example.com",
      avatar: "ZS",
    },
    { id: "user14", name: "李五", position: "安全员", phone: "13800138014", email: "liwu@example.com", avatar: "LW" },
    {
      id: "user15",
      name: "王六",
      position: "安全员",
      phone: "13800138015",
      email: "wangliu@example.com",
      avatar: "WL",
    },
    { id: "user16", name: "赵七", position: "安全员", phone: "13800138016", email: "zhaoqi@example.com", avatar: "ZQ" },
    { id: "user17", name: "孙八", position: "安全员", phone: "13800138017", email: "sunba@example.com", avatar: "SB" },
    {
      id: "user18",
      name: "周九",
      position: "安全员",
      phone: "13800138018",
      email: "zhoujiu@example.com",
      avatar: "ZJ",
    },
    { id: "user19", name: "吴十", position: "安全员", phone: "13800138019", email: "wushi@example.com", avatar: "WS" },
    {
      id: "user20",
      name: "郑十一",
      position: "安全员",
      phone: "13800138020",
      email: "zheng11_2@example.com",
      avatar: "ZSY",
    },
  ]

  // Filter members based on search query
  const filteredMembers = members.filter(
    (member) => member.name.includes(searchQuery) || member.position.includes(searchQuery),
  )

  return (
    <div className="grid gap-4">
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">{department.name}</h2>
          <p className="text-sm text-gray-500 mb-3">{department.description}</p>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 mr-2">部门主管:</span>
            <span className="font-medium">{department.manager}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 mr-2">成员数量:</span>
            <span className="font-medium">{department.memberCount}人</span>
          </div>
        </CardContent>
      </Card>

      <div className="relative mb-2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="搜索部门成员"
          className="pl-10 h-12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card className="shadow-sm">
        <CardContent className="p-0">
          <div className="divide-y">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => {}}
              >
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.position}</div>
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
    </div>
  )
}
