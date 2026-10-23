import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundHero from "./components/NotFoundHero";
import GradientBG from "./components/ui/GradientBG";
import Section from "./components/ui/Section";
import Container from "./components/ui/Container";
import NotFoundArt from "./components/ui/NotFoundArt";

export const metadata: Metadata = {
  title: "Page not found | Trisha Teh",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <GradientBG className="min-h-screen">
        <Section className="pt-32 md:pt-36">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <NotFoundHero />
              <div className="lg:col-span-6">
                <NotFoundArt />
              </div>
            </div>
          </Container>
        </Section>
      </GradientBG>
      <Footer />
    </>
  );
}
