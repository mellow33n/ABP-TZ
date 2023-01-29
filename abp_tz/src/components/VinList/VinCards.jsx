import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




function VinCards () {


    const state = useSelector((data) => data);
    const navigate = useNavigate();

    const handleClick = (event, id) => {
        event.preventDefault();
        navigate(`/variables/${id}`);
    }


    return (
        <section className="list">
          {state.vinList.map((value) => (
            <div className="list-card" key={value.ID} onClick={(event) => handleClick(event, value.ID)}>
              <h4 className="list-card-tittle">{value.Name}</h4>
            </div>
          ))}
        </section>
      );
}

export default VinCards