import { Container, Row, Col, Card, Form, Button, Table, Alert, Modal } from "react-bootstrap";
import { useState } from "react";

function ComponentsDemo() {
  const [show, setShow] = useState(false);

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 text-center">🧩 UI Components Demo</h2>

      <Row className="g-4 mb-4">
        {/* Form */}
        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-3">
            <h5 className="fw-bold mb-3">📋 User Form</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select>
                  <option>Select role</option>
                  <option>Admin</option>
                  <option>User</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary">Submit</Button>
            </Form>
          </Card>
        </Col>

        {/* Alert */}
        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-3">
            <h5 className="fw-bold mb-3">🚨 Alerts</h5>
            <Alert variant="success">Success! Action completed.</Alert>
            <Alert variant="warning">Warning! Check your input.</Alert>
            <Alert variant="danger">Error! Something went wrong.</Alert>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        {/* Table */}
        <Col md={8}>
          <Card className="shadow-sm border-0 rounded-4 p-3">
            <h5 className="fw-bold mb-3">📊 Data Table</h5>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Saloni</td>
                  <td>saloni@example.com</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rahul</td>
                  <td>rahul@example.com</td>
                  <td>User</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ananya</td>
                  <td>ananya@example.com</td>
                  <td>User</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>

        {/* Modal */}
        <Col md={4}>
          <Card className="shadow-sm border-0 rounded-4 p-3 text-center">
            <h5 className="fw-bold mb-3">🪟 Modal Popup</h5>
            <Button variant="info" onClick={() => setShow(true)}>
              Open Modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to proceed?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setShow(false)}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ComponentsDemo;
