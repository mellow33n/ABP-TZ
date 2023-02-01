import { useSelector } from "react-redux";

function ResultCards({ sectClassName }) {
  const state = useSelector((data) => data);

  switch (sectClassName) {
    case "main-right-clean":
      return (
        <>
          {state.searchResults.results.map((value, index) => (
            <div className="main-right-string" key={index}>
              <p className="main-right-string-value">{value.Variable + ":"}</p>
              <p className="main-right-string-value">{value.Value}</p>
            </div>
          ))}
        </>
      );
    case "main-right-error":
      return (
        <>
          {state.searchResults.errors.map((value, index) => (
            <div className="main-right-string" key={index}>
              <p className="main-right-string-value">{value.Variable + ":"}</p>
              <p className="main-right-string-value">{value.Value}</p>
            </div>
          ))}
        </>
      );

    case "main-right":
      return <h3 className="main-right-iddle">Search result will be here</h3>;

    default:
      return <h3 className="main-right-iddle">Secret level</h3>;
  }
}

export default ResultCards;
