import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GradientBG from "../../components/ui/GradientBG";
import Section from "../../components/ui/Section";
import Container from "../../components/ui/Container";
import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import StoryBeat from "../../components/case-study/StoryBeat";
import CaseStudyOutcome from "../../components/case-study/CaseStudyOutcome";
import MoreCaseStudies from "../../components/case-study/MoreCaseStudies";
import { getAllCaseStudies, getCaseStudy } from "@/lib/case-studies";
import { getProjectBySlug } from "@/lib/projects";

const SITE_URL = "https://www.trishateh.com";

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) return {};

  const ogImage =
    getProjectBySlug(caseStudy.slug)?.heroMedia.src ??
    caseStudy.cardImage ??
    `/images/projects/${caseStudy.slug}.webp`;

  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    alternates: { canonical: `/projects/${caseStudy.slug}` },
    openGraph: {
      title: caseStudy.seo.title,
      description: caseStudy.seo.description,
      url: `${SITE_URL}/projects/${caseStudy.slug}`,
      images: [{ url: ogImage }],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.seo.description,
    url: `${SITE_URL}/projects/${caseStudy.slug}`,
    author: { "@type": "Person", name: "Trisha Teh" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <GradientBG overflow="visible" className="min-h-screen">
        <Section className="pt-32 md:pt-36">
          <Container>
            <CaseStudyHero caseStudy={caseStudy} />

            <div className="space-y-24 md:space-y-32">
              {caseStudy.beats.map((beat, index) => (
                <StoryBeat
                  key={beat.heading}
                  beat={beat}
                  index={index}
                  first={index === 0}
                />
              ))}
            </div>

            {caseStudy.outcome && (
              <div className="mt-24 md:mt-32">
                <CaseStudyOutcome outcome={caseStudy.outcome} />
              </div>
            )}

            <div className="mt-24 md:mt-32">
              <MoreCaseStudies slugs={caseStudy.related} />
            </div>
          </Container>
        </Section>
      </GradientBG>
      <Footer />
    </>
  );
}
