import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Like } from "@/components/ui/like";
import { Title } from "@/components/ui/title";
import { bebasNeue } from "@/styles/font";
import { cn } from "@/utils/utils";
import Image from "next/image";

interface Props {
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

export function Cookie({ title, price, imageUrl, description }: Props) {
  return (
    <Card className="grid static max-w-[300px]">
      <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-44 relative">
          <Image
            src={imageUrl}
            alt={`${title}, ${description}`}
            width="1000"
            height="1000"
          />
        </div>
      </div>
      <div className="place-items-end">
        <Like />
      </div>
      <div
        className={cn(
          "place-items-center mt-8 text-charcoal",
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
          {title}
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
