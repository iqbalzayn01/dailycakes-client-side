import anime from "animejs/lib/anime.es.js";
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
      anime({
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
        className="fixed bg-white w-full h-screen overflow-hidden inset-0 z-50 px-5 py-5"
        style={{ display: "none" }}
      >
        <button
          onClick={closeMenu}
          className="float-end font-fontPrimary font-bold uppercase hover:underline"
        >
          Close
        </button>
        <ul className="container-base w-full md:w-fit h-screen flex flex-col items-start justify-center gap-5">
          {dataMenu.map((menuItem) => (
            <li key={menuItem.menu}>
              <Link
                to={menuItem.route}
                className="font-fontPrimary font-semibold text-5xl hover:underline"
              >
                {menuItem.menu}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
