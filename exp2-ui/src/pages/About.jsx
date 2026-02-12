import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function About() {
  return (
    <Container className="mt-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="shadow-lg border-0 rounded-4 p-4">
          <h2 className="fw-bold mb-3">About This Project</h2>
          <p>
            This project demonstrates modern Single Page Application routing
            using React Router v6, including nested routes, dynamic routing,
            protected routes, and programmatic navigation.
          </p>
          <p>
            Built using React, Bootstrap, Material UI, and Framer Motion.
          </p>
        </Card>
      </motion.div>
    </Container>
  );
}

export default About;
