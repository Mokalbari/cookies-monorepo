import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Like } from "@/components/ui/like";
import { Title } from "@/components/ui/title";
import { bebasNeue } from "@/styles/font";
import { cn } from "@/utils/utils";
import Image from "next/image";

export function CookiesSection() {
  return (
    <>
      <Title titleSize="massive" titleColor="charcoal" className="text-center">
        Des cookies de patron,
        <br /> pas pour les amateurs
      </Title>
      <div>
        <Card className="grid static max-w-[300px]">
          <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2">
            <div className="max-w-44 relative">
              <Image
                src="/framboise-epice-2.png"
                alt="Framboise épicée"
                width="1000"
                height="1000"
              />
            </div>
          </div>
          <div className="place-items-end">
            <Like />
          </div>
          <div className={cn("place-items-center mt-8", bebasNeue.className)}>
            <div className="text-2xl">3.99€</div>
            <Title
              className="mt-6"
              level="h3"
              titleColor="charcoal"
              titleSize="regular"
            >
              Le Boss
            </Title>
            <div className="mt-3 text-2xl">Il a de grosses noisettes</div>
          </div>
          <hr className="border-1 mt-3" />
          <Button className="p-0 mt-3" intent="hollow">
            Ajout au panier
          </Button>
        </Card>
      </div>
    </>
  );
}
