import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { usePageStore } from "./stores/page";
import { LoadingLayout } from "./components/layout/loading-layout";

export const App = () => {
  const { pageLoaded } = usePageStore();

  return (
    <>
      {!pageLoaded ? <LoadingLayout /> : null}
      <RouterProvider router={router} />
    </>
  );
};
