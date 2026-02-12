import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <h3>Oops! Page Not Found</h3>
      <Button className="mt-3" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Container>
  );
}

export default NotFound;
