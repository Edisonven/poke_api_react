import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div className="navbar__container">
      <div>
        <img className="navbar__img" src="/images/logo.png" alt="" />
      </div>
      <div className="navbar__links">
        <NavLink className={`nav__link ${setActiveClass}`} to="/">
          Home
        </NavLink>
        <NavLink className={`nav__link ${setActiveClass}`} to="/pokemon">
          Pokemon
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
