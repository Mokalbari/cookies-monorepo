import { bebasNeue } from "@/styles/font";
import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const titleVariants = cva(`uppercase ${bebasNeue.className}`, {
  variants: {
    titleColor: {
      dahlia: "text-dahlia",
      white: "text-white",
      charcoal: "text-charcoal",
    },
    titleSize: {
      massive: "text-4xl md:text-8xl",
      medium: "text-4xl md:text-6xl",
      large: "text-5xl",
      regular: "text-3xl",
    },
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  level?: HeadingLevel;
  children: React.ReactNode;
}

export function Title({
  level = "h2",
  titleColor,
  titleSize,
  children,
  className,
  ...rest
}: Props) {
  const Tag = level;

  return (
    <Tag
      className={cn(titleVariants({ titleColor, titleSize }), className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
