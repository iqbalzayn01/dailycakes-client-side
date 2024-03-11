import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="span">{children} </span>
        <span className="span">{children} </span>
        <span className="span">{children} </span>
        <span className="span">{children} </span>
      </motion.div>
    </div>
  );
};

ParallaxText.propTypes = {
  children: PropTypes.string,
  baseVelocity: PropTypes.number,
};

export const FeaturedProducts = () => {
  return (
    <section className="relative 2xl:container-base">
      <div className="bg-white">
        <ParallaxText baseVelocity={-3}>Produk Unggulan</ParallaxText>
        <div className="flex flex-col gap-20 px-5">
          <figure className="w-[325px] self-center md:self-start z-20">
            <Link>
              <img
                src="/content/product1.png"
                className="rounded-xl"
                width={325}
                alt="Product 1"
              />
            </Link>
            <figcaption className="pt-5">
              Kombinasi sempurna antara cokelat, krim, dan ceri segar dalam
              setiap gigitan, membuat Kue Black Forest kami menjadi pilihan
              utama untuk pecinta kue.
            </figcaption>
          </figure>
          <figure className="w-[325px] self-center md:self-center z-20">
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
          <figure className="w-[325px] self-center md:self-start z-20">
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
          <figure className="w-[325px] self-center md:self-end z-20">
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
      </div>
    </section>
  );
};
