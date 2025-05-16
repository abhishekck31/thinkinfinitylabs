import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  avatarUrl?: string
}

export function TestimonialCard({ quote, author, role, company, avatarUrl }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 text-4xl">"</div>
        <blockquote className="mb-6 text-muted-foreground">{quote}</blockquote>
      </CardContent>
      <CardFooter className="border-t p-6">
        <div className="flex items-center gap-4">
          <Avatar>
            {avatarUrl ? (
              <img src={avatarUrl || "/placeholder.svg"} alt={author} />
            ) : (
              <AvatarFallback>{initials}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">
              {role}, {company}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
