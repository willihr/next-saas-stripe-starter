"use client"

import { generateUserStripe } from '../api/generate-user-stripe'
import { Icons } from "@/shared/ui/components/icons"
import { Button } from "@/shared/ui/button"
import { SubscriptionPlan, UserSubscriptionPlan } from "@/types"
import { useTransition } from 'react'

interface BillingFormButtonProps {
  offer: SubscriptionPlan;
  subscriptionPlan: UserSubscriptionPlan;
  year: boolean;
}

export function BillingFormButton({ year, offer, subscriptionPlan }: BillingFormButtonProps) {
  let [isPending, startTransition] = useTransition();
  const generateUserStripeSession = generateUserStripe.bind(
    null,
    offer.stripeIds[year ? "yearly" : "monthly"]
  );

  const stripeSessionAction = () => startTransition(async () => await generateUserStripeSession());

  return (
    <Button
      variant="default"
      className="w-full"
      disabled={isPending}
      onClick={stripeSessionAction}
    >
      {isPending ? (
        <>
          <Icons.spinner className="mr-2 size-4 animate-spin" /> Loading...
        </>
      ) : (
        <>
          {subscriptionPlan.stripePriceId === offer.stripeIds[year ? "yearly" : "monthly"]
            ? "Manage Subscription"
            : "Upgrade"}
        </>
      )}
    </Button>
  )
}
