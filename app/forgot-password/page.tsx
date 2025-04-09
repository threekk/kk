"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield } from "lucide-react"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [step, setStep] = useState(1)
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [countdown, setCountdown] = useState(60)

  const handleSendCode = () => {
    // In a real app, you would send a verification code to the phone number
    setIsCodeSent(true)

    // Start countdown
    let timer = countdown
    const interval = setInterval(() => {
      timer -= 1
      setCountdown(timer)

      if (timer <= 0) {
        clearInterval(interval)
        setIsCodeSent(false)
        setCountdown(60)
      }
    }, 1000)
  }

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would verify the code
    setStep(2)
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would reset the password
    router.push("/")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-100">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="space-y-1 pb-6">
          <Button variant="ghost" size="icon" className="absolute left-4 top-4" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">忘记密码</CardTitle>
          <CardDescription className="text-center">
            {step === 1 ? "请输入您的手机号码获取验证码" : "请设置新密码"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <form onSubmit={handleVerifyCode} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="phone">手机号码</Label>
                <Input
                  id="phone"
                  placeholder="请输入手机号码"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="code">验证码</Label>
                  <Button type="button" variant="outline" size="sm" onClick={handleSendCode} disabled={isCodeSent}>
                    {isCodeSent ? `重新发送(${countdown}s)` : "获取验证码"}
                  </Button>
                </div>
                <Input
                  id="code"
                  placeholder="请输入验证码"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base">
                验证
              </Button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="new-password">新密码</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="请输入新密码"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">确认密码</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="请再次输入新密码"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base">
                重置密码
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  )
}
