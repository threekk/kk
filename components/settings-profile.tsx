"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, User, Mail, Phone, Building, Calendar } from "lucide-react"

export default function SettingsProfile() {
  // Mock user data
  const [userData, setUserData] = useState({
    name: "张三",
    email: "zhangsan@example.com",
    phone: "13800138001",
    department: "安全生产部",
    position: "安全主管",
    joinDate: "2018-05-15",
    avatar: "ZS",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ ...userData })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUserData({ ...formData })
    setIsEditing(false)
  }

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">个人信息</h3>
          {!isEditing && (
            <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
              <Pencil className="h-4 w-4 mr-2" />
              编辑
            </Button>
          )}
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
            {userData.avatar}
          </div>
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p className="text-gray-500">
            {userData.position} | {userData.department}
          </p>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">姓名</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">邮箱</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">手机号</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">职位</Label>
              <Input id="position" name="position" value={formData.position} onChange={handleChange} />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                保存
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setFormData({ ...userData })
                  setIsEditing(false)
                }}
              >
                取消
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">姓名</div>
                <div>{userData.name}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">邮箱</div>
                <div>{userData.email}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">手机号</div>
                <div>{userData.phone}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Building className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">部门</div>
                <div>{userData.department}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Pencil className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">职位</div>
                <div>{userData.position}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">入职日期</div>
                <div>{userData.joinDate}</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
