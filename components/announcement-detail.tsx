"use client"

import { Card, CardContent } from "@/components/ui/card"

interface AnnouncementDetailProps {
  announcementId: string
}

export default function AnnouncementDetail({ announcementId }: AnnouncementDetailProps) {
  // Mock announcement data
  const announcement = {
    id: announcementId,
    title: "安全生产月活动通知",
    content: `关于开展2023年安全生产月活动的通知

各部门：

为深入贯彻落实安全生产方针，进一步提高全体员工安全意识，预防和减少安全事故，保障矿山安全生产，公司决定于2023年6月开展安全生产月活动。

一、活动主题
"安全第一，预防为主，综合治理"

二、活动时间
2023年6月1日至6月30日

三、活动内容
1. 安全知识培训：各部门组织员工参加安全知识培训，提高安全意识和应急处理能力。
2. 安全隐患排查：全面排查各区域、各环节的安全隐患，建立隐患台账，及时整改。
3. 应急演练：组织开展应急救援演练，提高应对突发事件的能力。
4. 安全知识竞赛：举办安全知识竞赛，检验员工安全知识掌握情况。

四、工作要求
1. 各部门要高度重视，精心组织，确保活动取得实效。
2. 活动期间，各部门要加强安全检查，严防各类事故发生。
3. 活动结束后，各部门要及时总结经验，形成书面报告报送安全生产部。

特此通知。

安全生产部
2023年6月1日`,
    sender: "安全生产部",
    time: "2023-06-01 09:30",
    isRead: true,
  }

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2">{announcement.title}</h2>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{announcement.sender}</span>
          <span>{announcement.time}</span>
        </div>
        <div className="border-t pt-4">
          <div className="whitespace-pre-line text-sm">{announcement.content}</div>
        </div>
      </CardContent>
    </Card>
  )
}
