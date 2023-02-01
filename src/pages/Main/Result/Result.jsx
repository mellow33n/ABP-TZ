
import { useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";



import ResultCards from "./ResultCards";


function Result() {
  const state = useSelector((data) => data);

  const sectClassLoaded = () => state.searchResults.errors[0].Value === "0" ? "main-right-clean" : "main-right-error";

  return (
    <section className={state.loaded && state.searchResults.errors.length ? sectClassLoaded() : "main-right"}>
      <ResultCards sectClassName={state.loaded && state.searchResults.errors.length ? sectClassLoaded() : "main-right"}/>
    </section>
  );
}

export default Result;

