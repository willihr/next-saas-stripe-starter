import { getServerSession } from "next-auth/next"

import { authOptions } from "@/shared/lib/auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}
