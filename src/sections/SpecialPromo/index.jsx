import { Link } from "react-router-dom";

const Image = () => {
  const dataImages = [
    {
      pathImage: "productpromo1.png",
      desc: "Kombinasi sempurna antara cokelat, krim, dan ceri segar dalam setiap gigitan, membuat Kue Black Forest kami menjadi pilihan utama untuk pecinta kue.",
    },
    {
      pathImage: "productpromo2.png",
      desc: "Rasakan kelembutan krim keju dan kelezatan kue merah muda yang lembut dalam Kue Red Velvet kami, sebuah kombinasi yang tak terlupakan untuk momen spesial.",
    },
    {
      pathImage: "productpromo3.png",
      desc: "Dengan aroma pandan yang harum dan tekstur lembut yang menggoda, Roti Pandan kami menjadi favorit di setiap meja sarapan.",
    },
    {
      pathImage: "productpromo4.png",
      desc: "Nikmati kesegaran sereal dan kaya nutrisi multigrain dalam setiap irisan Roti Sereal Multigrain kami, sempurna untuk sarapan atau camilan sehat sepanjang hari.",
    },
  ];

  return (
    <>
      {dataImages.map((item) => (
        <figure key={item.pathImage} className="w-[325px] md:w-auto">
          <Link to={"/"}>
            <img
              src={`/content/${item.pathImage}`}
              className="rounded-xl"
              width={325}
              alt="Produk Promo Spesial"
            />
          </Link>
          <figcaption className="pt-5">{item.desc}</figcaption>
        </figure>
      ))}
    </>
  );
};

export const SpecialPromo = () => {
  return (
    <section className="relative z-40 bg-white px-5 py-20">
      <div className="2xl:container-base grid place-content-center gap-10">
        <div className="grid text-center gap-5">
          <p className="font-fontSecondary font-extrabold text-pinkcustom text-xl tracking-wider">
            Promo Spesial
          </p>
          <h2 className="font-style-primary text-4xl">
            Hemat Besar Setiap Hari!
          </h2>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Image />
        </div>
      </div>
    </section>
  );
};
