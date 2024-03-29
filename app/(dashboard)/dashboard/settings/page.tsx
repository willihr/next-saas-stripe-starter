import { redirect } from "next/navigation"

import { authOptions } from "@/shared/lib/auth"
import { getCurrentUser } from "@/shared/lib/session"
import { DashboardHeader } from "@/widgets/dashboard-header/ui/header"
import { DashboardShell } from "@/widgets/dashboard-shell/ui/shell"
import { UserNameForm } from "@/features/update-user-name/ui/user-name-form"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name || "" }} />
      </div>
    </DashboardShell>
  )
}
