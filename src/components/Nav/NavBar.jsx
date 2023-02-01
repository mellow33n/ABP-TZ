
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
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
    <main className="main">
      <Outlet/>
    </main>
    </>
  );
}


export default NavBar