import { CardSkeleton } from "@/shared/ui/components/card-skeleton"
import { DashboardHeader } from "@/widgets/dashboard-header/ui/header"
import { DashboardShell } from "@/widgets/dashboard-shell/ui/shell"

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
