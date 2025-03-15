import { ContentWrapper, PageWrapper } from "@/components/ui/wrapper"
import { FindUsSection } from "./_components/find-us-section"

export default function Page() {
  return (
    <PageWrapper>
      <ContentWrapper className="mt-6">
        <FindUsSection />
      </ContentWrapper>
    </PageWrapper>
  )
}
