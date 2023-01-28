function Form() {

  function handleSumbit(event) {
    event.preventDefault();
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
