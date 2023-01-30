import { useDispatch } from "react-redux";

import { getVinFetch } from "../../Store/Reducer/vinSlice";




function Form() {
  const dispatch = useDispatch();

  function handleSumbit(event) {
    event.preventDefault();
    const vinValue = event.target.form[0].value;
    dispatch(getVinFetch(vinValue));
    event.target.form[0].value = '';
  }

  return (
    <form action="" className="main-top">
      <h3>Enter VIN</h3>
      <input type="text" />
      <button type="submit" onClick={handleSumbit}>
        Search
      </button>
    </form>
  );
}

export default Form
