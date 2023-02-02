import "./vinlist.scss";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import link_logo from "../../images/link.svg";

function VinCards() {
  const state = useSelector((data) => data);
  const navigate = useNavigate();

  const handleClick = (event, id) => {
    event.preventDefault();
    navigate(`/variables/${id}`);
  };

  return (
    <section className="cardlist">
      {state.vinList.map((value) => (
        <div className="list-card" key={value.ID}>
          <p className="list-card-tittle" key={value.Name}>
            {value.Name}
          </p>
          <img
            onClick={(event) => handleClick(event, value.ID)}
            alt=""
            src={link_logo}
            className="link-logo"
          />
        </div>
      ))}
    </section>
  );
}

export default VinCards;
