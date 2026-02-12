import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <Card className="shadow-lg border-0 rounded-4 p-4 text-center">
        <h2>Product Details</h2>
        <p className="fs-5">You are viewing product ID: {id}</p>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          ⬅ Go Back
        </Button>
      </Card>
    </Container>
  );
}

export default ProductDetails;
