import { CardSkeleton } from "@/shared/ui/components/card-skeleton"
import { DashboardHeader } from "@/widgets/dashboard-header/ui/header"
import { DashboardShell } from "@/widgets/dashboard-shell/ui/shell"

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
