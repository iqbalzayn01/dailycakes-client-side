import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LoadingScreen from "../../components/LoadingScreen";
import { Header } from "../../sections/Header";
import { Hero } from "../../sections/Hero";
import { FeaturedProducts } from "../../sections/FeaturedProducts";
import { SpecialPromo } from "../../sections/SpecialPromo";
import { Testimonials } from "../../sections/Testimonials";
import { Footer } from "../../sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        <Hero />
        <FeaturedProducts />
        <SpecialPromo />
        <Testimonials />
        <Footer />
      </motion.main>
    </>
  );
}
