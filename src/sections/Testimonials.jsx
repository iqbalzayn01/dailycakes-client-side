export const Testimonials = () => {
  return (
    <section className="container-base px-5 py-40">
      <div className="h-fit md:h-[400px] flex flex-col md:flex-row gap-10">
        <figure className="flex flex-col self-end items-center gap-5">
          <img
            src="/content/user-1.png"
            className="rounded-full"
            width={184}
            alt="User 1"
          />
          <figcaption className="w-full md:w-2/3 font-fontPrimary font-semibold text-center leading-8">
            &quot;DailyCakes benar-benar membuat hari-hari saya lebih cerah! Kue
            mereka selalu segar dan rasanya luar biasa.&quot; - Maria
          </figcaption>
        </figure>
        <figure className="flex flex-col self-start items-center gap-5">
          <img
            src="/content/user-2.png"
            className="rounded-full"
            width={184}
            alt="User 1"
          />
          <figcaption className="w-full md:w-2/3 font-fontPrimary font-semibold text-center leading-8">
            &quot;Saya sangat senang menemukan DailyCakes! Roti mereka sungguh
            lezat dan pilihan produknya begitu beragam.&quot; - Budi
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
