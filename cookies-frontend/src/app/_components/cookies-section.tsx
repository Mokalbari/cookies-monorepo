import { Card } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { ShowcasedCookiesQuery } from "@/graphql/generated";
import { query } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { Cookie } from "./cookie";

const GET_SHOWCASED_COOKIES = gql`
  query showcasedCookies {
    findShowcasedCookies {
      id
      name
      price
      description
      imageUrl
    }
  }
`;

export async function CookiesSection() {
  const { data, error } = await query<ShowcasedCookiesQuery>({
    query: GET_SHOWCASED_COOKIES,
  });

  if (error || !data.findShowcasedCookies) {
    return (
      <Card className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <Title titleSize="regular">Oh non, boss</Title>
        <div>❓❓❓</div>
        <div className="mt-4">
          On a de bons cookies, mais pas de bons serveurs.
        </div>
        <div>Viens le retrouver en boutique plutôt...</div>
        <div>🍪</div>
      </Card>
    );
  }

  const showcasedCookies = data.findShowcasedCookies;

  return (
    <>
      <Title titleSize="massive" titleColor="charcoal" className="text-center">
        Des cookies de patron,
        <br /> pas pour les amateurs
      </Title>
      <div className="relative flex flex-col gap-24 mt-32 items-center md:flex-row">
        {showcasedCookies.map((cookie, index) => (
          <Cookie
            key={cookie.id}
            name={cookie.name}
            price={cookie.price}
            description={cookie.description ?? ""}
            imageUrl={cookie.imageUrl}
            isFirstChild={index === 0}
          />
        ))}
      </div>
    </>
  );
}
