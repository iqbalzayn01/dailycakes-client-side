import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-50 w-full bg-white mx-auto px-10 py-5">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
        <button className="hidden md:block font-style-primary font-bold hover:underline ">
          Katalog
        </button>
        <Link
          to={"/"}
          className="logo font-fontPrimary font-bold text-pinkcustom text-2xl uppercase  tracking-wider"
        >
          DailyCakes
        </Link>
        <button
          onClick={toggleMenu}
          className="hidden md:block font-style-primary font-bold hover:underline "
        >
          Menu
        </button>
        <Navbar isOpen={isOpen} closeMenu={() => setIsOpen(!isOpen)} />

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-center gap-10">
          <button className="font-style-primary font-bold hover:underline">
            Katalog
          </button>
          <button
            onClick={toggleMenu}
            className="font-style-primary font-bold hover:underline"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};
