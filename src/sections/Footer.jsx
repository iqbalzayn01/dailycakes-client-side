import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="container-base px-5 py-10">
      <div className="text-center">
        <Link
          to={"/"}
          className="logo font-fontPrimary font-bold uppercase text-2xl tracking-wider"
        >
          DailyCakes
        </Link>
      </div>
    </footer>
  );
};
