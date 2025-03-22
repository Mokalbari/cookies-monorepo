import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Like } from "@/components/ui/like";
import { Title } from "@/components/ui/title";
import { bebasNeue } from "@/styles/font";
import { cn } from "@/utils/utils";
import { Crown } from "lucide-react";
import Image from "next/image";

interface Props {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  isFirstChild: boolean;
}

export function Cookie({
  name,
  price,
  imageUrl,
  description,
  isFirstChild,
}: Props) {
  return (
    <Card className="grid static w-[300px]">
      <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-44 relative">
          <Image
            src={imageUrl}
            alt={`${name}, ${description}`}
            width="1000"
            height="1000"
            loading="lazy"
            sizes="(max-width: 768px) 60vw, 10vw"
          />
          <Crown
            className={cn(
              "absolute -top-2 -rotate-45 -left-5",
              !isFirstChild && "hidden",
            )}
          />
        </div>
      </div>
      <div className="place-self-end">
        <Like />
      </div>
      <div
        className={cn(
          "place-items-center mt-8 text-charcoal text-center text-pretty",
          bebasNeue.className,
        )}
      >
        <div className="text-2xl">{String(price)}€</div>
        <Title
          className="mt-6"
          level="h3"
          titleColor="charcoal"
          titleSize="regular"
        >
          {name}
        </Title>
        <div className="mt-3 text-2xl">{description}</div>
      </div>
      <hr className="mt-3" />
      <Button className="p-0 mt-3" intent="hollow">
        Ajout au panier
      </Button>
    </Card>
  );
}
