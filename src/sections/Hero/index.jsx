import { useNavigate } from "react-router-dom";
import CButton from "../../components/CButton";

export const Hero = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleCTA = () => {
    if (!token) {
      navigate("/signin");
    } else {
      navigate("/products");
    }
  };

  return (
    <section className="container-base w-full md:w-2/3 h-screen grid place-content-center px-5 py-5">
      <div className="flex flex-col place-content-center gap-5">
        <h1 className="font-style-primary font-semibold text-4xl md:text-6xl text-center">
          Tingkatkan Kebahagiaan Setiap Gigitan
        </h1>
        <p className="font-fontSecondary text-center">
          Bergabunglah dalam petualangan rasa kami! Temukan kelezatan setiap
          gigitan kue dan roti segar kami yang disiapkan dengan cinta dan
          dedikasi.
        </p>
        <CButton
          action={handleCTA}
          className="w-fit self-center bg-black hover:bg-pinkcustom font-fontSecondary text-white px-6 py-4 rounded-full"
          type="button"
        >
          Jelajahi Produk Kami
        </CButton>
      </div>
    </section>
  );
};
