import { Grid, Card, CardContent, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";

const stats = [
  { title: "Users", value: "1,234", icon: <PeopleIcon /> },
  { title: "Orders", value: "567", icon: <ShoppingCartIcon /> },
  { title: "Revenue", value: "$12,345", icon: <AttachMoneyIcon /> },
  { title: "Reports", value: "89", icon: <AssessmentIcon /> },
];

export default function DashboardCards() {
  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{stat.title}</Typography>
              <Typography variant="h4" color="primary">
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
