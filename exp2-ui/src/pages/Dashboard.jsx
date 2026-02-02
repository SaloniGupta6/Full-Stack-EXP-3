import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUsers, FaChartBar, FaDollarSign, FaClipboardList } from "react-icons/fa";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Dashboard() {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users Growth",
        data: [200, 400, 600, 900, 1200, 1500],
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
      },
    ],
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Daily Revenue",
        data: [500, 800, 600, 900, 1100],
        backgroundColor: "orange",
      },
    ],
  };

  const doughnutData = {
    labels: ["Completed", "Pending", "Failed"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["green", "yellow", "red"],
      },
    ],
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 text-center">📊 Dashboard Overview</h2>

      <Row className="g-4 mb-4">
        <Col md={3}>
          <Card className="shadow-sm border-0 rounded-4 text-center p-3">
            <FaUsers size={40} className="text-primary mb-2" />
            <h5>Total Users</h5>
            <h3 className="fw-bold">1,245</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm border-0 rounded-4 text-center p-3">
            <FaChartBar size={40} className="text-success mb-2" />
            <h5>Analytics</h5>
            <h3 className="fw-bold">78%</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm border-0 rounded-4 text-center p-3">
            <FaDollarSign size={40} className="text-warning mb-2" />
            <h5>Revenue</h5>
            <h3 className="fw-bold">$9,540</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm border-0 rounded-4 text-center p-3">
            <FaClipboardList size={40} className="text-danger mb-2" />
            <h5>Tasks</h5>
            <h3 className="fw-bold">24</h3>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-3">
            <h5 className="fw-bold mb-3">User Growth</h5>
            <Line data={lineData} />
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-3">
            <h5 className="fw-bold mb-3">Revenue Trends</h5>
            <Bar data={barData} />
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-3">
            <h5 className="fw-bold mb-3">Task Status</h5>
            <Doughnut data={doughnutData} />
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-3">
            <h5 className="fw-bold mb-3">System Status</h5>
            <p>✔ Server: Online</p>
            <p>✔ Database: Connected</p>
            <p>✔ API: Running</p>
            <p>✔ Security: Enabled</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
