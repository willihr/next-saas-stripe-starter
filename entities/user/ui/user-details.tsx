import { User } from "@prisma/client"

interface UserDetailsProps {
  user: Pick<User, "email" | "name">
}

export function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className="flex flex-col space-y-1 leading-none">
      {user?.name && <p className="font-medium">{user?.name}</p>}
      {user?.email && (
        <p className="w-[200px] truncate text-sm text-muted-foreground">
          {user?.email}
        </p>
      )}
    </div>
  )
}
