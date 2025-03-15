import { cn } from "@/utils/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ReactNode } from "react"

const buttonVariants = cva(
  "py-3 px-16 text-2xl rounded-sm drop-shadow-md cursor-pointer",
  {
    variants: {
      intent: {
        primary: "bg-dahlia text-white",
        secondary: "py-2 px-8",
        hollow: "drop-shadow-none text-dahlia",
        card: "p-14 rounded-xl text-3xl text-white",
        disabled: "bg-gray-300 text-charcoal/70 cursor-not-allowed",
      },
      cardType: {
        dahlia: "bg-dahlia",
        charcoal: "bg-charcoal",
      },
      secondaryType: {
        cocoa: "bg-cocoa text-white",
        charcoal: "bg-charcoal text-white",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
)

interface BaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
}

interface CardProps extends BaseProps {
  intent: "card"
  cardType: NonNullable<VariantProps<typeof buttonVariants>["cardType"]>
}

interface SecondaryProps extends BaseProps {
  intent: "secondary"
  secondaryType: NonNullable<
    VariantProps<typeof buttonVariants>["secondaryType"]
  >
}

interface RestProps extends BaseProps {
  intent?: Exclude<
    VariantProps<typeof buttonVariants>["intent"],
    "card" | "secondary"
  >
  cardType?: never
}

type Props = CardProps | SecondaryProps | RestProps
export function Button({
  intent,
  cardType,
  secondaryType,
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        buttonVariants({ intent, cardType, secondaryType }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
