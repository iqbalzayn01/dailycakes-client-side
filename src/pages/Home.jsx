import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { FeaturedProducts } from "../sections/FeaturedProducts";
import { SpecialPromo } from "../sections/SpecialPromo";
import { Testimonials } from "../sections/Testimonials";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <SpecialPromo />
      <Testimonials />
      <Footer />
    </>
  );
}
