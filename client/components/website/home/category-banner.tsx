import CategoryText from "./category-text";

const CategoryBanner = () => {
  return (
    <section className="flex justify-center bg-cream1">
      <div
        className="container grid md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 lg:gap-5 
        py-5 md:py-8 px-4 md:min-h-[650px]"
      >
        <div
          className="md:row-span-2 category-banner"
          style={{ backgroundImage: "url(/banner/electronics.jpg)" }}
        >
          <CategoryText title="Electronics" itemCount={27} path="electronics" />
        </div>
        <div
          className="md:col-span-2 category-banner"
          style={{ backgroundImage: "url(/banner/accessories.jpg)" }}
        >
          <CategoryText title="Accesories" itemCount={32} path="accesories" />
        </div>
        <div
          className="category-banner"
          style={{ backgroundImage: "url(/banner/sports.jpg)" }}
        >
          <CategoryText title="Sports" itemCount={8} path="sports" />
        </div>
        <div
          className="category-banner"
          style={{ backgroundImage: "url(/banner/t-shirt.jpg)" }}
        >
          <CategoryText title="T-shirt" itemCount={15} path="t-shirt" />
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
