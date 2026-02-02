import { Form, Button, Container } from "react-bootstrap";

export default function BootstrapLogin() {
  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3>Bootstrap Login</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
}
