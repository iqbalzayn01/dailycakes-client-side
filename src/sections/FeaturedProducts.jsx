import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";

export const FeaturedProducts = () => {
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const elementOffset = animatedElementRef.current.offsetTop;
      const elementHeight = animatedElementRef.current.offsetHeight;

      const isVisible =
        scrollPosition + windowHeight > elementOffset &&
        scrollPosition < elementOffset + elementHeight;

      if (isVisible) {
        anime({
          targets: animatedElementRef.current,
          translateX: [100, -100],
          opacity: 1,
          duration: 1000,
          easing: "easeInOutQuad",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-x-hidden 2xl:container-base mx-auto px-5 py-10">
      <p
        ref={animatedElementRef}
        className="absolute inset-0 z-10 text-center transform translate-y-1/2 font-fontPrimary text-9xl text-slate-200 italic"
      >
        Produk Unggulan
      </p>
      <div className="flex flex-col gap-20">
        <figure className="w-[325px] self-start z-20">
          <Link>
            <img
              src="/content/product1.png"
              className="rounded-xl"
              width={325}
              alt="Product 1"
            />
          </Link>
          <figcaption className="pt-5">
            Kombinasi sempurna antara cokelat, krim, dan ceri segar dalam setiap
            gigitan, membuat Kue Black Forest kami menjadi pilihan utama untuk
            pecinta kue.
          </figcaption>
        </figure>
        <figure className="w-[325px] self-center z-20">
          <Link>
            <img
              src="/content/product2.png"
              className="rounded-xl"
              width={325}
              alt="Product 2"
            />
          </Link>
          <figcaption className="pt-5">
            Nikmati kesegaran sereal dan kaya nutrisi multigrain dalam setiap
            irisan Roti Sereal Multigrain kami, sempurna untuk sarapan atau
            camilan sehat sepanjang hari.
          </figcaption>
        </figure>
        <figure className="w-[325px] self-start z-20">
          <Link>
            <img
              src="/content/product3.png"
              className="rounded-xl"
              width={325}
              alt="Product 3"
            />
          </Link>
          <figcaption className="pt-5">
            Rasakan kelembutan krim keju dan kelezatan kue merah muda yang
            lembut dalam Kue Red Velvet kami, sebuah kombinasi yang tak
            terlupakan untuk momen spesial.
          </figcaption>
        </figure>
        <figure className="w-[325px] self-end z-20">
          <Link>
            <img
              src="/content/product4.png"
              className="rounded-xl"
              width={325}
              alt="Product 4"
            />
          </Link>
          <figcaption className="pt-5">
            Dengan aroma pandan yang harum dan tekstur lembut yang menggoda,
            Roti Pandan kami menjadi favorit di setiap meja sarapan.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
