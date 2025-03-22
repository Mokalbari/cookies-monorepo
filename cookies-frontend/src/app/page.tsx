import { ContentWrapper, PageWrapper } from "@/components/ui/wrapper";
import { CookiesSection } from "./_components/cookies-section";
import { FindUsSection } from "./_components/find-us-section";

export default function Page() {
  return (
    <PageWrapper>
      <ContentWrapper className="mt-6">
        <CookiesSection />
        <FindUsSection />
      </ContentWrapper>
    </PageWrapper>
  );
}
