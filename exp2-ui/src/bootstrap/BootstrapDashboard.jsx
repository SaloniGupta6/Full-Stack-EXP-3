import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function BootstrapDashboard() {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        {["Users", "Orders", "Revenue"].map((title, index) => (
          <Col xs={12} md={4} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Sample Data</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
