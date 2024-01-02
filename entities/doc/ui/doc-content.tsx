import { Doc, Guide, Page } from "contentlayer/generated"

import { Mdx } from "@/shared/ui/mdx-components"

interface DocContentProps {
  doc: Doc | Guide | Page
}

export function DocContent({ doc }: DocContentProps) {
  return (
    <Mdx code={doc.body.code} />
  )
}
