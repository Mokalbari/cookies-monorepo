import { cn } from "@/utils/utils"
import { Card } from "./ui/card"
import { FiveStars } from "./ui/five-stars"

interface Props {
  review: string
  author: string
  age: number
  score: number
  className?: string
}

const fakeData: Props = {
  review:
    "Ce cookie a bouleversé ma journée. Moelleux, généreux et avec juste ce qu'il faut de croquant. J’aurais dû en prendre plus.",
  author: "Lucas",
  age: 36,
  score: 4,
}

export function ReviewCard({
  review = fakeData.review,
  score = fakeData.score,
  author = fakeData.author,
  age = fakeData.age,
  className,
}: Props) {
  return (
    <Card className={cn("bg-egg rounded-md", className)}>
      <FiveStars score={score} />
      <p className="text-base mt-6">{review}</p>
      <div className="text-3xl mt-3">
        {author}, {String(age)} ans
      </div>
    </Card>
  )
}
