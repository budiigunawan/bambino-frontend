import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { usePageStore } from "./stores/page";

export const App = () => {
  const { pageLoaded } = usePageStore();

  return (
    <>
      {!pageLoaded ? <p>Loading...</p> : null}
      <RouterProvider router={router} />
    </>
  );
};
