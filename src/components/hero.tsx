export const Hero = () => {
  return (
    <section className="relative">
      <img
        className="block object-cover w-full h-auto"
        src="https://im.uniqlo.com/global-cms/spa/resd6ff774fc9c6f8d3062d4a823cea5da6fr.jpg"
        alt="hero"
      />
      <div className="absolute bottom-10 left-6 font-poppins text-white">
        <h1 className="text-4xl font-bold">Bambino</h1>
        <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet.</h3>
      </div>
    </section>
  );
};
