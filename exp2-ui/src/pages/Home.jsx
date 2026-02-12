import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="fw-bold mb-4 text-center">
          🚀 Welcome to My Modern SPA
        </h1>
      </motion.div>

      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-lg border-0 rounded-4 p-3 text-center">
            <h4>⚡ Fast Routing</h4>
            <p>Client-side navigation with no page reload.</p>
            <Button variant="primary" onClick={() => navigate("/products")}>
              Explore Products
            </Button>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg border-0 rounded-4 p-3 text-center">
            <h4>🔐 Protected Routes</h4>
            <p>Secure dashboard with authentication.</p>
            <Button variant="dark" onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </Button>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg border-0 rounded-4 p-3 text-center">
            <h4>🎨 Modern UI</h4>
            <p>Bootstrap + Material UI + Animations.</p>
            <Button variant="success" onClick={() => navigate("/about")}>
              Learn More
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
