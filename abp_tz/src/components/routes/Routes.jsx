import { lazy, Suspense } from "react";
import { getVinListFetch } from "../Store/Reducer/vinSlice";

const NotFound = lazy(() => import("../NotFound/NotFound"));
const Main = lazy(() => import("../Main/Main"));
const VinList = lazy(() => import("../VinList/VinList"));
const VinIdInfo = lazy(() => import("../VinIdInfo/VinIdInfo"));
const NavBar = lazy(() => import("../Nav/NavBar"));

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
      element: getComponent(NavBar),
      children: [{
        index: true,
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
      },],

    },
    
  ];
}

export default Routes;
