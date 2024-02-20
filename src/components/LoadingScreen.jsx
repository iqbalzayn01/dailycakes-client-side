import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] w-full h-screen m-auto p-5 grid place-content-center bg-gray-50 "
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: "-100%" }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 3, delay: 1, ease: "circInOut" }}
    >
      <motion.div
        className="w-20 h-20 bg-transparent border-2 border-black mx-auto px-5"
        animate={{
          scale: [0.5, 1, 1, 0.5, 0.5],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <h1 className="font-style-primary font-semibold text-6xl">DailyCakes</h1>
    </motion.div>
  );
};
