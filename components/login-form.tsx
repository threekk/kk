"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function LoginForm() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials here
    router.push("/dashboard")
  }

  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader className="space-y-1 pb-6">
        <div className="flex justify-center mb-6">
          <div className="bg-transparent p-0 rounded-full">
            <Image src="/images/logo.png" alt="泡金山矿务通" width={80} height={80} className="h-20 w-20" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center">泡金山矿务通</CardTitle>
        <CardDescription className="text-center">请输入您的用户名和密码登录</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username">用户名</Label>
            <Input
              id="username"
              placeholder="请输入用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-12"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">密码</Label>
            <Input
              id="password"
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm font-normal">
                记住密码
              </Label>
            </div>
            <Button variant="link" className="p-0 h-auto" onClick={() => router.push("/forgot-password")}>
              忘记密码?
            </Button>
          </div>
          <Button type="submit" className="w-full h-12 text-base">
            登录
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
