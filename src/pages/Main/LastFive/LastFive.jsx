import "./lastfive.scss";

import { useSelector, useDispatch } from "react-redux";

import { getVinFetch } from "../../../components/Store/Reducer/vinSlice";

function LastFive() {
  const state = useSelector((data) => data);
  const dispatch = useDispatch();

  function handleClick(event, value) {
    event.preventDefault();
    const pureValue = value.replace("VIN:", "");
    dispatch(getVinFetch(pureValue));
  }

  return (
    <section className="main-bottom">
      <h3>Last search requests</h3>
      {state.lastFiveSearch.map((value) => (
        <p
          className="main-bottom-btn"
          key={value + " id" + Math.random() * 10}
          onClick={(event) => handleClick(event, value)}
        >
          {value}
        </p>
      ))}
    </section>
  );
}

export default LastFive;
