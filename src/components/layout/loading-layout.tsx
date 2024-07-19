import { Spinner } from "../ui/spinner";
import { Navbar } from "./navbar";

export const LoadingLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-2 font-plus h-screen">
        <Spinner />
        <p>Wait a momment</p>
      </div>
    </>
  );
};
