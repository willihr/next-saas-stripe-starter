import { redirect } from "next/navigation"

import { authOptions } from "@/shared/lib/auth"
import { getCurrentUser } from "@/shared/lib/session"
import { getUserSubscriptionPlan } from "@/shared/lib/subscription"
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert"
import { BillingInfo } from "@/widgets/billing-info/ui/billing-info"
import { DashboardHeader } from "@/widgets/dashboard-header/ui/header"
import { Icons } from "@/shared/ui/components/icons"
import { DashboardShell } from "@/widgets/dashboard-shell/ui/shell"

export const metadata = {
  title: "Billing",
  description: "Manage billing and your subscription plan.",
}

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-8">
        <Alert className="!pl-14">
          <Icons.warning />
          <AlertTitle>This is a demo app.</AlertTitle>
          <AlertDescription>
            SaaS Starter app is a demo app using a Stripe test environment. You can
            find a list of test card numbers on the{" "}
            <a
              href="https://stripe.com/docs/testing#cards"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-8"
            >
              Stripe docs
            </a>
            .
          </AlertDescription>
        </Alert>
        <BillingInfo
          subscriptionPlan={subscriptionPlan}
        />
      </div>
    </DashboardShell>
  )
}
