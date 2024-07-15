import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const Collections = () => {
  const navigate = useNavigate();

  const hanldeViewMore = () => {
    navigate("/products");
  };
  return (
    <section>
      <h2 className="font-bold font-poppins text-4xl text-b-black text-center uppercase">
        Collection
      </h2>
      <div className="mt-10 grid gap-4 grid-cols-12 p-4 md:p-0">
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
        <div className="min-h-[320px] rounded-lg bg-orange-500 shadow md:col-span-3 col-span-6"></div>
      </div>
      <Button
        className="w-full my-6 border-black rounded-none uppercase"
        variant="outline"
        onClick={hanldeViewMore}
      >
        View more
      </Button>
    </section>
  );
};
