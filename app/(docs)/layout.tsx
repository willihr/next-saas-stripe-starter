import Link from "next/link"

import { DocsSearch } from "@/components/docs/search"
import { DocsSidebarNav } from "@/widgets/docs-sidebar-nav/ui/sidebar-nav"
import { NavBar } from "@/widgets/navbar/ui/navbar"
import { SiteFooter } from "@/widgets/site-footer/ui/site-footer"
import { Icons } from "@/shared/ui/components/icons"
import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { getCurrentUser } from "@/shared/lib/session"

interface DocsLayoutProps {
  children: React.ReactNode
}

const rightHeader = () => (
  <div className="flex flex-1 items-center space-x-4 sm:justify-end">
    <div className="hidden lg:flex lg:grow-0">
      <DocsSearch />
    </div>
    <div className="flex lg:hidden">
      <Icons.search className="size-6 text-muted-foreground" />
    </div>
    <nav className="flex space-x-4">
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.gitHub className="size-7" />
        <span className="sr-only">GitHub</span>
      </Link>
    </nav>
  </div>
)

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar user={user} items={docsConfig.mainNav} rightElements={rightHeader()}>
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </NavBar>
      <div className="container flex-1">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  )
}
