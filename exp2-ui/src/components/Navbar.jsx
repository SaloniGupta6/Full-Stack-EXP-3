import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Switch } from "@mui/material";

function AppNavbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  return (
    <Navbar bg={darkMode ? "dark" : "primary"} variant="dark" expand="lg" className="px-4">
      <Container fluid>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Exp-2 Dashboard
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center gap-3">
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
