import { useRoutes } from "react-router-dom";
import  Routes  from "./Routes";

export default function RoutesList() {

  const element = useRoutes(Routes());

  return element;
}
