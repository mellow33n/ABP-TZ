
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-item">
        <NavLink to="/">
          <button className="nav-item-btn">Homepage</button>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/variables">
          <button className="nav-item-btn">Variables</button>
        </NavLink>
      </div>
    </nav>
  );
}


export default NavBar