import { Tag } from "@/components/ui/tag";
import { Title } from "@/components/ui/title";
import Image from "next/image";

export function AboutSection() {
  return (
    <div className="">
      <Title
        titleSize="massive"
        titleColor="charcoal"
        level="h2"
        className="text-center"
      >
        C&apos;est qui le patron ?
      </Title>
      <div className="flex flex-col items-center mt-8 md:flex-row md:gap-8 ">
        <div>
          <Tag title="C'est moi" className="translate-x-16 md:translate-x-24" />
          <Image
            className="mt-4"
            src="/patron.png"
            alt="Le patron, c'est moi"
            width="248"
            height="376"
            sizes="(max-width: 768px) 90vw, 20vw"
          />
        </div>
        <div className="text-pretty md:max-w-xl">
          <Title
            titleSize="large"
            titleColor="charcoal"
            className="text-center mt-8 md:text-left md:mt-0"
          >
            A propos de moi
          </Title>
          <div className="space-y-4 mt-4">
            <p>
              Je suis le créateur de “Le Cookie du Patron”, une marque qui défie
              les standards de la pâtisserie. Mon objectif ? Offrir des cookies
              puissants, généreux et inoubliables. Chaque bouchée est un symbole
              de qualité et de caractère, fait pour ceux qui n’ont pas peur de
              se démarquer.
            </p>
            <p>
              Pas de place pour la banalité ici, seulement l&apos;exceptionnel.
            </p>
            <p>
              <strong>Le cookie du patron.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
