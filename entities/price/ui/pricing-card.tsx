import { Icons } from "@/shared/ui/components/icons";
import { SubscriptionPlan } from "@/types";

interface PricingCardProps {
  plan: SubscriptionPlan
  isYearly: boolean
  CtaButton: React.ReactNode
}

export function PricingCard({ plan, isYearly, CtaButton }: PricingCardProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl border" key={plan.title}>
      <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
        <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
          {plan.title}
        </p>

        <div className="flex flex-row">
          <div className="flex items-end">
            <div className="flex text-left text-3xl font-semibold leading-6">
              {isYearly && plan.prices.monthly > 0 ? (
                <>
                  <span className="mr-2 text-muted-foreground line-through">${plan.prices.monthly}</span>
                  <span>${plan.prices.yearly / 12}</span>
                </>
              ) : `$${plan.prices.monthly}`}
            </div>
            <div className="-mb-1 ml-2 text-left text-sm font-medium">
              <div>/mo</div>
            </div>
          </div>
        </div>
        {plan.prices.monthly > 0 ? (
          <div className="text-left text-sm text-muted-foreground">
            {isYearly ? `$${plan.prices.yearly} will be charged when annual` : "when charged monthly"}
          </div>
        ) : null}
      </div>

      <div className="flex h-full flex-col justify-between gap-16 p-6">
        <ul className="space-y-2 text-left text-sm font-medium leading-normal">
          {plan.benefits.map((feature) => (
            <li className="flex items-start" key={feature}>
              <Icons.check className="mr-3 size-5 shrink-0" />
              <p>{feature}</p>
            </li>
          ))}

          {plan.limitations.length > 0 && plan.limitations.map((feature) => (
            <li className="flex items-start text-muted-foreground" key={feature}>
              <Icons.close className="mr-3 size-5 shrink-0" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>

        {CtaButton}

      </div>
    </div>
  )
}
