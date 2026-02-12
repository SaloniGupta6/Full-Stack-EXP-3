import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Products() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Laptop", price: "₹60,000" },
    { id: 2, name: "Mobile", price: "₹30,000" },
    { id: 3, name: "Headphones", price: "₹5,000" },
  ];

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4">🛒 Our Products</h2>
      <Row className="g-4">
        {products.map((p) => (
          <Col md={4} key={p.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="shadow-lg border-0 rounded-4 text-center p-3">
                <h4>{p.name}</h4>
                <p className="text-muted">{p.price}</p>
                <Button onClick={() => navigate(`/products/${p.id}`)}>
                  View Details
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
