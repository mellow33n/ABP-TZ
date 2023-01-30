import { useSelector } from "react-redux";

function Result() {
  const state = useSelector((data) => data);

  return (
    <section className="main-right">
      {state.searchResults.map((value, index) => (
        <div className="main-right-string" key={index}>
          <p className="main-right-string-value">{value.Variable + ":"}</p>
          <p className="main-right-string-value">{value.Value}</p>
        </div>
      ))}
    </section>
  );
}

export default Result;
