"use client";

import Link from "next/link";
import { Suspense, useState } from 'react';

import { BillingFormButton } from "@/features/generate-user-stripe-session/ui/billing-form-button";
import { Icons } from "@/shared/ui/components/icons";
import { Button, buttonVariants } from "@/shared/ui/button";
import { Switch } from '@/shared/ui/switch';
import { pricingData } from "@/config/subscriptions";
import { useSigninModal } from "@/shared/lib/hooks/use-signin-modal";
import { UserSubscriptionPlan } from "@/types";
import { PricingCard } from "@/entities/price/ui/pricing-card";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  const isYearlyDefault = (!subscriptionPlan?.interval || subscriptionPlan.interval === "year") ? true : false;
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault);
  const signInModal = useSigninModal();


  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mx-auto mb-10 flex w-full flex-col gap-5">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Pricing</p>
        <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl">
          Start at full speed !
        </h2>
      </div>

      <div className="mb-4 flex items-center gap-5">
        <span>Monthly Billing</span>
        <Switch
          checked={isYearly}
          onCheckedChange={toggleBilling}
          role="switch"
          aria-label="switch-year"
        />
        <span>Annual Billing</span>
      </div>

      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
        {pricingData.map((offer) => (
          <PricingCard key={offer.title} plan={offer} isYearly={isYearly} CtaButton={
            userId && subscriptionPlan ? (
              offer.title === 'Starter' ? (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    className: 'w-full',
                    variant: 'default',
                  })}
                >
                  Go to dashboard
                </Link>
              ) : (
                <BillingFormButton year={isYearly} offer={offer} subscriptionPlan={subscriptionPlan} />
              )
            ) : (
              <Button onClick={signInModal.onOpen}>Sign in</Button>
            )
          } />
        ))}
      </div>

      <p className="mt-3 text-balance text-center text-base text-muted-foreground">
        Email <a className="font-medium text-primary hover:underline" href="mailto:support@saas-starter.com">support@saas-starter.com</a> for to contact our support team.
        <br />
        <strong>You can test the subscriptions and won&apos;t be charged.</strong>
      </p>
    </section>
  )
}
