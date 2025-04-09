"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  FileText,
  FileLock2,
  FileUp,
  Clock,
  Star,
  MoreVertical,
  Download,
  Share2,
  Trash2,
  Lock,
  Unlock,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DocumentsList() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for documents
  const documents = [
    {
      id: "doc1",
      name: "安全生产责任制.docx",
      type: "docx",
      size: "1.2MB",
      uploadedBy: "张三",
      uploadTime: "2023-06-01 10:30",
      isEncrypted: true,
      isStarred: true,
      permissions: ["安全生产部"],
    },
    {
      id: "doc2",
      name: "矿山安全检查表.xlsx",
      type: "xlsx",
      size: "0.8MB",
      uploadedBy: "李四",
      uploadTime: "2023-05-28 14:15",
      isEncrypted: false,
      isStarred: false,
      permissions: ["全员"],
    },
    {
      id: "doc3",
      name: "应急救援预案.pdf",
      type: "pdf",
      size: "2.5MB",
      uploadedBy: "王五",
      uploadTime: "2023-05-25 11:20",
      isEncrypted: true,
      isStarred: true,
      permissions: ["安全生产部", "通风部", "机电运输部"],
    },
    {
      id: "doc4",
      name: "设备检修计划.xlsx",
      type: "xlsx",
      size: "1.5MB",
      uploadedBy: "赵六",
      uploadTime: "2023-05-20 09:45",
      isEncrypted: false,
      isStarred: false,
      permissions: ["机电运输部"],
    },
    {
      id: "doc5",
      name: "通风系统检查报告.pdf",
      type: "pdf",
      size: "3.2MB",
      uploadedBy: "钱七",
      uploadTime: "2023-05-18 16:30",
      isEncrypted: false,
      isStarred: false,
      permissions: ["通风部", "安全生产部"],
    },
  ]

  // Filter documents based on search query
  const filteredDocuments = documents.filter(
    (doc) => doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.uploadedBy.includes(searchQuery),
  )

  // Get starred documents
  const starredDocuments = documents.filter((doc) => doc.isStarred)

  // Get recent documents (sort by upload time)
  const recentDocuments = [...documents].sort(
    (a, b) => new Date(b.uploadTime).getTime() - new Date(a.uploadTime).getTime(),
  )

  return (
    <div className="grid gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="搜索文档"
          className="pl-10 h-12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center">
        <h3 className="font-medium">文档管理</h3>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileUp className="h-4 w-4 mr-2" />
          上传文档
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-3 mb-3">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="starred">星标</TabsTrigger>
          <TabsTrigger value="recent">最近</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredDocuments.map((doc) => (
                  <div key={doc.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {doc.isEncrypted ? (
                          <FileLock2 className="h-6 w-6 text-blue-600 mr-3" />
                        ) : (
                          <FileText className="h-6 w-6 text-blue-600 mr-3" />
                        )}
                        <div>
                          <div className="font-medium flex items-center">
                            {doc.name}
                            {doc.isStarred && <Star className="h-4 w-4 text-yellow-500 ml-2" />}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <span className="mr-3">{doc.size}</span>
                            <span className="mr-3">{doc.type.toUpperCase()}</span>
                            {doc.isEncrypted && (
                              <Badge variant="outline" className="text-[10px] h-5 mr-3">
                                <Lock className="h-3 w-3 mr-1" />
                                加密
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-[10px] h-5">
                              {doc.permissions.length > 1 ? `${doc.permissions[0]}等` : doc.permissions[0]}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            分享
                          </DropdownMenuItem>
                          {doc.isEncrypted ? (
                            <DropdownMenuItem>
                              <Unlock className="h-4 w-4 mr-2" />
                              解密
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <Lock className="h-4 w-4 mr-2" />
                              加密
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            删除
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>
                        {doc.uploadTime} 由 {doc.uploadedBy} 上传
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="starred">
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y">
                {starredDocuments.map((doc) => (
                  <div key={doc.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {doc.isEncrypted ? (
                          <FileLock2 className="h-6 w-6 text-blue-600 mr-3" />
                        ) : (
                          <FileText className="h-6 w-6 text-blue-600 mr-3" />
                        )}
                        <div>
                          <div className="font-medium flex items-center">
                            {doc.name}
                            <Star className="h-4 w-4 text-yellow-500 ml-2" />
                          </div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <span className="mr-3">{doc.size}</span>
                            <span className="mr-3">{doc.type.toUpperCase()}</span>
                            {doc.isEncrypted && (
                              <Badge variant="outline" className="text-[10px] h-5 mr-3">
                                <Lock className="h-3 w-3 mr-1" />
                                加密
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-[10px] h-5">
                              {doc.permissions.length > 1 ? `${doc.permissions[0]}等` : doc.permissions[0]}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            分享
                          </DropdownMenuItem>
                          {doc.isEncrypted ? (
                            <DropdownMenuItem>
                              <Unlock className="h-4 w-4 mr-2" />
                              解密
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <Lock className="h-4 w-4 mr-2" />
                              加密
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            删除
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>
                        {doc.uploadTime} 由 {doc.uploadedBy} 上传
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent">
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y">
                {recentDocuments.map((doc) => (
                  <div key={doc.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {doc.isEncrypted ? (
                          <FileLock2 className="h-6 w-6 text-blue-600 mr-3" />
                        ) : (
                          <FileText className="h-6 w-6 text-blue-600 mr-3" />
                        )}
                        <div>
                          <div className="font-medium flex items-center">
                            {doc.name}
                            {doc.isStarred && <Star className="h-4 w-4 text-yellow-500 ml-2" />}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <span className="mr-3">{doc.size}</span>
                            <span className="mr-3">{doc.type.toUpperCase()}</span>
                            {doc.isEncrypted && (
                              <Badge variant="outline" className="text-[10px] h-5 mr-3">
                                <Lock className="h-3 w-3 mr-1" />
                                加密
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-[10px] h-5">
                              {doc.permissions.length > 1 ? `${doc.permissions[0]}等` : doc.permissions[0]}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            分享
                          </DropdownMenuItem>
                          {doc.isEncrypted ? (
                            <DropdownMenuItem>
                              <Unlock className="h-4 w-4 mr-2" />
                              解密
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <Lock className="h-4 w-4 mr-2" />
                              加密
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            删除
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>
                        {doc.uploadTime} 由 {doc.uploadedBy} 上传
                      </span>
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
