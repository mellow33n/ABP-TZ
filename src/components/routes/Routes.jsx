import { lazy, Suspense } from "react";
import { getVinListFetch } from "../Store/Reducer/vinSlice";

const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));
const Main = lazy(() => import("../../pages/Main/Main"));
const VinList = lazy(() => import("../../pages/VinList/VinList"));
const VinIdInfo = lazy(() => import("../../pages/VinIdInfo/VinIdInfo"));


function Routes() {
  function getComponent(Component) {
    return (
      <Suspense>
        <Component />
      </Suspense>
    );
  }
  return [
    {
      path: "/",
      element: getComponent(Main),
    },
    {
      path: "variables",
      element: getComponent(VinList),
    },
    {
      path: "variables/:id",
      element: getComponent(VinIdInfo),
      loader: getVinListFetch,
    },
    {
      path: "*",
      element: getComponent(NotFound),
    },
  ];
}

export default Routes;
