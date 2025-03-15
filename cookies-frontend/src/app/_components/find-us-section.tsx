import { bebasNeue } from "@/styles/font"
import { cn } from "@/utils/utils"
import Image from "next/image"

export function FindUsSection() {
  return (
    <>
      <h2
        className={cn(
          "text-4xl sm:text-8xl text-center text-dahlia",
          bebasNeue.className
        )}
      >
        Où nous trouver ?
      </h2>
      <div className="flex justify-between items-start mt-8 sm:mt-12 gap-20">
        <div className="text-lg sm:text-2xl max-w-prose space-y-6 sm:space-y-12">
          <p>
            🍪{" "}
            <span className={`tracking-wider ${bebasNeue.className}`}>
              Nos cookies sont disponibles
            </span>{" "}
            exclusivement en ligne pour une expérience de commande rapide et
            livraison VIP. Nous ne sommes pas là pour perdre du temps, donc si
            tu veux goûter Le Cookie du Patron, tu sais où cliquer.
          </p>
          <p>
            🚚{" "}
            <span className={`tracking-wider ${bebasNeue.className}`}>
              Livraison express
            </span>{" "}
            – Pour que chaque bouchée arrive chez toi dans les meilleures
            conditions, directement à ta porte.
          </p>
          <p>
            💃{" "}
            <span className={`tracking-wider ${bebasNeue.className}`}>
              Showroom Privé
            </span>{" "}
            – Si tu veux vraiment vivre l&apos;expérience, viens tester nos
            cookies en personne dans notre espace exclusif au 2 Rue des beaufs,
            2344 Pafendall Luxembourg.
            <p className="mt-4 sm:mt-8">
              Réservé aux vrais patrons.
              <br />
              <span className="underline">Sur invitation uniquement.</span>
            </p>
          </p>
        </div>
        <div className="relative w-1/3 min-w-sm max-md:hidden">
          <Image
            src="/framboise-epice-2.png"
            alt="Cookie framboise épicée"
            width={815}
            height={816}
          />
        </div>
      </div>
    </>
  )
}
