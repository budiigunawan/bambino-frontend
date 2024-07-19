import { Hero } from "../home/hero";
import { Spinner } from "../ui/spinner";

export const LoadingLayout = () => {
  return (
    <div className="my-14 p-4 md:my-20 md:p-0">
      <Hero />
      <div className="flex flex-col items-center gap-2 font-plus">
        <Spinner />
        <p>Wait a momment</p>
      </div>
    </div>
  );
};
