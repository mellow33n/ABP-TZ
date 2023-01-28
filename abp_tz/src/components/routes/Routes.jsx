import { lazy } from "react";

const NotFound = lazy(() => import("../NotFound/NotFound"));
const Main = lazy(() => import("../Main/Main"));
const VinList = lazy(() => import("../VinList/VinList"));
const VinIdInfo = lazy(() => import("../VinIdInfo/VinIdInfo"));

function Routes() {
  return [
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "variables",
      element: <VinList/>,
    },
    {
      path: "variables/:id",
      element: <VinIdInfo/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
  ];
}

export default Routes;
