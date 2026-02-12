import { Card, Typography, Button, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import saloniImg from "../assets/saloni.jpg";

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          maxWidth: 500,
          margin: "auto",
          padding: 4,
          textAlign: "center",
          borderRadius: 4,
          boxShadow: 6,
        }}
      >
<Avatar
  src={saloniImg}
  sx={{
    width: 120,
    height: 120,
    margin: "auto",
    mb: 2,
    border: "3px solid",
    borderColor: "primary.main",
    boxShadow: 4,
  }}
/>


        <Typography variant="h5" fontWeight="bold">
          Saloni Gupta
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Full Stack Developer | React Enthusiast | Hackathon Winner 🚀
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <Button variant="contained">Edit Profile</Button>
          <Button variant="outlined" color="error">
            Logout
          </Button>
        </Stack>
      </Card>
    </motion.div>
  );
}

export default Profile;
