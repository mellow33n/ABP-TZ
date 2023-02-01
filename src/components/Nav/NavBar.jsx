import './navbar.scss'
import { NavLink, Outlet } from "react-router-dom";
import home_logo from "../../images/home.svg"
import info_logo from "../../images/info.svg"

function NavBar() {
  return (
    <>
    <nav className="nav">
      <div className="nav-item">
        <NavLink to="/" className={"nav-item-link"}>
          <img src={home_logo} alt="home" className='nav-logo'/>
          <p className="nav-item-btn">Homepage</p>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/variables" className={"nav-item-link"}>
          <img src={info_logo} alt="info" className='nav-logo'/>
          <p className="nav-item-btn">Variables</p>
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