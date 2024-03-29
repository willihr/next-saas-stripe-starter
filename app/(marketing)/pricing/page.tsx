
import { PricingCards } from '@/widgets/pricing-cards/ui/pricing-cards';
import { PricingFaq } from '@/widgets/pricing-faq/ui/pricing-faq';
import { Skeleton } from '@/shared/ui/skeleton';
import { getCurrentUser } from '@/shared/lib/session';
import { getUserSubscriptionPlan } from '@/shared/lib/subscription';

export const metadata = {
  title: "Pricing",
}

export default async function PricingPage() {
  const user = await getCurrentUser()
  let subscriptionPlan;

  if (user) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id)
  }

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <hr className='container' />
      <PricingFaq />
    </div>
  )
}