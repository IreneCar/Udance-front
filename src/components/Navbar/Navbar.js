import { NavLink, Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../../context/auth.context"; // <== IMPORT
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import "../../custom.scss";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  let activeStyle = {
    textDecoration: "none",
    color: "#68fbd0",
  };

  return (
    <nav className="navBarStyle">
      <div className="wrap-nav">
        <div>
          <NavLink
            className="navBarLink"
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className="navBarLink"
            to="/lessons"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Lessons
          </NavLink>
        </div>

        {isLoggedIn ? (
          <div>
            <NavLink
              className="navBarLink"
              to="/profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Profile
            </NavLink>
            <Button
              className="space-between"
              variant="outline-primary"
              size="sm"
              onClick={logOutUser}
            >
              Logout
            </Button>
            <span className="navBarLink" style={{ fontWeight: "bold" }}>
              {user.name}
            </span>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <Button
                className="space-between"
                variant="outline-primary"
                size="sm"
              >
                Signup
              </Button>
            </Link>
            <Link to="/login">
              <Button
                className="space-between"
                variant="outline-primary"
                size="sm"
              >
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
