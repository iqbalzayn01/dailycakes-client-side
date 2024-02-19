import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Image = ({ id }) => {
  return (
    <figure className="w-[325px] md:w-auto">
      <Link to={"/"}>
        <img
          src={`/content/productpromo${id}.png`}
          width={325}
          alt="Produk Promo Spesial"
        />
      </Link>
      <figcaption className="pt-5">
        Kombinasi sempurna antara cokelat, krim, dan ceri segar dalam setiap
        gigitan, membuat Kue Black Forest kami menjadi pilihan utama untuk
        pecinta kue.
      </figcaption>
    </figure>
  );
};

Image.propTypes = {
  id: PropTypes.number,
};

export const SpecialPromo = () => {
  return (
    <section className="relative z-40 bg-white px-5 py-5">
      <div className="container-base grid place-content-center gap-10">
        <div className="grid text-center gap-5">
          <p className="font-fontSecondary font-extrabold text-xl tracking-wider">
            Promo Spesial
          </p>
          <h2 className="font-style-primary text-4xl">
            Hemat Besar Setiap Hari!
          </h2>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((id) => (
            <Image key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
