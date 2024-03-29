import { CardSkeleton } from "@/shared/ui/components/card-skeleton"
import { DashboardHeader } from "@/widgets/dashboard-header/ui/header"
import { DashboardShell } from "@/widgets/dashboard-shell/ui/shell"
import { Button } from "@/shared/ui/button"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <Button>Fake button</Button>
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
