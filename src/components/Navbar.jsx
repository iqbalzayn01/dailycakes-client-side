import anime from "animejs/lib/anime.es.js";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const Navbar = ({ isOpen }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const menu = navRef.current;
    if (isOpen) {
      menu.style.display = "block";
      anime({
        // targets: navRef.current.children,
        targets: menu,
        translateY: [200, 0],
        delay: anime.stagger(100),
        opacity: [0, 1],
        easing: "easeInOutExpo",
        duration: 1000,
      });
    } else {
      anime({
        targets: menu,
        translateY: 200,
        delay: anime.stagger(100),
        opacity: 0,
        easing: "easeOutExpo",
        duration: 1000,
        complete: () => {
          menu.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="absolute bg-white inset-0 z-50 px-5 py-5"
        style={{ display: "none" }}
      >
        <button className="float-end font-fontHeading font-bold uppercase hover:underline">
          Close
        </button>
        <ul className="container mx-auto px-5 w-fit h-screen flex flex-col items-start justify-center gap-5">
          <li>
            <a
              href="#"
              className="font-fontHeading font-semibold text-5xl hover:underline"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-fontHeading font-semibold text-5xl hover:underline"
            >
              Produk
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-fontHeading font-semibold text-5xl hover:underline"
            >
              Promo Spesial
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-fontHeading font-semibold text-5xl hover:underline"
            >
              Hubungi Kami
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
