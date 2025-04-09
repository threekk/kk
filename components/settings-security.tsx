"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Check, Lock, Phone, Shield, Smartphone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function SettingsSecurity() {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)
  const [isBindPhoneOpen, setIsBindPhoneOpen] = useState(false)
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [phoneData, setPhoneData] = useState({
    phone: "138****8001",
    newPhone: "",
    verificationCode: "",
  })
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [countdown, setCountdown] = useState(60)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPhoneData((prev) => ({ ...prev, [name]: value }))
  }

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

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and change the password
    setIsChangePasswordOpen(false)
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  const handleBindPhone = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and bind the phone
    setIsBindPhoneOpen(false)
    setPhoneData({
      phone: phoneData.newPhone,
      newPhone: "",
      verificationCode: "",
    })
    setIsCodeSent(false)
    setCountdown(60)
  }

  return (
    <>
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium mb-4">账户安全</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">登录密码</div>
                  <div className="text-xs text-gray-500">定期修改密码可以保护账号安全</div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsChangePasswordOpen(true)}>
                修改
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">绑定手机</div>
                  <div className="text-xs text-gray-500">已绑定：{phoneData.phone}</div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsBindPhoneOpen(true)}>
                修改
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">账号保护</div>
                  <div className="text-xs text-gray-500">已开启登录保护</div>
                </div>
              </div>
              <div className="flex items-center text-green-600">
                <Check className="h-4 w-4 mr-1" />
                <span className="text-sm">已开启</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">设备管理</div>
                  <div className="text-xs text-gray-500">管理已登录的设备</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                查看
              </Button>
            </div>

            <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
              <div className="text-sm text-yellow-700">
                为了您的账号安全，请勿将账号密码告知他人，定期修改密码并开启账号保护。
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Change Password Dialog */}
      <Dialog open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>修改密码</DialogTitle>
            <DialogDescription>请输入当前密码和新密码</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleChangePassword}>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">当前密码</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">新密码</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">确认新密码</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setIsChangePasswordOpen(false)}>
                取消
              </Button>
              <Button type="submit">确认修改</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Bind Phone Dialog */}
      <Dialog open={isBindPhoneOpen} onOpenChange={setIsBindPhoneOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>修改绑定手机</DialogTitle>
            <DialogDescription>请输入新手机号码并验证</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBindPhone}>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="currentPhone">当前手机号</Label>
                <Input id="currentPhone" value={phoneData.phone} disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPhone">新手机号</Label>
                <Input id="newPhone" name="newPhone" value={phoneData.newPhone} onChange={handlePhoneChange} required />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="verificationCode">验证码</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleSendCode}
                    disabled={isCodeSent || !phoneData.newPhone}
                  >
                    {isCodeSent ? `重新发送(${countdown}s)` : "获取验证码"}
                  </Button>
                </div>
                <Input
                  id="verificationCode"
                  name="verificationCode"
                  value={phoneData.verificationCode}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setIsBindPhoneOpen(false)}>
                取消
              </Button>
              <Button type="submit">确认修改</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
