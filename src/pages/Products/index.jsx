import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LoadingScreen from "../../components/LoadingScreen";

import { Header } from "../../sections/Header";
import { ListProducts } from "../../sections/ListProducts";

export default function ProductPage() {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  if (!token) return <Navigate to="/" replace={true} />;
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
        <ListProducts />
      </motion.main>
    </>
  );
}
