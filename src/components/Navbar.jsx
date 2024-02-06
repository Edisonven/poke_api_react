import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div className="navbar__container">
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} to="/pokemon">
        Pokemon
      </NavLink>
    </div>
  );
};

export default Navbar;
