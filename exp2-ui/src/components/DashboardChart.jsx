import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { Paper, Typography } from "@mui/material";
  
  const data = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 800 },
    { month: "Mar", users: 1200 },
    { month: "Apr", users: 1500 },
    { month: "May", users: 1800 },
    { month: "Jun", users: 2100 },
  ];
  
  export default function DashboardChart() {
    return (
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          User Growth
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#c00000" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    );
  }
  