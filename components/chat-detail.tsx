"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Image, Paperclip, Mic } from "lucide-react"

interface ChatDetailProps {
  chatId: string
}

interface Message {
  id: string
  content: string
  sender: "me" | "other"
  time: string
}

export default function ChatDetail({ chatId }: ChatDetailProps) {
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock chat data
  const chat = {
    id: chatId,
    name: "张三",
    avatar: "ZS",
    status: "在线",
    position: "安全主管",
  }

  // Mock messages
  const [messages, setMessages] = useState<Message[]>([
    { id: "msg1", content: "你好，有什么需要帮助的吗？", sender: "other", time: "10:15" },
    { id: "msg2", content: "明天安全检查的时间确定了吗？", sender: "me", time: "10:20" },
    { id: "msg3", content: "是的，已经确定了，明天上午9点开始，预计持续3小时。", sender: "other", time: "10:25" },
    { id: "msg4", content: "好的，我会通知相关部门做好准备。", sender: "me", time: "10:28" },
    {
      id: "msg5",
      content: "请特别注意检查通风系统和排水系统，这两个系统最近有些异常情况。",
      sender: "other",
      time: "10:30",
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
      <div className="bg-white border-b p-3 flex items-center">
        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium mr-3">
          {chat.avatar}
        </div>
        <div>
          <div className="font-medium">{chat.name}</div>
          <div className="text-xs text-gray-500">
            {chat.position} · {chat.status}
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-4 flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            {msg.sender === "other" && (
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium mr-2">
                {chat.avatar}
              </div>
            )}
            <div className="max-w-[70%]">
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
