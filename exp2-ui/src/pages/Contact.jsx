import { Container, Card, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-4">
      <Card className="shadow-lg border-0 rounded-4 p-4">
        <h2 className="fw-bold mb-3">📩 Contact Us</h2>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary">Send Message</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Contact;
