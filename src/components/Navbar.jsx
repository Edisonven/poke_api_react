import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? "active" : "inactive inactive__2";

  return (
    <div className="navbar__container">
      <div>
        <img className="navbar__img" src="/images/logo.png" alt="" />
      </div>
      <div className="navbar__links">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
