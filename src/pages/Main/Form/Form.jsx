import { useState } from "react";
import { useDispatch } from "react-redux";

import { getVinFetch } from "../../../components/Store/Reducer/vinSlice";

function Form() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const regExVin = /^([a-zA-Z0-9]){2,17}$/;

  function handleSumbit(event) {
    event.preventDefault();

    const vinValue = event.target.form[0].value;

    if (regExVin.test(vinValue)) {
      dispatch(getVinFetch(vinValue));
      event.target.form[0].value = "";
    } else {
      setError(true);
    }
  }

  return (
    <form action="" className="main-top">
      <h3>Enter VIN</h3>
      {error ? (
        <>
          <input type="text" className="main-top-input input-error" />
          <p className="input-error-text">
            {"VIN consists of 17 letters and numbers, no spaces"}
          </p>
        </>
      ) : (
        <input type="text" className="main-top-input" />
      )}

      <button type="submit" onClick={handleSumbit}>
        Search
      </button>
    </form>
  );
}

export default Form;
