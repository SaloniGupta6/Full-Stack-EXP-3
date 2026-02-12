import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Switch } from "@mui/material";

function AppNavbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  return (
    <Navbar
      bg={darkMode ? "dark" : "primary"}
      variant="dark"
      expand="lg"
      className="px-4"
    >
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Exp-3 Dashboard
        </Navbar.Brand>

        {/* Nav Links */}
        <Nav className="me-auto gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
        </Nav>

        {/* Right Side Controls */}
        <Nav className="align-items-center gap-3">
          <span style={{ color: "white" }}>🌙</span>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <Button variant="outline-light" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
