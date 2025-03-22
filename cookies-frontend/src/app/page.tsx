import { ContentWrapper, PageWrapper } from "@/components/ui/wrapper";
import { cn } from "@/utils/utils";
import { AboutSection } from "./_components/about-section";
import { CookiesSection } from "./_components/cookies-section";
import { FindUsSection } from "./_components/find-us-section";

export default function Page() {
  const sections = [CookiesSection, AboutSection, FindUsSection];

  return (
    <PageWrapper>
      {sections.map((Section, index) => (
        <ContentWrapper
          key={index}
          className={cn("mt-[10vh]", index === 0 && "mt-[20vh]")}
        >
          <Section />
        </ContentWrapper>
      ))}
    </PageWrapper>
  );
}
