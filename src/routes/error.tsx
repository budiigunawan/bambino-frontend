import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <section className="md:my-20 my-14">
        <h2 className="font-bold font-poppins text-4xl text-b-black uppercase">
          Page not found
        </h2>
        <div className="mt-10">
          <p>Our apologies. There has been an error.</p>
          <p>The page you are looking for cannot be found.</p>
          <p>
            Please make sure the URL is correct or surf over to our other pages.
          </p>
        </div>
        <div className="mt-4">
          <Link
            to={"/home"}
            className="font-bold font-poppins text-lg underline"
          >
            Bambino home page
          </Link>
        </div>
      </section>
    </>
  );
};
