// import { useRef } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="container-base w-2/3 h-screen grid place-content-center px-5 py-5">
      <div className="flex flex-col place-content-center gap-5">
        <h1 className="font-style-primary font-semibold text-5xl md:text-6xl text-center">
          Tingkatkan Kebahagiaan Setiap Gigitan
        </h1>
        <p className="font-fontSecondary text-center">
          Bergabunglah dalam petualangan rasa kami! Temukan kelezatan setiap
          gigitan kue dan roti segar kami yang disiapkan dengan cinta dan
          dedikasi.
        </p>
        <motion.button
          className="w-fit self-center bg-black font-fontSecondary text-white px-6 py-4 rounded-full"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Jelajahi Produk Kami
        </motion.button>
      </div>
    </section>
  );
};
