import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const dataMenu = [
  {
    menu: "Tentang Kami",
    route: "/tentangkami",
  },
  {
    menu: "Produk",
    route: "/produk",
  },
  {
    menu: "Promo Spesial",
    route: "/promospesial",
  },
  {
    menu: "Hubungi Kami",
    route: "/hubungikami",
  },
];

export const Navbar = ({ isOpen, closeMenu }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const menu = navRef.current;
    if (isOpen) {
      menu.style.display = "block";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed bg-white w-full h-screen overflow-hidden inset-0 z-50 px-5 py-5"
        >
          <button
            onClick={closeMenu}
            className="float-end font-fontPrimary font-bold uppercase hover:underline"
          >
            Close
          </button>
          <ul className="container-base w-full md:w-fit h-screen flex flex-col items-start justify-center gap-5">
            {dataMenu.map((menuItem, index) => (
              <motion.li
                key={menuItem.menu}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <Link
                  to={menuItem.route}
                  className="font-fontPrimary font-semibold text-5xl hover:underline"
                >
                  {menuItem.menu}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
