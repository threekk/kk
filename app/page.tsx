import { redirect } from "next/navigation"
import LoginForm from "@/components/login-form"

export default function Home() {
  // Redirect to dashboard if already logged in
  // This would normally check for an auth token
  const isLoggedIn = false

  if (isLoggedIn) {
    redirect("/dashboard")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-100">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  )
}
