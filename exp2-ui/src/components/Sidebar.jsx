import { Nav } from "react-bootstrap";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        backgroundColor: "#212529",
        color: "white",
        paddingTop: "20px",
      }}
    >
        <Nav.Link className="text-white" onClick={() => navigate("/components")}>
  🧩 UI Components
</Nav.Link>

      <Nav className="flex-column">
        <Nav.Link className="text-white" onClick={() => navigate("/dashboard")}>
          <FaHome className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link className="text-white" onClick={() => navigate("/profile")}>
          <FaUser className="me-2" /> Profile
        </Nav.Link>
        <Nav.Link className="text-white" onClick={() => navigate("/settings")}>
          <FaCog className="me-2" /> Settings
        </Nav.Link>
        <Nav.Link className="text-white mt-auto" onClick={() => navigate("/")}>
          <FaSignOutAlt className="me-2" /> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
