import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 shadow-lg text-center rounded-4">
            <Card.Body>
              <h1 className="fw-bold mb-3">Experiment 3 – UI Design Dashboard</h1>
              <p className="text-muted mb-4">
                A responsive and interactive dashboard built using React and Bootstrap UI components.
              </p>

              <div className="d-flex justify-content-center gap-3">
                <Button variant="primary" size="lg" onClick={() => navigate("/dashboard")}>
                  Explore Dashboard
                </Button>
                <Button variant="outline-secondary" size="lg" onClick={() => navigate("/login")}>
                  Login
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
