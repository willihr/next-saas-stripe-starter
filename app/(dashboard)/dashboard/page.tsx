import { redirect } from "next/navigation"

import { authOptions } from "@/shared/lib/auth"
import { getCurrentUser } from "@/shared/lib/session"
import { EmptyPlaceholder } from "@/shared/ui/components/empty-placeholder"
import { DashboardHeader } from "@/widgets/dashboard-header/ui/header"
import { DashboardShell } from "@/widgets/dashboard-shell/ui/shell"
import { Button } from "@/shared/ui/button"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Panel" text="Create and manage content.">
        <Button>Fake button</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any content yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Fake button</Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
