"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { FileUp, Lock, FileText, X } from "lucide-react"

export default function DocumentUpload() {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isEncrypted, setIsEncrypted] = useState(false)
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)

  // Mock departments for permissions
  const departments = [
    { id: "dept1", name: "安全生产部" },
    { id: "dept2", name: "采矿工程部" },
    { id: "dept3", name: "机电运输部" },
    { id: "dept4", name: "通风部" },
    { id: "dept5", name: "地测部" },
    { id: "dept6", name: "调度室" },
    { id: "dept7", name: "综合管理部" },
    { id: "dept8", name: "财务部" },
    { id: "dept9", name: "全员" },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handlePermissionChange = (departmentId: string) => {
    setSelectedPermissions((prev) => {
      if (prev.includes(departmentId)) {
        return prev.filter((id) => id !== departmentId)
      } else {
        return [...prev, departmentId]
      }
    })
  }

  const handleUpload = () => {
    if (!selectedFile) return

    setIsUploading(true)

    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false)
      router.push("/dashboard/documents")
    }, 2000)
  }

  return (
    <div className="grid gap-4">
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium mb-4">上传文档</h3>

          <div className="space-y-4">
            {!selectedFile ? (
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <FileUp className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">点击或拖拽文件到此处上传</p>
                <p className="text-xs text-gray-400 mt-1">支持 DOC, DOCX, XLS, XLSX, PPT, PPTX, PDF 格式</p>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf"
                  onChange={handleFileChange}
                />
              </div>
            ) : (
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">{selectedFile.name}</div>
                      <div className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedFile(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="encrypt"
                  checked={isEncrypted}
                  onCheckedChange={(checked) => setIsEncrypted(checked as boolean)}
                />
                <Label htmlFor="encrypt" className="flex items-center cursor-pointer">
                  <Lock className="h-4 w-4 mr-1" />
                  加密文档
                </Label>
              </div>
              {isEncrypted && <div className="pl-6 text-xs text-gray-500">加密文档仅允许有权限的人员查看和下载</div>}
            </div>

            <div className="space-y-2">
              <Label>文档权限</Label>
              <div className="grid grid-cols-2 gap-2">
                {departments.map((dept) => (
                  <div key={dept.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={dept.id}
                      checked={selectedPermissions.includes(dept.id)}
                      onCheckedChange={() => handlePermissionChange(dept.id)}
                    />
                    <Label htmlFor={dept.id} className="cursor-pointer">
                      {dept.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!selectedFile || selectedPermissions.length === 0 || isUploading}
              onClick={handleUpload}
            >
              {isUploading ? "上传中..." : "上传文档"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
