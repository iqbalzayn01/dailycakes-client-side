import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mx-auto px-5 py-10">
      <div className="relative flex items-center justify-between">
        <span className="w-1/2 md:w-1/3 lg:w-1/5 font-style-primary font-bold text-base lg:text-xl text-left">
          Copyright © 2024 DailyCakes. All Right Reserved
        </span>
        <Link
          to={"/"}
          className="logo w-fit h-fit absolute inset-0 mx-auto -translate-y-16 md:translate-y-1/2 font-fontPrimary font-bold uppercase text-2xl tracking-wider"
        >
          DailyCakes
        </Link>
        <Link className="font-style-primary font-semibold text-right">
          Terms of Serveice
        </Link>
      </div>
    </footer>
  );
};
