"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Image, Paperclip, Mic, Users } from "lucide-react"

interface GroupChatDetailProps {
  groupId: string
}

interface Message {
  id: string
  content: string
  sender:
    | {
        id: string
        name: string
        avatar: string
      }
    | "me"
  time: string
}

export default function GroupChatDetail({ groupId }: GroupChatDetailProps) {
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock group data
  const group = {
    id: groupId,
    name: "安全生产工作群",
    avatar: "安全",
    members: 15,
  }

  // Mock members
  const members = [
    { id: "user1", name: "张三", avatar: "ZS" },
    { id: "user2", name: "李四", avatar: "LS" },
    { id: "user3", name: "王五", avatar: "WW" },
    { id: "user4", name: "赵六", avatar: "ZL" },
  ]

  // Mock messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg1",
      content: "各位注意，明天将进行安全检查，请各部门做好准备。",
      sender: members[0],
      time: "09:15",
    },
    {
      id: "msg2",
      content: "收到，我们会做好准备。",
      sender: members[1],
      time: "09:20",
    },
    {
      id: "msg3",
      content: "检查重点是什么？",
      sender: "me",
      time: "09:25",
    },
    {
      id: "msg4",
      content: "重点检查通风系统、排水系统和电力系统，特别是近期维修过的设备。",
      sender: members[0],
      time: "09:30",
    },
    {
      id: "msg5",
      content: "我们通风系统已经做好准备，设备运行正常。",
      sender: members[2],
      time: "09:35",
    },
    {
      id: "msg6",
      content: "排水系统也已检查完毕，无异常情况。",
      sender: members[3],
      time: "09:40",
    },
    {
      id: "msg7",
      content: "好的，我会通知相关人员。",
      sender: "me",
      time: "09:45",
    },
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim() === "") return

    const newMessage: Message = {
      id: `msg${messages.length + 1}`,
      content: message,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setMessage("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-b p-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium mr-3 text-xs">
            {group.avatar}
          </div>
          <div>
            <div className="font-medium">{group.name}</div>
            <div className="text-xs text-gray-500">{group.members}人</div>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Users className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-4 flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            {msg.sender !== "me" && (
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium mr-2">
                {msg.sender.avatar}
              </div>
            )}
            <div className="max-w-[70%]">
              {msg.sender !== "me" && <div className="text-xs text-gray-500 mb-1">{msg.sender.name}</div>}
              <div className={`p-3 rounded-lg ${msg.sender === "me" ? "bg-blue-600 text-white" : "bg-white border"}`}>
                {msg.content}
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${msg.sender === "me" ? "text-right" : "text-left"}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white border-t p-3 flex items-center">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Image className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Paperclip className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Mic className="h-5 w-5" />
        </Button>
        <Input
          placeholder="输入消息..."
          className="mx-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage()
            }
          }}
        />
        <Button
          variant="primary"
          size="icon"
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={handleSendMessage}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
