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
      <Card>
        <div>Il a de grosses noisettes, mais pas de bonnes data</div>
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
      <div className="flex flex-col gap-24 mt-32 items-center md:flex-row">
        {showcasedCookies.map((cookie) => (
          <Cookie
            key={cookie.id}
            name={cookie.name}
            price={cookie.price}
            description={cookie.description!}
            imageUrl={cookie.imageUrl}
          />
        ))}
      </div>
    </>
  );
}
