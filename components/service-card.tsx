import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  const content = (
    <Card className="group h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </CardFooter>
    </Card>
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return content
}
