export const Hero = () => {
  return (
    <section className="relative md:mt-20 mt-14">
      <img
        className="block object-cover w-full h-auto"
        src="https://im.uniqlo.com/global-cms/spa/resd6ff774fc9c6f8d3062d4a823cea5da6fr.jpg"
        alt="hero"
      />
      <div className="absolute bottom-10 left-6 font-poppins text-white">
        <h1 className="md:text-4xl text-2xl font-bold">Bambino</h1>
        <h3 className="md:text-xl text-lg font-medium">
          Lorem ipsum dolor sit amet.
        </h3>
      </div>
    </section>
  );
};
