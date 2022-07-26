import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../../context/auth.context"; // <== IMPORT
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import "../../custom.scss";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navBarStyle">
      <div className="wrap-nav">
        <div>
          <Link className="navBarLink" to="/">
            Home
          </Link>
          <Link className="navBarLink" to="/lessons">
            Lessons
          </Link>
        </div>

        {isLoggedIn ? (
          <div>
            <Link className="navBarLink" to="/profile">
              Profile
            </Link>
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
