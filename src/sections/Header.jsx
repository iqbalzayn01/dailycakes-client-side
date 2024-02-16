import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative mx-auto px-10 py-10">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
        <button className="hidden md:block font-style-primary font-bold hover:underline ">
          Katalog
        </button>
        <a
          href="#"
          className="logo font-fontPrimary font-bold uppercase text-2xl tracking-wider"
        >
          DailyCakes
        </a>
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
