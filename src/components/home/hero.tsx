export const Hero = () => {
  return (
    <section className="relative md:my-20 my-14">
      <img
        className="block object-cover w-full h-auto"
        src="https://im.uniqlo.com/global-cms/spa/resd6ff774fc9c6f8d3062d4a823cea5da6fr.jpg"
        alt="hero"
      />
      <div className="absolute bottom-10 left-6 font-poppins text-white p-4 bg-gray-500 bg-opacity-50">
        <h1 className="md:text-4xl text-2xl font-bold">Bambino</h1>
        <h3 className="md:text-xl text-lg font-medium">
          Comfort for your little one's journey.
        </h3>
      </div>
    </section>
  );
};
