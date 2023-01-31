
import { useSelector } from "react-redux";

function Result() {
  const state = useSelector((data) => data);

  const sectClassLoaded = () => state.searchResults.errors[0].Value === "0" ? "main-right-clean" : "main-right-error";


  return (
    <section className={state.loaded ? sectClassLoaded() : "main-right"}>
      {state.searchResults.results.map((value, index) => (
        <div className="main-right-string" key={index}>
          <p className="main-right-string-value">{value.Variable + ":"}</p>
          <p className="main-right-string-value">{value.Value}</p>
        </div>
      ))}
    </section>
  );
}

export default Result;

