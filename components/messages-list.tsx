"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, ChevronRight } from "lucide-react"

export default function MessagesList() {
  const router = useRouter()

  // Mock data for announcements
  const announcements = [
    {
      id: "ann1",
      title: "安全生产月活动通知",
      content: "关于开展2023年安全生产月活动的通知，请各部门积极参与...",
      sender: "安全生产部",
      time: "2023-06-01 09:30",
      isRead: false,
    },
    {
      id: "ann2",
      title: "关于加强井下通风管理的通知",
      content: "为进一步加强井下通风管理，确保安全生产，现将有关事项通知如下...",
      sender: "通风部",
      time: "2023-05-28 14:15",
      isRead: true,
    },
    {
      id: "ann3",
      title: "设备检修计划",
      content: "根据年度设备检修计划，定于6月15日至6月20日对主通风机进行检修...",
      sender: "机电运输部",
      time: "2023-05-25 11:20",
      isRead: true,
    },
  ]

  // Mock data for chats
  const chats = [
    {
      id: "chat1",
      name: "张三",
      avatar: "ZS",
      lastMessage: "明天安全检查的时间确定了吗？",
      time: "10:30",
      unread: 2,
    },
    {
      id: "chat2",
      name: "李四",
      avatar: "LS",
      lastMessage: "已收到设备检修计划，我们会做好准备",
      time: "昨天",
      unread: 0,
    },
    {
      id: "chat3",
      name: "王五",
      avatar: "WW",
      lastMessage: "通风系统运行正常，无异常情况",
      time: "昨天",
      unread: 0,
    },
  ]

  // Mock data for groups
  const groups = [
    {
      id: "group1",
      name: "安全生产工作群",
      avatar: "安全",
      lastMessage: "张三: 请各位注意，明天将进行安全检查",
      time: "11:45",
      unread: 5,
      members: 15,
    },
    {
      id: "group2",
      name: "机电设备维护群",
      avatar: "机电",
      lastMessage: "李四: 主排水泵检修完成，恢复正常运行",
      time: "09:20",
      unread: 0,
      members: 8,
    },
    {
      id: "group3",
      name: "通风管理群",
      avatar: "通风",
      lastMessage: "王五: 已完成本周通风系统检查，报告已上传",
      time: "昨天",
      unread: 0,
      members: 6,
    },
  ]

  return (
    <div className="grid gap-4">
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium flex items-center">
              <Bell className="h-5 w-5 text-blue-600 mr-2" />
              公告通知
            </h3>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="p-3 bg-white border rounded-lg cursor-pointer"
                onClick={() => router.push(`/dashboard/messages/announcement/${announcement.id}`)}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">{announcement.title}</h4>
                  {!announcement.isRead && (
                    <Badge variant="destructive" className="text-[10px] h-5">
                      未读
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-2">{announcement.content}</p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{announcement.sender}</span>
                  <span>{announcement.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="chats">
        <TabsList className="grid grid-cols-2 mb-3">
          <TabsTrigger value="chats">聊天</TabsTrigger>
          <TabsTrigger value="groups">工作群</TabsTrigger>
        </TabsList>

        <TabsContent value="chats">
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => router.push(`/dashboard/messages/chat/${chat.id}`)}
                  >
                    <div className="relative">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-medium">
                        {chat.avatar}
                      </div>
                      {chat.unread > 0 && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {chat.unread}
                        </div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{chat.name}</span>
                        <span className="text-xs text-gray-400">{chat.time}</span>
                      </div>
                      <div className="text-sm text-gray-500 truncate">{chat.lastMessage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups">
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => router.push(`/dashboard/messages/group/${group.id}`)}
                  >
                    <div className="relative">
                      <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-medium text-xs">
                        {group.avatar}
                      </div>
                      {group.unread > 0 && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {group.unread}
                        </div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{group.name}</span>
                        <span className="text-xs text-gray-400">{group.time}</span>
                      </div>
                      <div className="text-sm text-gray-500 truncate">{group.lastMessage}</div>
                      <div className="text-xs text-gray-400">{group.members}人</div>
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
