"use client"

import { AlertDialogHeader } from "@/components/ui/alert-dialog"

import { AlertDialogContent } from "@/components/ui/alert-dialog"

import { AlertDialog } from "@/components/ui/alert-dialog"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Edit, Plus, Trash2, Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock roles data
const initialRoles = [
  {
    id: "role1",
    name: "系统管理员",
    description: "拥有系统所有权限，可以管理用户、角色和权限",
    userCount: 2,
    permissions: {
      dashboard: { view: true, edit: true },
      personnel: { view: true, edit: true },
      video: { view: true, edit: true },
      broadcast: { view: true, edit: true },
      ventilation: { view: true, edit: true },
      drainage: { view: true, edit: true },
      power: { view: true, edit: true },
      contacts: { view: true, edit: true },
      messages: { view: true, edit: true },
      documents: { view: true, edit: true },
      settings: { view: true, edit: true },
    },
  },
  {
    id: "role2",
    name: "部门管理员",
    description: "拥有部门内的管理权限，可以管理部门用户和数据",
    userCount: 8,
    permissions: {
      dashboard: { view: true, edit: false },
      personnel: { view: true, edit: true },
      video: { view: true, edit: false },
      broadcast: { view: true, edit: true },
      ventilation: { view: true, edit: false },
      drainage: { view: true, edit: false },
      power: { view: true, edit: false },
      contacts: { view: true, edit: true },
      messages: { view: true, edit: true },
      documents: { view: true, edit: true },
      settings: { view: true, edit: false },
    },
  },
  {
    id: "role3",
    name: "安全监控员",
    description: "负责安全监控和预警，可以查看和处理安全数据",
    userCount: 15,
    permissions: {
      dashboard: { view: true, edit: false },
      personnel: { view: true, edit: false },
      video: { view: true, edit: false },
      broadcast: { view: true, edit: false },
      ventilation: { view: true, edit: false },
      drainage: { view: true, edit: false },
      power: { view: true, edit: false },
      contacts: { view: true, edit: false },
      messages: { view: true, edit: false },
      documents: { view: true, edit: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: "role4",
    name: "普通用户",
    description: "基本用户权限，可以查看部分数据",
    userCount: 62,
    permissions: {
      dashboard: { view: true, edit: false },
      personnel: { view: false, edit: false },
      video: { view: false, edit: false },
      broadcast: { view: false, edit: false },
      ventilation: { view: false, edit: false },
      drainage: { view: false, edit: false },
      power: { view: false, edit: false },
      contacts: { view: true, edit: false },
      messages: { view: true, edit: false },
      documents: { view: true, edit: false },
      settings: { view: false, edit: false },
    },
  },
]

// Mock users data
const initialUsers = [
  {
    id: "user1",
    name: "张三",
    username: "zhangsan",
    department: "安全生产部",
    role: "系统管理员",
    status: "active",
  },
  {
    id: "user2",
    name: "李四",
    username: "lisi",
    department: "采矿工程部",
    role: "部门管理员",
    status: "active",
  },
  {
    id: "user3",
    name: "王五",
    username: "wangwu",
    department: "机电运输部",
    role: "部门管理员",
    status: "active",
  },
  {
    id: "user4",
    name: "赵六",
    username: "zhaoliu",
    department: "通风部",
    role: "安全监控员",
    status: "active",
  },
  {
    id: "user5",
    name: "钱七",
    username: "qianqi",
    department: "地测部",
    role: "安全监控员",
    status: "inactive",
  },
  {
    id: "user6",
    name: "孙八",
    username: "sunba",
    department: "调度室",
    role: "普通用户",
    status: "active",
  },
]

export default function PermissionsManagement() {
  const [roles, setRoles] = useState(initialRoles)
  const [users, setUsers] = useState(initialUsers)
  const [selectedRole, setSelectedRole] = useState<(typeof roles)[0] | null>(null)
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false)
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [newRole, setNewRole] = useState({
    name: "",
    description: "",
  })
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    department: "",
    role: "",
    status: "active",
  })

  const handleRoleSelect = (role: (typeof roles)[0]) => {
    setSelectedRole(role)
  }

  const handlePermissionChange = (moduleId: keyof typeof selectedRole.permissions, permissionType: "view" | "edit") => {
    if (!selectedRole) return

    const updatedRoles = roles.map((role) => {
      if (role.id === selectedRole.id) {
        const updatedPermissions = {
          ...role.permissions,
          [moduleId]: {
            ...role.permissions[moduleId],
            [permissionType]: !role.permissions[moduleId][permissionType],
          },
        }

        // If edit is enabled, view must also be enabled
        if (permissionType === "edit" && !role.permissions[moduleId][permissionType]) {
          updatedPermissions[moduleId].view = true
        }

        // If view is disabled, edit must also be disabled
        if (permissionType === "view" && !updatedPermissions[moduleId][permissionType]) {
          updatedPermissions[moduleId].edit = false
        }

        return {
          ...role,
          permissions: updatedPermissions,
        }
      }
      return role
    })

    setRoles(updatedRoles)
    setSelectedRole(updatedRoles.find((r) => r.id === selectedRole.id) || null)
  }

  const handleAddRole = () => {
    // Reset form
    setNewRole({
      name: "",
      description: "",
    })
    setIsRoleDialogOpen(true)
  }

  const handleAddUser = () => {
    // Reset form
    setNewUser({
      name: "",
      username: "",
      department: "",
      role: "",
      status: "active",
    })
    setIsUserDialogOpen(true)
  }

  const handleDeleteRole = () => {
    if (!selectedRole) return

    setRoles(roles.filter((role) => role.id !== selectedRole.id))
    setSelectedRole(null)
    setIsDeleteDialogOpen(false)
  }

  const handleRoleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send this to the server
    const newRoleObj = {
      id: `role${roles.length + 1}`,
      name: newRole.name,
      description: newRole.description,
      userCount: 0,
      permissions: {
        dashboard: { view: true, edit: false },
        personnel: { view: false, edit: false },
        video: { view: false, edit: false },
        broadcast: { view: false, edit: false },
        ventilation: { view: false, edit: false },
        drainage: { view: false, edit: false },
        power: { view: false, edit: false },
        contacts: { view: true, edit: false },
        messages: { view: true, edit: false },
        documents: { view: true, edit: false },
        settings: { view: false, edit: false },
      },
    }

    setRoles([...roles, newRoleObj])
    setIsRoleDialogOpen(false)
  }

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send this to the server
    const newUserObj = {
      id: `user${users.length + 1}`,
      name: newUser.name,
      username: newUser.username,
      department: newUser.department,
      role: newUser.role,
      status: newUser.status,
    }

    setUsers([...users, newUserObj])
    setIsUserDialogOpen(false)
  }

  const moduleLabels = {
    dashboard: "安全监控",
    personnel: "人员定位",
    video: "视频监控",
    broadcast: "语音广播",
    ventilation: "通风系统",
    drainage: "排水系统",
    power: "电力系统",
    contacts: "通讯录",
    messages: "消息",
    documents: "文档",
    settings: "系统设置",
  }

  return (
    <>
      <Tabs defaultValue="roles" className="space-y-4">
        <TabsList className="grid grid-cols-2 h-auto">
          <TabsTrigger value="roles" className="py-2">
            角色管理
          </TabsTrigger>
          <TabsTrigger value="users" className="py-2">
            用户权限
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">角色列表</h3>
              <Button size="sm" onClick={handleAddRole}>
                <Plus className="h-4 w-4 mr-1" />
                添加角色
              </Button>
            </div>

            <Card className="shadow-sm">
              <CardContent className="p-0">
                <div className="divide-y">
                  {roles.map((role) => (
                    <div
                      key={role.id}
                      className={`p-4 cursor-pointer ${
                        selectedRole?.id === role.id ? "bg-blue-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleRoleSelect(role)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-blue-600 mr-2" />
                          <h4 className="font-medium">{role.name}</h4>
                        </div>
                        <Badge variant="outline">{role.userCount}人</Badge>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{role.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {selectedRole && (
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">{selectedRole.name} - 权限设置</h3>
                    <Button variant="destructive" size="sm" onClick={() => setIsDeleteDialogOpen(true)}>
                      <Trash2 className="h-4 w-4 mr-1" />
                      删除
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>功能模块</TableHead>
                          <TableHead className="w-[100px] text-center">查看</TableHead>
                          <TableHead className="w-[100px] text-center">编辑</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(selectedRole.permissions).map(([moduleId, permissions]) => (
                          <TableRow key={moduleId}>
                            <TableCell className="font-medium">
                              {moduleLabels[moduleId as keyof typeof moduleLabels]}
                            </TableCell>
                            <TableCell className="text-center">
                              <Switch
                                checked={permissions.view}
                                onCheckedChange={() =>
                                  handlePermissionChange(moduleId as keyof typeof selectedRole.permissions, "view")
                                }
                              />
                            </TableCell>
                            <TableCell className="text-center">
                              <Switch
                                checked={permissions.edit}
                                disabled={!permissions.view}
                                onCheckedChange={() =>
                                  handlePermissionChange(moduleId as keyof typeof selectedRole.permissions, "edit")
                                }
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <Lock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <div className="text-sm text-blue-700">
                        权限说明：查看权限允许用户查看相应模块的数据；编辑权限允许用户修改相应模块的数据。编辑权限依赖于查看权限。
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="users">
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">用户权限</h3>
              <Button size="sm" onClick={handleAddUser}>
                <Plus className="h-4 w-4 mr-1" />
                添加用户
              </Button>
            </div>

            <Card className="shadow-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>用户名</TableHead>
                        <TableHead>部门</TableHead>
                        <TableHead>角色</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead className="w-[100px] text-right">操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.username}</div>
                          </TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            {user.status === "active" ? (
                              <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                                <Check className="h-3 w-3 mr-1" />
                                启用
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-gray-100 text-gray-500 hover:bg-gray-100">
                                <X className="h-3 w-3 mr-1" />
                                禁用
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">编辑</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Add Role Dialog */}
      <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>添加角色</DialogTitle>
            <DialogDescription>创建新的角色并设置基本信息</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRoleSubmit}>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="roleName">角色名称</Label>
                <Input
                  id="roleName"
                  value={newRole.name}
                  onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roleDescription">角色描述</Label>
                <Input
                  id="roleDescription"
                  value={newRole.description}
                  onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                  required
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setIsRoleDialogOpen(false)}>
                取消
              </Button>
              <Button type="submit">创建角色</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add User Dialog */}
      <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>添加用户</DialogTitle>
            <DialogDescription>创建新用户并分配角色</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUserSubmit}>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="userName">姓名</Label>
                <Input
                  id="userName"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userUsername">用户名</Label>
                <Input
                  id="userUsername"
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userDepartment">部门</Label>
                <Select
                  value={newUser.department}
                  onValueChange={(value) => setNewUser({ ...newUser, department: value })}
                >
                  <SelectTrigger id="userDepartment">
                    <SelectValue placeholder="选择部门" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="安全生产部">安全生产部</SelectItem>
                    <SelectItem value="采矿工程部">采矿工程部</SelectItem>
                    <SelectItem value="机电运输部">机电运输部</SelectItem>
                    <SelectItem value="通风部">通风部</SelectItem>
                    <SelectItem value="地测部">地测部</SelectItem>
                    <SelectItem value="调度室">调度室</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="userRole">角色</Label>
                <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                  <SelectTrigger id="userRole">
                    <SelectValue placeholder="选择角色" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role.name}>
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="userStatus">状态</Label>
                <Select
                  value={newUser.status}
                  onValueChange={(value: "active" | "inactive") => setNewUser({ ...newUser, status: value })}
                >
                  <SelectTrigger id="userStatus">
                    <SelectValue placeholder="选择状态" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">启用</SelectItem>
                    <SelectItem value="inactive">禁用</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setIsUserDialogOpen(false)}>
                取消
              </Button>
              <Button type="submit">创建用户</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Role Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <DialogTitle>确认删除角色</DialogTitle>
            <DialogDescription>
              {selectedRole &&
                `您确定要删除"${selectedRole.name}"角色吗？此操作不可撤销，且可能影响已分配此角色的用户。`}
            </DialogDescription>
          </AlertDialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              取消
            </Button>
            <Button variant="destructive" onClick={handleDeleteRole}>
              确认删除
            </Button>
          </DialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
