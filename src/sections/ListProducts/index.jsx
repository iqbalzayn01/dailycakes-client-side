import { RenderProductItems } from "./renderProductItems";

export const ListProducts = () => {
  return (
    <>
      <section className="container-base w-full md:w-2/3 h-fit grid px-5 py-5">
        <h1 className="font-style-primary font-semibold text-4xl md:text-6xl text-start mt-20">
          Daftar Produk
        </h1>
        <div className="flex flex-col place-content-center gap-5 mt-20">
          <ul className="flex flex-col gap-5">
            <RenderProductItems />
          </ul>
        </div>
      </section>
      ;
    </>
  );
};
