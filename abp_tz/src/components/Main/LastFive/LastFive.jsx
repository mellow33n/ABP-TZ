import { useSelector, useDispatch } from "react-redux";


import { getVinFetch } from "../../Store/Reducer/vinSlice";

function LastFive() {
  const state = useSelector((data) => data);
  const dispatch = useDispatch();

  function handleClick(event, value) {
    event.preventDefault();
    const pureValue = value.replace('VIN:', '');
    dispatch(getVinFetch(pureValue));
  }

  return (
    <section className="main-bottom">
      {state.lastFiveSearch.map((value) => (
        <button
          className="main-bottom-btn"
          key={value + " id" + Math.random() * 10}
          onClick={(event)=>handleClick(event, value)}
        >
          {value}
        </button>
      ))}
    </section>
  );
}

export default LastFive;
