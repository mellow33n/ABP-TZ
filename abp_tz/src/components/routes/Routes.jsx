import { lazy, Suspense } from "react";

const NotFound = lazy(() => import("../NotFound/NotFound"));
const Main = lazy(() => import("../Main/Main"));
const VinList = lazy(() => import("../VinList/VinList"));
const VinIdInfo = lazy(() => import("../VinIdInfo/VinIdInfo"));

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
    },
    {
      path: "*",
      element: getComponent(NotFound),
    },
  ];
}

export default Routes;
